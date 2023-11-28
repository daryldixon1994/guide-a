const Guide = require("../../models/Guide");

module.exports = async function getGuide(req, res) {
  const { id } = req.params;

  try {
    const guide = await Guide.findById(id).populate("user", "userName imgUrl");
    if (!guide) {
      return res.status(404).json({ message: "Guide not found with id " + id });
    }
    res.status(200).json({ status: true, data: guide });
  } catch (err) {
    if (err) throw err;
    res.status(500).send({ message: "Error retrieving guide with id " + id });
  }
};
