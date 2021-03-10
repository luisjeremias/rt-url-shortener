const express = require('express');
const homeController = require('../controller/homeController');
const indexController = require('../controller/indexController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
 
               
 
router.get('/', 
authMiddleware.logged,  
homeController.login,
); 
router.post('/',
 homeController.loginAction);
router.get('/:id',indexController.indexView); 
 
router.get('/home/signup', homeController.signup);
router.post('/home/signup', homeController.signupAction); 

router.get('/home/profile/:id',
authMiddleware.isLogged,
 indexController.profile);
 
router.get('/home/index', 
authMiddleware.isLogged,
indexController.index); 
router.post('/home/index',
indexController.indexAction);
   
 
module.exports = router