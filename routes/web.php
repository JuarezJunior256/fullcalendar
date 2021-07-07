<?php


Route::get('/', 'FullCalendarController@index')->name('index');

Route::get('/load-events', 'EventController@loadEvents')->name('routeLoadEvents');
Route::put('/event-update', 'EventController@update')->name('routeEventUpdate');
Route::post('/event-store', 'EventController@store')->name('routeEventStore');
Route::post('/event-delete', 'EventController@delete')->name('routeEventDelete');

Route::post('/fast-event-delete', 'FastEventController@delete')->name('routeFastEventDelete');
Route::put('/fast-event-update', 'FastEventController@update')->name('routeFastEventUpdate');
Route::post('/fast-event-store', 'FastEventController@store')->name('routeFastEventStore');
