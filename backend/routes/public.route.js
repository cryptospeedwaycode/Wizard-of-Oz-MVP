const express = require("express");
const { WALLET_PREFIX, SETTING_PREFIX } = require("../config/public.config");
const settingRoute = require("../routes/setting.route");
const walletRoute = require("../routes/wallet.route");
const app = express();

app.use(SETTING_PREFIX, settingRoute);
app.use(WALLET_PREFIX, walletRoute);

module.exports = app;