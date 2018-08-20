const mongoose = reqire("mongoose");

const musicSchema = mongoose.Schema({
  artist: {type: String, unique: true}
})

module.exports = mongoose.model("Music", musicSchema);
