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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = __importStar(require("puppeteer"));
function getLyrics(title, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.goto(url);
        console.log('page loaded');
        console.log('starting parse');
        const allTds = yield page.evaluate(() => {
            const tds = Array.from(document.querySelectorAll('td'));
            const returningArr = [];
            for (let index = 0; index < tds.length; index++) {
                returningArr.push(tds[index].innerText);
            }
            returningArr.splice(0, returningArr.indexOf('English') + 1);
            return returningArr;
        });
        const allTdsCleaned = allTds.filter((elem) => {
            if (elem !== `\n`) {
                return elem.replace(',', 'COMMA');
            }
        });
        let hasIrrelevantBeginning = false;
        let removeBelowThisIndex = -1;
        for (let index = 0; index < allTdsCleaned.length; index++) {
            console.log('checking', allTdsCleaned[index], 'at index', index);
            if (allTdsCleaned[index] === "Romaji") {
                console.log('found romaji at index', index);
                removeBelowThisIndex = index + 2;
                hasIrrelevantBeginning = true;
                break;
            }
        }
        if (hasIrrelevantBeginning) {
            allTdsCleaned.splice(0, removeBelowThisIndex);
        }
        const lyricData = {
            title: title,
            romaji: [],
            translation: []
        };
        for (let index = 1; index < allTdsCleaned.length; index += 3) {
            lyricData.romaji.push(allTdsCleaned[index].replace(/,/g, ''));
        }
        for (let index = 2; index < allTdsCleaned.length; index += 3) {
            lyricData.translation.push(allTdsCleaned[index].replace(/,/g, ''));
        }
        browser.close();
        return lyricData;
    });
}
exports.default = getLyrics;
