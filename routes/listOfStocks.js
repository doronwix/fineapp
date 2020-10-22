const axios = require("axios");
const express = require("express");
const router = express.Router();

const htmlExtractor = require("html-extract-js");

router.get("/:all?", function (req, res) {
  let url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";
  axios.get(url).then((response) => {
    let extractor = htmlExtractor.load(response.data, { charset: "UTF-8" }),
      html = extractor.$("#main-content").html();
    return html;
  });
});

module.exports = router;
