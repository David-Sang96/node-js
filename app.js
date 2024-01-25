const express = require("express");
// import express from "express";
const app = express();
const port = 3000;

//must set path or route in order cuz it is sync ကွက်ကျော်ပြီးထားရင် အောက်ကဟာကိုမကြည့်ပေးတော့ဘူး

app.get("/", (req, res) => {
  res.sendFile("/views/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("<h1>about</h1> ");
  res.sendFile("/views/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact.html", { root: __dirname });
});

app.get("/contact-us", (req, res) => {
  res.redirect("/contact");
});

app.use((req, res) => {
  res.status(404);
  res.sendFile("./views/404.html", { root: __dirname });
});

app.listen(port);
