import mongoose from "mongoose";

const RoasterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
      type: String,
      required: true
    },
    contactInfo: {
      email: { type: String, required: true },
      phoneNumber: { type: String, required: false },

    },
    beans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bean" }],
});

const Roasters = mongoose.model("Roaster", RoasterSchema);

export default Roasters;
