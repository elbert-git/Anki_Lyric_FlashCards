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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const lyricData = yield (0, getLyrics_js_1.default)('alice in the freezer', 'https://vocaloidlyrics.fandom.com/wiki/Alice_in_%E5%86%B7%E5%87%8D%E5%BA%AB_(Alice_in_Reitouko)');
    (0, createCsv_js_1.createCsv)(lyricData);
}))();
