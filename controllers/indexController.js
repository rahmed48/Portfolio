const axios = require("axios");

module.exports = {
  viewIndex: async (req, res, next) => {
    try {
      console.log("success");
      res.render("home/viewHome", {
        message: "success",
      });
    } catch (error) {
      console.log(error);
      res.redirect(`/home`);
    }
  },
};
