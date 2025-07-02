const testRoute = async (req, res) => {
  try {
    console.log("Test route hit!");
    res.status(200).json({ 
      success: true,
      message: "Test route is working perfectly" 
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = { testRoute };