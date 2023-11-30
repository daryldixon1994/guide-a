const Guide = require("../../models/Guide");
const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");
module.exports = async (req, res) => {
  try {
    let { name, resume, adress, phone } = req.body;
    // console.log("__dirname", __dirname);
    const imgBuffer = fs.readFileSync(
      path.join(
        // "C:/Users/Nadine/Desktop/blogapp/backend",
        "D:/Dévelopement WEB/guideApp/backend",
        "uploads",
        req.file.filename
      )
    );
    const dimensions = sizeOf(imgBuffer);
    if (dimensions.width < 300 && dimensions.height < 500) {
      return res.status(401).json({
        status: false,
        error: "The images dimensions should be higher than 300X500",
      });
    }

    const base64Image = await imgBuffer.toString("base64");
    const newGuide = await new Guide({
      name,
      resume,
      phone,
      adress,
      rate: Math.floor(Math.random() * 6 + 1),
      imgUrl: base64Image,
    });
    await newGuide.save();
    res
      .status(200)
      .json({ status: true, message: "Your guide was added successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
