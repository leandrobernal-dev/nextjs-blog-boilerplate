import mongoose, { Schema } from "mongoose";

const contentsDb = mongoose.connection.useDb("Contents");
const ContentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Content = contentsDb.model("Contents", ContentSchema);
export default Content;
