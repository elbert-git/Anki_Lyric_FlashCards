import * as puppeteer from 'puppeteer'

export interface LyricsData{
    title:string,
    romaji:Array<string>,
    translation:Array<string>
}

export default async function getLyrics(title:string, url:string){
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

    //remove new lines and commas
    const allTdsCleaned = allTds.filter((elem)=>{
        if(elem !== `\n`){
            return elem.replace(',', 'COMMA');
        }
    })

    //remove irrelavant beginnings
    //check for romanji/english/japanese headings
    let hasIrrelevantBeginning = false;
    let removeBelowThisIndex = -1;
    for (let index = 0; index < allTdsCleaned.length; index++) {
        console.log('checking', allTdsCleaned[index], 'at index', index);
        if(allTdsCleaned[index] === "Romaji"){
            console.log('found romaji at index', index)
            removeBelowThisIndex = index + 2;
            hasIrrelevantBeginning = true;
            break;
        }
    }
    if(hasIrrelevantBeginning){
        allTdsCleaned.splice(0, removeBelowThisIndex);
    }

    //order all tds
    const lyricData:LyricsData = {
        title: title,
        romaji:[],
        translation:[]
    };
    for (let index = 1; index < allTdsCleaned.length; index+=3) {
        lyricData.romaji.push(allTdsCleaned[index].replace(/,/g, ''))
    }
    for (let index = 2; index < allTdsCleaned.length; index+=3) {
        lyricData.translation.push(allTdsCleaned[index].replace(/,/g, ''))
    }
    browser.close();
    return lyricData
}
