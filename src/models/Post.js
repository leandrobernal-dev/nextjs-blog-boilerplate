import Content from "@/models/Content";
import mongoose, { Schema } from "mongoose";

const postsDb = mongoose.connection.useDb("Posts");
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: [true, "Slug Already Exist!"],
    },
    featured: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

PostSchema.virtual("content", {
  ref: Content,
  localField: "_id",
  foreignField: "post",
});
const Post = postsDb.model("Posts", PostSchema);
export default Post;
