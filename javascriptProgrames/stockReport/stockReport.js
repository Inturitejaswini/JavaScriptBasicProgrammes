const access = require('./stockReportBL');
const fs = require('fs');
try{
let pkg = JSON.parse(fs.readFileSync('./stockReport.json'));
access.stockAccountManagement(pkg);
}catch(err){
    console.log(err);
}