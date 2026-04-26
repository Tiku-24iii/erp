const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://shraddhak2104:Shraddha79@ac-y73cgzx-shard-00-00.5mnx4yc.mongodb.net:27017,ac-y73cgzx-shard-00-01.5mnx4yc.mongodb.net:27017,ac-y73cgzx-shard-00-02.5mnx4yc.mongodb.net:27017/examDB?ssl=true&replicaSet=atlas-qwjmpw-shard-0&authSource=admin&retryWrites=true&w=majority"
        );
        console.log("MongoDB Atlas Connected");
    } catch (err) {
        console.log("DB Error:", err);
    }
};

module.exports = connectDB;