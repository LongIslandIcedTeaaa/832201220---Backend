const express = require('express');
const router = express.Router();
const contactsController = require('../controller/contactsController');

router.get('/', contactsController.getAllContacts);
// 其他路由...

module.exports = router;
