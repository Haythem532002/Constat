const factory = require("./handlerFactory");
const Constat = require("./../models/constatModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const nodemailer = require("nodemailer");

exports.createConstat = catchAsync(async (req, res, next) => {
  const constat = await Constat.create(req.body);
  if (!constat) {
    return next(new AppError("There is no constat with email address.", 404));
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "stmp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "wassim.kraiem.ess@gmail.com",
      pass: "ugikfswzhbexevyk",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: `${constat.adressEmailA},${constat.adressEmailB}`,
    subject: "Constat Issatso",
    text: `here's your submited constat : ${constat}`,
  };

  const sendMail = catchAsync(async (transporter, mailOptions) => {
    await transporter.sendMail(mailOptions);
  });

  sendMail(transporter, mailOptions);
  res.status(201).json({
    status: "success",
    data: {
      constat,
    },
  });
});
exports.getAllConstat = factory.getAll(Constat);
exports.getConstat = factory.getOne(Constat);
exports.updateConstat = factory.updateOne(Constat);
exports.deleteConstat = factory.deleteOne(Constat);
