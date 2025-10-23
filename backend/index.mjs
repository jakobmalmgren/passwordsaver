import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hej från API");
});

app.listen(PORT, () => {
  console.log(`porten körs på: http://localhost:${PORT}`);
});
