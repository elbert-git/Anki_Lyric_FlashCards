import * as puppeteer from 'puppeteer'

interface LyricsData{
    romaji:Array<string>,
    translation:Array<string>
}

export default async function getLyrics(url:string){
    //get page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log('page loaded');

    //get element
    console.log('starting parse')
    const allTds = await page.evaluate(()=>{
        const tds = Array.from(document.querySelectorAll('td'));
        const returningArr = [];
        for (let index = 0; index < tds.length; index++) {
            returningArr.push(tds[index].innerText);
        }
        returningArr.splice(0, returningArr.indexOf('English')+1)
        return returningArr;
    });

    const allTdsCleaned = allTds.filter((elem)=>{if(elem !== `\n`){return elem}})
    console.log(allTdsCleaned)

    //order all tds
    const lyricData:LyricsData = {
        romaji:[],
        translation:[]
    };
    for (let index = 1; index < allTdsCleaned.length; index+=3) {
        lyricData.romaji.push(allTdsCleaned[index])
    }
    for (let index = 2; index < allTdsCleaned.length; index+=3) {
        lyricData.translation.push(allTdsCleaned[index])
    }
    console.log('romaji', lyricData.romaji)
    console.log('translation', lyricData.translation)
    return lyricData




    browser.close();
}
