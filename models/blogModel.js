const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
  isDisLiked: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dislikes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    default:
      "https://www.dreamstime.com/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-image110423482",
  },
  author:{
    type: String,
    default: "Admin"
  },
},{
   toJSON:{
    virtuals:true,
   },
   toObject:{
    virtuals: true,
   },
   timestamps: true,
});

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
