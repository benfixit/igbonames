const mongoose = require("mongoose");

const TownSchema = mongoose.Schema(
    {
        name: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const Town = mongoose.model("town", TownSchema);

module.exports = Town;