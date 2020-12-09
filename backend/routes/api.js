const Router = require('koa-router');
const passport = require('koa-passport');

//elementsController = require('./controllers/elements'),
const userController = require('./view/user');
const widgetsController =  require('./view/widgets');
//settingsController =  require('./controllers/settings');

router = new Router();

// User
router.post('/user/login/', userController.userLogin);
router.post('/user/signin/', userController.userSignin);
router.post('/user/profile/', passport.authenticate('jwt', { session: false }), userController.userProfile);
router.post('/user/balance/', passport.authenticate('jwt', { session: false }), userController.userBalance);

// Widget list
router.post('/widgets/get/', passport.authenticate('jwt', { session: false }), widgetsController.getWidgets);
router.post('/widgets/GetById/', passport.authenticate('jwt', { session: false }), widgetsController.getWidgetById);
router.post('/widgets/create/', passport.authenticate('jwt', { session: false }), widgetsController.addWidget);
router.post('/widgets/update/:id/', passport.authenticate('jwt', { session: false }), widgetsController.updateWidget);
router.post('/widgets/delete/:id/', passport.authenticate('jwt', { session: false }), widgetsController.deleteWidget);

// Widget settings
// router.post('/element/settings/:id/', passport.authenticate('jwt', { session: false }), elementsController.updateElementSettings);

// Answer list
// router.post('/answer/get/', passport.authenticate('jwt', { session: false }), elementsController.getAnswers);
// router.post('/answer/GetById/', passport.authenticate('jwt', { session: false }), elementsController.getAnswerById);
// router.post('/answer/create/', passport.authenticate('jwt', { session: false }), elementsController.addAnswer);
// router.post('/answer/update/:id/', passport.authenticate('jwt', { session: false }), elementsController.updateAnswer);
// router.post('/answer/delete/:id/', passport.authenticate('jwt', { session: false }), elementsController.deleteAnswer);

// Answer settings
// router.post('/answer/settings/:id/', passport.authenticate('jwt', { session: false }), elementsController.updateAnswerSettings);

// Office settings
// router.post('/office/settings/', passport.authenticate('jwt', { session: false }), officeController.updateAnswerSettings);

// Elementary.CRM
// router.post('/crm/get/', passport.authenticate('jwt', { session: false }), crmController.getLeads);
// router.post('/crm/create/', passport.authenticate('jwt', { session: false }), crmController.createLead);

module.exports = router;