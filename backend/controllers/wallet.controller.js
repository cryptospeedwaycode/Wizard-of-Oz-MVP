const WalletModel = require("../models/Wallet.model");

exports.addAddress = async (req, res) => {
	try {
		var mintData = await WalletModel.findOneAndUpdate({ address: req.body.address }, {
			address: req.body.address,
			$push: {
				mintData: {
					amount: req.body.amount,
					price: req.body.price,
					total: req.body.total,
					addressType: req.body.addressType
				}
			}
		}, { upsert: true });
		const data = await WalletModel.findOne({ address: req.body.address });
		return res.status(200).send({ flag: 'success', data: data, message: 'Address added successfully.' });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ flag: 'failure' });
	}
};

exports.getAllAddress = async (req, res) => {
	try {
		const data = await WalletModel.find().sort({ "created": 1 });
		return res.status(200).send({ data });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ flag: 'failure' });
	}
};