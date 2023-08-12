import { createCsv } from "./createCsv.js";
import getLyrics from "./getLyrics.js";

// getLyrics('https://vocaloidlyrics.fandom.com/wiki/KING');
// getLyrics('https://vocaloidlyrics.fandom.com/wiki/%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3_(Alien_Alien)')
// getLyrics('https://vocaloidlyrics.fandom.com/wiki/%E3%82%AD%E3%83%A1%E3%83%A9_(Chimera)/DECO*27')

(async ()=>{
    const lyricData = await getLyrics('alice in the freezer', 'https://vocaloidlyrics.fandom.com/wiki/Alice_in_%E5%86%B7%E5%87%8D%E5%BA%AB_(Alice_in_Reitouko)') ;
    createCsv(lyricData);
})();