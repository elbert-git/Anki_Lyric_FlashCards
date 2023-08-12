"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCsv = void 0;
const fs = __importStar(require("fs"));
function createCsv(lyricaData, pathtoPutfile = '.') {
    let dataToWrite = "front,back\n";
    const romajis = lyricaData.romaji;
    const translations = lyricaData.translation;
    for (let index = 0; index < romajis.length; index++) {
        if (translations[index]) {
            const current_romaji = romajis[index];
            const current_translation = translations[index];
            dataToWrite += `${current_romaji},${current_translation}\n`;
        }
    }
    console.log(dataToWrite);
    fs.writeFileSync(`${pathtoPutfile}/${lyricaData.title}.csv`, dataToWrite, 'utf-8');
}
exports.createCsv = createCsv;
