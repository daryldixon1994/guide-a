const Guide = require("../../models/Guide");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const data = await Guide.find({ user: id });
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
