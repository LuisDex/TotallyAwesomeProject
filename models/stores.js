const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  username: { type: String, required: true, unique:true},
  email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type:String, required:true, unique:true},
  address: String,
  hours:String,
  is_Store: {type: String, default: "yes"},
  site: String,
  games:Array,
  events: [
           {
            type:Schema.Types.ObjectId,
            ref:"Event"
           }
          ]
})

storesSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

storesSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/stores.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/stores.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const Store = mongoose.model("Store", storesSchema);

module.exports = Store;