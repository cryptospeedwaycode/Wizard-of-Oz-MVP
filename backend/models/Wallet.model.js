const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
	address: {
		type: String,
		required: true
	},
	mintData: [
		{
			amount: { type: Number },
			price: { type: Number },
			total: { type: Number },
			addressType: { type: String, enum: ['metamask', 'walletconnect'] },
			created: {
				type: Date,
				default: Date.now
			}
		}
	],
	created: {
		type: Date,
		default: Date.now
	}
});
module.exports = wallet = mongoose.model("walletaddress", WalletSchema);