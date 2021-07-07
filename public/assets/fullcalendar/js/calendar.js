document.addEventListener("DOMContentLoaded", function () {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable;

    /* initialize the external events
    -----------------------------------------------------------------*/

    var containerEl = document.getElementById("external-events-list");
    new Draggable(containerEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
            return {
                title: eventEl.innerText.trim(),
            };
        },
    });

    /* initialize the calendar
    -----------------------------------------------------------------*/

    var calendarEl = document.getElementById("calendar");
    var calendar = new Calendar(calendarEl, {
        plugins: ["interaction", "dayGrid", "timeGrid", "list"],
        header: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        locale: "pt-br",
        navLinks: true,
        evetLimit: true,
        selectable: true,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function (e) {
            let Event = JSON.parse(e.draggedEl.dataset.event);
            // is the "remove after drop" checkbox checked?
            if (document.getElementById("drop-remove").checked) {
                // if so, remove the element from the "Draggable Events" list
                e.draggedEl.parentNode.removeChild(e.draggedEl);

                Event.method = "DELETE";
                sendEvent(routeEvents("routeFastEventDelete"), Event);
            }

            let start = moment(`${e.dateStr} ${Event.start}`).format(
                "YYYY-MM-DD HH:mm:ss"
            );
            let end = moment(`${e.dateStr} ${Event.end}`).format(
                "YYYY-MM-DD HH:mm:ss"
            );

            Event.start = start;
            Event.end = end;

            delete Event.id;
            delete Event._method;

            sendEvent(routeEvents("routeEventStore"), Event);
        },
        eventDrop: function (e) {
            let start = moment(e.event.start).format("YYYY-MM-DD HH:mm:ss");
            let end = moment(e.event.end).format("YYYY-MM-DD HH:mm:ss");
            let newEvent = {
                _method: "PUT",
                title: e.event.title,
                id: e.event.id,
                start: start,
                end: end,
            };
            sendEvent(routeEvents("routeEventUpdate"), newEvent);
        },
        eventClick: function (e) {
            resetForm("#formEvent");

            $("#modalCalendar").modal("show");
            $("#modalCalendar #titleModal").text("Alterar Evento");
            $("#modalCalendar button.deleteEvent").css("display", "flex");

            console.log(e);

            let id = e.event.id;
            $("#modalCalendar input[name='id']").val(id);

            let title = e.event.title;
            $("#modalCalendar input[name='title']").val(title);

            let start = moment(e.event.start).format("DD/MM/YYYY 00:00:00");
            $("#modalCalendar input[name='start']").val(start);

            let end = moment(e.event.end).format("DD/MM/YYYY 00:00:00");
            $("#modalCalendar input[name='end']").val(end);

            let color = e.event.color;
            $("#modalCalendar input[name='color']").val(color);

            let description = e.event.extendedProps.description;
            $("#modalCalendar textarea[name='description']").val(description);
        },
        eventResize: function () {},
        select: function (e) {
            resetForm("#formEvent");

            $("#modalCalendar").modal("show");
            $("#modalCalendar #titleModal").text("Salvar Evento");
            $("#modalCalendar button.deleteEvent").css("display", "none");

            let start = moment(e.start).format("DD/MM/YYYY 00:00:00");
            $("#modalCalendar input[name='start']").val(start);

            let end = moment(e.end).format("DD/MM/YYYY 00:00:00");
            $("#modalCalendar input[name='end']").val(end);

            $("#modalCalendar input[name='color']").val("#3788D8");

            calendar.unselect();
        },
        events: routeEvents("routeLoadEvents"),
    });
    calendar.render();
});
