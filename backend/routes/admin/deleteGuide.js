const Guide = require("../../models/Guide");

module.exports = async function deleteGuide(req, res) {
  try {
    const { id } = req.params;
    await Guide.findByIdAndDelete(id);
    return res.status(200).json({ message: "Guide deleted successfully!" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};
