import mongoose, { Schema } from "mongoose";
const eventSchema = new mongoose.Schema({
  id: String,
  title: String,
  is_online: Boolean,
  organisation_name: String,
  themes: Array<any>,
  registrations_count: Number,
  thumbnail_url: String,
  displayed_location: String,
  description: {
    type:Schema.Types.Mixed
  },
});

const events = mongoose.models.events || mongoose.model("events", eventSchema);
export default events;
