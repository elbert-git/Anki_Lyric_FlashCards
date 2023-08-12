"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createCsv_js_1 = require("./createCsv.js");
const getLyrics_js_1 = __importDefault(require("./getLyrics.js"));
const listOfUrls = {
    alienAlien: 'https://vocaloidlyrics.fandom.com/wiki/%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3_(Alien_Alien)',
    aliceInTheFreezer: 'https://vocaloidlyrics.fandom.com/wiki/%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%83%B3_(Alien_Alien)',
    telecasterBboy: 'https://vocaloidlyrics.fandom.com/wiki/%E3%83%86%E3%83%AC%E3%82%AD%E3%83%A3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%93%E3%83%BC%E3%83%9C%E3%83%BC%E3%82%A4_(Telecaster_B-Boy)',
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    Object.keys(listOfUrls).forEach((key) => __awaiter(void 0, void 0, void 0, function* () {
        const lyricData = yield (0, getLyrics_js_1.default)(key, listOfUrls[key]);
        (0, createCsv_js_1.createCsv)(lyricData);
    }));
}))();
