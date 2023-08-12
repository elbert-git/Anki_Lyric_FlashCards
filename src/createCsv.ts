import * as fs from 'fs';
import { LyricsData } from './getLyrics';

export function createCsv(lyricaData:LyricsData, pathtoPutfile='.'){
    let dataToWrite:string = "front,back\n";
    const romajis = lyricaData.romaji;
    const translations = lyricaData.translation;

    // process them all
    for (let index = 0; index < romajis.length; index++) {
        if(translations[index]){//make sure there is an available pair in translation
            const current_romaji = romajis[index];
            const current_translation = translations[index];
            dataToWrite += `${current_romaji},${current_translation}\n`
        }
    }

    console.log(dataToWrite);

    fs.writeFileSync(`${pathtoPutfile}/${lyricaData.title}.csv`, dataToWrite, 'utf-8');
}