export const User = (mongoose: typeof import("mongoose")) => {
  const schema = new mongoose.Schema(
    {
      _id: "UUID",
      username: { type: String, required: true },
      email: { type: String, required: true },
      avatar: String,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("user", schema);
};
