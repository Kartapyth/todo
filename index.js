import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {
        tohome : toDOHome
    })
})

app.post("/", (req, res) => {
    toDOHome.push(req.body.todo)
    res.render("index.ejs", {
        tohome : toDOHome
    })
})

app.get("/work", (req, res) => {
    res.render("work.ejs", {
        towork : toDOWork
    })
})

app.post("/work", (req, res) => {
    toDOWork.push(req.body.todo)
    res.render("work.ejs", {
        towork : toDOWork
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

var toDOHome = []

var toDOWork = []