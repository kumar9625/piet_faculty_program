const bodyParser = require('body-parser');
const express = require("express");
require('dotenv').config();
const fileUpload = require('express-fileupload')

const app = express();
var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dunlvkcoz',
    api_key: '721921499293763',
    api_secret: '2_0mvW1DIHFUI6vwn2yEIK9TJq4'
});

const path = require('path');
const { MongoClient } = require('mongodb');

const fs = require("fs");
const PORT = process.env.PORT || 1234;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// excel file 
const excelService = require("./service/excelService");

async function main() {
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    }));
    app.set('views', path.join(__dirname, '/views'));
    app.use("/assets", express.static('assets'));
    app.set('view engine', 'ejs');



    var ObjectId = require('mongodb').ObjectId;

    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://rohitverma:mongopiet@cluster0.3wi1rkb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db("Piet_Faculty_Program").collection("facultydata");

    app.set('views', path.join(__dirname, '/views'));

    app.use("/assets", express.static('assets'));

    app.post("/submitdetails", async (req, res, next) => {
        // console.log(req.files);

        let cres = await cloudinary.v2.uploader.upload(req.files.rpdf.tempFilePath,{ folder: 'PIET_FACULTY', public_id: `${req.body.tname}/rpaper-${req.body.rtitle}`} ,(result, err) => {
            const datainfo = result;
            console.log(err);
        });

        const user = {
            facultyinfo: {
                name: req.body.tname,
                teacher_email: req.body.tmail,
                teacher_id: req.body.tid,
                teacher_dept: req.body.tdept,
                doj: req.body.tdoj
            },
            researchinfo: {
                sno: req.body.rno,
                paper_title: req.body.rtitle,
                paper_journal: req.body.rname,
                paper_volume: req.body.rvol,
                year: req.body.ryear
            },
            conferenceinfo: {
                conf: req.body.cname,
                conf_place: req.body.cplace,
                conf_date: req.body.cdate
            },
            paperpresentinfo: {
                paper_Ptitle: req.body.pptitle,
                paper_Pname: req.body.ppname,
                paper_Pplace: req.body.ppplace,
                ppdoj: req.body.ppdate,
                ppmyFile: req.body.pppdf
            },
            patentinfo: {
                patent_name: req.body.ppatent,
                patent_publish: req.body.ppublish,
                patent_auth: req.body.pauthor,
                patent_doj: req.body.pdate
            },
            workshopinfo: {
                ws_Title: req.body.wtitle,
                ws_Venue: req.body.wvenue,
                ws_Org: req.body.worg,
                ws_Doj: req.body.wdate
            
            },
            awardsinfo: {
                a_Name: req.body.aname,
                a_Given: req.body.agiven,
                a_doj: req.body.adate,
                a_link: cres.url
            }


        }

        console.log(user);

        const result = await db.insertOne(user).catch(err => {
            console.log(err);
            res.status(200).json({ message: 'creating user failed!' })
        });
        
        // console.log(cres);


        res.redirect('/');
    });



    app.get('/', async (req, res) => {

        res.render('home.ejs', { excelService });


    })
    app.get('/getexcelfile', (req, res) => {
        res.send("file saved")
       excelService.getExcel();


    })

    app.get('*', (req, res) => {
        res.render('home.ejs', { excelService });
    })


}

main().catch(console.error);


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
