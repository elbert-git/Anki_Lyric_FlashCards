import { createCsv } from "./createCsv.js";
import getLyrics from "./getLyrics.js";

// getLyrics('https://vocaloidlyrics.fandom.com/wiki/KING');
// getLyrics('https://vocaloidlyrics.fandom.com/wiki/%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3_(Alien_Alien)')
// getLyrics('https://vocaloidlyrics.fandom.com/wiki/%E3%82%AD%E3%83%A1%E3%83%A9_(Chimera)/DECO*27')

const listOfUrls:{[key:string]:string} = {
    alienAlien: 'https://vocaloidlyrics.fandom.com/wiki/%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3_(Alien_Alien)',
    aliceInTheFreezer: 'https://vocaloidlyrics.fandom.com/wiki/%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3_(Alien_Alien)',
    telecasterBboy: 'https://vocaloidlyrics.fandom.com/wiki/%E3%83%86%E3%83%AC%E3%82%AD%E3%83%A3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%93%E3%83%BC%E3%83%9C%E3%83%BC%E3%82%A4_(Telecaster_B-Boy)',

};

(async ()=>{
    Object.keys(listOfUrls).forEach(async (key)=>{
        const lyricData = await getLyrics(key, listOfUrls[key]) ;
        createCsv(lyricData);
    })
})();