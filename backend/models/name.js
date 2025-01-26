const { Schema, model } = require("mongoose");

const NameSchema = Schema({
        title: { type: String, required: true },
        meaning: { type: String, required: true },
        poster: { type: String, required: true },
        slug: { type: String, required: true },
        extended_meaning: { type: String, required: false },
        morphology: { type: String, required: false },
        search_hits: { type: Number, required: false, default: 0 },
        last_seen: { type: String, default: Date.now(), required: false }
    }, { timestamps: true });

const Name = model("names", NameSchema);

module.exports = Name;