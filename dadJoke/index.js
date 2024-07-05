const express = require("express");
const app = express();

const getData = async () => {
  const data = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
    headers: { "X-Api-Key": "E2oc0Py/Gnon9CDgzfWboQ==mendraDEBnLL88Xn" },
  });
  const res = await data.json();
  console.log(res);
  return res;
};

const getRandomImage = async () => {
  let data = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=HgAI8o_mQF82RKKHOQgwpJUX85VsmX2sc9lvcCFVkzU&count=1"
  );
  let res = await data.json();
  return res[0].urls;
};

app.get("/api/random_dad_joke", async (req, res) => {
  try {
    const data = await getData();
    if (data.error) {
      res.status(500).json(data);
    } else {
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/random_image", async (req, res) => {
  try {
    const data = await getRandomImage();
    if (data.error) {
      res.status(500).json(data);
    } else {
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/random_joke&&image", async (req, res) => {
  try {
    const data1 = await getData();
    const data2 = await getRandomImage();
    res.json({ data1, data2 });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(1000, () => {
  console.log("server is running on port 1000");
});
