const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        document:{
            type:String,
            unique: true
        },
        name:{
            type:String
        },
        password:{
            type:String
        },
        role:{
            type: ["user","admin"],
            default: "user",
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("users", UserScheme)