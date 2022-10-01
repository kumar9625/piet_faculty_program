const bodyParser = require('body-parser');
const express = require("express");

const app = express();

const path = require('path');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 1234;
async function main() {
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());


    var ObjectId = require('mongodb').ObjectId;
    const uri = "mongodb+srv://rohitverma:mongopiet@cluster0.3wi1rkb.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("Piet_Faculty_Program").collection("facultydata");

    app.set('views', path.join(__dirname, '/views'));

    app.use("/assets", express.static('assets'));

    app.post("/submitdetails", async (req, res, next) => {

        const user = {
            facultyinfo : {
                name: req.body.tname,
                email: req.body.tmail,
                teacherid: req.body.tid,
                department: req.body.tdept,
                DOJ: req.body.tdoj
            },
            researchinfo: {
                name: "nameisthis"
            }
           
        }

        console.log(user);

        const result = await db.insertOne(user).catch(err => {
            console.log(err);
            res.status(200).json({ message: 'creating user failed!' })
        });
        res.redirect('/');
    });



    app.get('/', (req, res) => {
        res.render('home.ejs')
    })
    app.get('*', (req, res) => {
        res.render('home.ejs');
    })

}

main().catch(console.error);


app.listen(PORT, () => {
    console.log("listening on port 1010");
})
