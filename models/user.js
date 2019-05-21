const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const user_Schema = new Schema({
  username: { type: String, required: true, unique:true},
  email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  password: {type:String, required:true, unique:true},
  name:String,
  games:Array,
  host:Boolean,
  location:String,
  is_Store: {type:String, default: "no"},
  userCreated: {type: Date, default: Date.now},
  events: [
    {
     type:Schema.Types.ObjectId,
     ref:"Event"
    }
   ]
})

user_Schema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

user_Schema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model("User", user_Schema);

module.exports = User;