const SettingsModel = require("../models/Settings.model");

exports.getAllSettings = async (req, res) => {
	try {
		const data = await SettingsModel.findOne();
		return res.status(200).send({ data });
	} catch (err) {
		console.log(err);
		return res.send(500).send({ flag: 'failure' });
	}
};