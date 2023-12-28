const Guide = require("../../models/Guide");
const fs = require("fs");
const path = require("path");
module.exports = async (req, res) => {
  try {
    let { id } = req.query;
    // const imgBuffer = fs.readFileSync(
    //   path.join(
    //     "C:/Users/Nadine/Desktop/blogapp/backend",
    //     "uploads",
    //     req.file.filename
    //   )
    // );
    // const base64Image = await imgBuffer.toString("base64");
    // console.log(req.file);
    const imgUrl =`/uploads/${req.file.filename}`;
    // console.log(imgUrl)
    const updatedUser = await Guide.findByIdAndUpdate(
      id,
      {
        $set: { imgUrl },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: true,
      message: "Your profile picture has been updated successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
