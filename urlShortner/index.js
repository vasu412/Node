import express from "express";
import { nanoid } from "nanoid";
import fs from "fs";

const app = express();
const id = nanoid(5);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
const data = fs.readFileSync("./urlData.json");
const allUrls = JSON.parse(data);

app.post("/shorten", (req, res) => {
  const longUrl = req.body.longUrl;
  if (!isValidUrl(longUrl)) {
    return res.status(400).json({
      success: false,
      message: "Enter a valid Url",
    });
  }
  console.log("this is called");
  allUrls[id] = longUrl;
  fs.writeFileSync("./urlData.json", JSON.stringify(allUrls));

  res.json({
    shortUrl: `http://localhost:3000/${id}`,
  });
});

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;
  res.redirect(allUrls[shortUrl]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
