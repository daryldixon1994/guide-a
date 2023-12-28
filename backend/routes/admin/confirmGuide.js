const Guide = require("../../models/Guide");
module.exports = async (req, res) => {
  try {
    let { GuideId } = req.query;
    
    const newGuide = await Guide.findByIdAndUpdate(
      GuideId,
      {
        $set: { isPending: false },
      },
      { new: true }
    );
    res.status(200).json({ status: true, message: "Guide is confirmed" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
