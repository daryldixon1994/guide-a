const Guide = require("../../models/Guide");
const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");
module.exports = async (req, res) => {
  try {
    let { name, resume, adress, phone } = req.body;
    // const imgBuffer = fs.readFileSync(
    //   path.join(
    //     "D:/Dévelopement WEB/guideApp/backend",
    //     "uploads",
    //     req.file.filename
    //   )
    // );
    // const dimensions = sizeOf(imgBuffer);
    // if (dimensions.width < 300 && dimensions.height < 500) {
    //   return res.status(401).json({
    //     status: false,
    //     error: "The images dimensions should be higher than 300X500",
    //   });
    // }

    // const base64Image = await imgBuffer.toString("base64");
    const imgUrl = `/uploads/${req.file.filename}`;
    // ${req.protocol}://${req.headers.host}/uploads/${req.file.filename}
    const newGuide = await new Guide({
      name,
      resume,
      phone,
      adress,
      rate: Math.floor(Math.random() * 5 + 1),
      imgUrl,
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
