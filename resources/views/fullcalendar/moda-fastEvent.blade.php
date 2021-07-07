<div
    class="modal fade"
    id="modalFastEvent"
    tabindex="-1"
    role="dialog"
    aria-labelledby="titleModal"
    aria-hidden="true"
>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Fechar"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="message"></div>
                <form id="formFastEvent">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Titulo</label>
                        <div class="col-sm-8">
                            <input
                                type="text"
                                name="title"
                                class="form-control-plaintext"
                                id="title"
                            />
                            <input type="hidden" name="id" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label"
                            >Data/hora Inicial</label
                        >
                        <div class="col-sm-8">
                            <input
                                type="text"
                                name="start"
                                class="form-control-plaintext time"
                                id="start"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label"
                            >Data/hora Final</label
                        >
                        <div class="col-sm-8">
                            <input
                                type="text"
                                name="end"
                                class="form-control-plaintext time"
                                id="end"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label"
                            >Data/hora Final</label
                        >
                        <div class="col-sm-8">
                            <input
                                type="color"
                                name="color"
                                class="form-control-plaintext"
                                id="color"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Descrição</label>
                        <div class="col-sm-8">
                            <textarea
                                name="description"
                                class="form-control-plaintext"
                                cols="40"
                                rows="4"
                                id="description"
                            ></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Fechar
                </button>
                <button type="button" class="btn btn-primary deleteFasEvent">
                    Deletar
                </button>
                <button type="button" class="btn btn-primary saveFastEvent">
                    Salvar
                </button>
            </div>
        </div>
    </div>
</div>
