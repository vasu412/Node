const fs = require("fs");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const url =
  "https://www.flipkart.com/wearable-smart-devices/smart-watches/pr?sid=ajy%2Cbuh&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DboAt&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&hpid=GyvrFHodWj0JnmAnTgnyZap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEsMDk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU01XR05GU0ZIWUhQNFVBVSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbImJvQXQgU21hcnR3YXRjaGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D";

const getData = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    const data = await page.content();
    fs.writeFileSync("data.txt", data);

    await browser.close();
  } catch {
    console.log("error");
  }
};

const data = fs.readFileSync("data.txt", "utf-8", (err) => {
  console.log(err);
});

const $ = cheerio.load(data.toString());
const productInfo = [];
$(".Nx9bqj").each((index, element) => {
  const price = $(element).text();
  productInfo.push({ priceOfProduct: price });
});

$(".WKTcLC").each((index, element) => {
  const titles = $(element).text();
  productInfo[index].titlesOfProduct = titles;
});

$(".UkUFwK").each((index, element) => {
  const discounts = $(element).text();
  productInfo[index].discountsOfProducts = discounts;
});

fs.writeFileSync("productData.json", JSON.stringify(productInfo));

const workbook = xlsx.utils.book_new();
const sheet = xlsx.utils.json_to_sheet(productInfo);

xlsx.utils.book_append_sheet(workbook, sheet, "Sheet1");

// Save the workbook to a file
xlsx.writeFile(workbook, "output.xlsx");

console.log("XLSX file created successfully!");
