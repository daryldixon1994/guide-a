const User = require("../../models/User");

module.exports = async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};
