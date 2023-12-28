const Guide = require("../../models/Guide");

module.exports = async (req, res) => {
  try {
    let { id, guideId } = req.query;
    const userAdded = await Guide.findByIdAndUpdate(
      guideId,
      { $set: { user: id, isReserved: true, isPending: true } },
      { new: true }
    );
    res.status(200).json({ status: true, data: userAdded });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
