import mongoose from "mongoose";

const TableData = new mongoose.Schema(
  {
    ReservationDate: {
      type: String,
      required: true,
    },
    ReservationDay: {
      type: String,
      required: true,
    },
    ReservationTime: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    occassion: {
      type: String,
      required: true,
    },
    partySize: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    request: {
      type: String,
      default: "No request From Client",
    },
    status: {
      type: Boolean,
      default: false,
    },
    ReservationMeal: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const Table = mongoose.model("tableReservations", TableData);
