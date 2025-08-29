const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const FULL_NAME = "Chethan_JS";
const DOB = "07052005";
const EMAIL = "chethan.js2022@vitstudent.ac.in";
const ROLL_NUMBER = "22BCE0187";

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "Invalid input format" });
    }

    let oddNumbers = [];
    let evenNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;
    let concatAlpha = "";

    data.forEach(item => {
      if (/^-?\d+$/.test(item)) { 
        let num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          evenNumbers.push(item.toString());
        } else {
          oddNumbers.push(item.toString());
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatAlpha += item;
      } else {
        specialChars.push(item);
      }
    });

    let reversed = concatAlpha.split("").reverse();
    let altCaps = reversed.map((ch, i) =>
      i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    ).join("");

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: altCaps
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ is_success: false, error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("BFHL API is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
