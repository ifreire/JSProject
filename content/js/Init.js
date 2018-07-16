var Event = {
    DOM_CONTENT_LOADED : "DOMContentLoaded",
    CLICK : "click",
    CHANGE : "change",
    HTTP_VERBS : new HTTP_VERBS(),
    WS_LOCAL : "http://127.0.0.1:5000/",
    WS_HEROKU : "https://wsflasktest.herokuapp.com/",
    WS_TIMEOUT : 350
};

function HTTP_VERBS()
{
    this.GET = "get";
    this.POST = "post";
    this.DELETE = "delete";
    this.PUT = "put";
    this.HEAD = "head";
    this.PATCH = "patch";
    this.CONNECT = "connect";
    this.OPTIONS = "options";
    this.TRACE = "trace";
}