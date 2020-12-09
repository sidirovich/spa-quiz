const forecastModel = require('../api/models/forecastModel');

async function getForecasts (ctx) {
    let jsonData;
    let querry =  await forecastModel.GetForecasts().then( data => {
        console.log('Data: ' + JSON.stringify(data));
        jsonData = JSON.stringify(data);
        return jsonData;
    } , err => {
        console.log('Err: ' + err);
    });
    ctx.body = querry;
}

async function addForecast (ctx) {
    forecastModel.CreateForecast(ctx.request.body);
}
async function upForecast (ctx) {
    forecastModel.ChangeForecast(ctx.params.id, ctx.request.body).then(result => {
        ctx.body = result;
    });
}
async function deleteForecast (ctx) {
    forecastModel.DeleteForecast(ctx.params.id);
    console.log('deleteForecast be used');
}

async function getMatches(ctx){
    let callback =  await forecastModel.getMatches(ctx.params.id).then((result) => {
        return result;
    });
    ctx.body = JSON.stringify(callback);
}

async function addMatch(ctx){
    forecastModel.addMatch(ctx.params.id, ctx.request.body).then(result => {
        ctx.body = result;
    });
}

async function editMatch(ctx){
    forecastModel.editMatch(ctx.params.id, ctx.request.body);
    console.log('Match: ' + ctx.params.id + 'edit complite');
    ctx.body = 'Match: ' + ctx.params.id + 'edit complite';
}

async function deleteMatch(ctx){
    forecastModel.deleteMatch(ctx.params.id);
    console.log('Match: ' + ctx.params.id + 'deleted');
    ctx.body = 'Match: ' + ctx.params.id + 'deleted';
}

module.exports = {
    getMatches,
    addMatch,
    editMatch,
    deleteMatch,
    getForecasts,
    addForecast,
    upForecast,
    deleteForecast,
};