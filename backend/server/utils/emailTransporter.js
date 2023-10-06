import nodemailer from "nodemailer";

export const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nadirmouradi.15@gmail.com",
    pass: "pcelrljqrzfsdonu",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
