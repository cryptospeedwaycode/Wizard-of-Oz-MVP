const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
	address: {
		type: String,
		required: true
	}
});
module.exports = wallet = mongoose.model("settings", SettingsSchema);