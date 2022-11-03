const express = require("express");
const WalletController = require("../controllers/wallet.controller");
const { ADD_PREFIX, GET_PREFIX } = require("../config/public.config");
const router = express.Router();

router.post(ADD_PREFIX, WalletController.addAddress);
router.post(GET_PREFIX, WalletController.getAllAddress);

module.exports = router;