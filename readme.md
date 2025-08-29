# BFHL API

A simple Node.js API using Express that processes an array of inputs and returns:

- Odd and even numbers  
- Alphabets and special characters  
- Sum of numbers  
- Concatenated string with alternating caps

## Usage

### Web Interface
Open `/bfhl` in your browser, enter a JSON array (e.g., `["a","1","334","4","R","$"]`) and click **Submit**.

### API
**POST** `/bfhl` with JSON body:
```json
{
  "data": ["a","1","334","4","R","$"]
}
```

Response:
```json
{
  "is_success": true,
  "user_id": "chethanjs_07052005",
  "email": "chethan.js2022@vitstudent.ac.in",
  "roll_number": "22BCE0187",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Run Locally
```bash
npm install
npm start
```
Visit `http://localhost:3000/bfhl` in your browser.
