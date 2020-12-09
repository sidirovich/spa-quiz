const widgetModel = require('../database/schema').widgetModel;

async function GetWidgets(request) {
/*
    request.body
    {
        userId: string,
    }
    response.body
    {
        code: string,
        status: string,
        content: {
            widget: {
                type,
                name,
                url,
            }
        }
    }
*/
    return await widgetModel.find({ userId: request.userId });
}

async function GetWidgetById(request) {
/*
    request
    {
        userId: string,
        widgetId: string,
    }
    response.body
    {
        code: string,
        status: string,
        content: {
            widget: {
                type,
                name,
                url,
            }
        }
    }
*/
    return await widgetModel.find({ _id: widgetId, userId });
}

async function AddWidget(request) {
/*
    request
    {
        userId: string,
        widget: {
            userId: string,
            type: string,
            name: string,
            url: string,
        },
    }
    response.body
    {
        code: string,
        status: string,
        content: {
            widget: {
                type,
                name,
                url,
            }
        }
    }
*/
    return await widgetModel.create({ type: widget.type,name: widget.name, url: widget.url });
}

async function UpdateWidget(request) {
/*
    request
    {
        userId: string,
        widget: {
            id: string
            userId: string,
            type: string,
            name: string,
            url: string,
        },
    }
*/
    return await widgetModel.findOneAndUpdate({
        id: widget.id,
        userId: request.userId,
    }, {
        type: request.type,
        name: request.name,
        url: request.url,
    });
}

async function DeleteWidget(request) {
/*
    request
    {
        userId: string,
        widget: {
            id: string
        },
    }
*/
    return await widgetModel.deleteOne({ _id: request.widget.id, userId: request.userId });
}

module.exports = {
    GetWidgets,
    GetWidgetById,
    AddWidget,
    UpdateWidget,
    DeleteWidget,
  };