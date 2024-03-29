const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
// venue date opponent result runs balls fours sixes
const request = require("request");
const cheerio = require("cheerio");
const AllMatcgObj = require("./Allmatch");
const { link } = require("fs");
//home page
request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        //console.log(html);
        extractLink(html);
    }
} 

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElem = $("a[data-hover='View All Results']");
    let link = anchorElem.attr("href");
    //console.log(link);
    let fullLink = "https://www.espncricinfo.com" + link;
    //console.log(fullLink);
    //getAllMatchesLink(fullLink);
    AllMatcgObj.gAlmatches(fullLink);
}

function getAllMatchesLink(url){
    request(url, function(err,response,html){
        if(err){
        console.log(err);
    }else{
        //console.log(html);
        extractAllLinks(html);
        }

    })
}
function extractAllLinks(html){
    let $ = cheerio.load(html);
    let scorecardElems = $("a[data-hover='Scorecard']");
    for (let i = 0; i < scorecardElems.length;i++){
        let link = $(scorecardElems[i]).attr("href");
        let fullLink="https://www.espncricinfo.com"+link;
        console.log(fullLink);
        
}
}