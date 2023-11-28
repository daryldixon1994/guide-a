const Guide = require("../../models/Guide");
module.exports = async (req, res) => {
  try {
    let { id } = req.query;
    const data = await Guide.findById(id)
      .populate("user", "userName imgUrl")
     res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
}; 
    

  
