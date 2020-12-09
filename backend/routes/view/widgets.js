const widgetView = require('../controllers/widget');

async function getWidgets(ctx) {
  try {
    let query =  await widgetView.GetWidgets();
    ctx.body = query;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
}

async function getWidgetById(ctx) {
  try {
    let query =  await widgetView.GetWidgetById();
    ctx.body = query;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
}

async function addWidget(ctx) {
  try {
    let query =  await widgetView.AddWidget();
    ctx.body = query;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
}

async function updateWidget(ctx) {
  try {
    let query =  await widgetView.UpdateWidget();
    ctx.body = query;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
}

async function deleteWidget(ctx) {
  try {
    let query =  await widgetView.DeleteWidgets();
    ctx.body = query;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
}

module.exports = {
  getWidgets,
  getWidgetById,
  addWidget,
  updateWidget,
  deleteWidget,
};