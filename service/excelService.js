
const mongoXlsx = require('mongo-xlsx');
module.exports.getExcel = async () => {
    console.error("file saved!");
    const uri = "mongodb+srv://rohitverma:mongopiet@cluster0.3wi1rkb.mongodb.net/?retryWrites=true&w=majority";
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("Piet_Faculty_Program").collection("facultydata");
    allposts = [];
    dbposts = await db.find().forEach(
        results => {
            allposts.push(results);
        }).then(() => {
            
            console.log(allposts);
            var model = mongoXlsx.buildDynamicModel(allposts);
            mongoXlsx.mongoData2Xlsx(allposts, model, {path: "file:///D:/"}, function (err, allposts) {
                console.log('File saved at:', allposts.fullPath);
            });

        });
}

