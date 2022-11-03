const express = require("express");
const SettingController = require("../controllers/setting.controller");
const { GET_PREFIX } = require("../config/public.config");
const router = express.Router();

router.get(GET_PREFIX, SettingController.getAllSettings);

module.exports = router;