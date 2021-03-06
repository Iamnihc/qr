"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peopleCodes = exports.item = exports.playable = void 0;
const Messages_1 = require("./Messages");
const people_1 = require("./people");
var playable;
(function (playable) {
    playable["a"] = "\u00A7";
    playable["b"] = "\u00A4";
    playable["c"] = "\u02C1";
    playable["d"] = "\u02C0";
    playable["e"] = "\u058D";
    playable["f"] = "\u09E9";
    playable["g"] = "\u1401";
    playable["h"] = "\u2299";
    playable["i"] = "\u23FA";
    playable["j"] = "\u263B";
    playable["k"] = "\u2689";
    playable["l"] = "\u26C7";
    playable["m"] = "\u26C4";
    playable["n"] = "\u26FE";
    playable["o"] = "\u2741";
    playable["p"] = "\u2742";
    playable["q"] = "\u27C1";
    playable["r"] = "\u2764";
    playable["s"] = "\u2765";
    playable["t"] = "\uD83D\uDC31";
    playable["u"] = "\uD83D\uDE3C";
    playable["v"] = "\uD83D\uDE40";
    playable["w"] = "\uD83D\uDE3F";
    playable["x"] = "\uD83D\uDC15";
    playable["y"] = "\uD83D\uDC36";
    playable["z"] = "\uD83D\uDC35";
    playable["aa"] = "\uD83D\uDE2E";
    playable["ab"] = "\u2E2E";
    playable["ac"] = "?";
    playable["ae"] = "\uD83E\uDDCB";
    playable["af"] = "\uD83C\uDF66";
    playable["ag"] = "\uD83C\uDF74";
    playable["ah"] = "\uD83D\uDC7D";
    playable["ai"] = "\u2764";
    playable["aj"] = "\uD83E\uDDE1";
    playable["ak"] = "\uD83D\uDC9B";
    playable["al"] = "\uD83D\uDC9A";
    playable["am"] = "\uD83D\uDC99";
    playable["an"] = "\uD83D\uDC9C";
    playable["ao"] = "\uD83D\uDC93";
    playable["ap"] = "\uD83D\uDC95";
    playable["aq"] = "\uD83E\uDD1A";
    playable["ar"] = "\uD83D\uDCF7";
    playable["as"] = "\uD83E\uDE99";
    playable["at"] = "\uD83D\uDDFF";
    playable["au"] = "\u2622";
    playable["av"] = "\uD83D\uDEAB";
    playable["aw"] = "\u2623";
    playable["ax"] = "\uD83C\uDD71";
    playable["ay"] = "\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08";
    playable["az"] = "\uD83C\uDFF3\uFE0F\u200D\u26A7\uFE0F";
    playable["ba"] = "\uD83C\uDF46";
    playable["bb"] = "\uD83C\uDF51";
    playable["bc"] = "\uD83E\uDD5E";
    playable["bd"] = "\uD83E\uDDC5";
    playable["be"] = "\uD83D\uDD2A";
    playable["bf"] = "\uD83C\uDFCD";
    playable["bg"] = "\uD83D\uDEFA";
    playable["bh"] = "\uD83D\uDEF9";
    playable["bi"] = "\uD83C\uDFCE";
    playable["bj"] = "\uD83D\uDE97";
    playable["bk"] = "\uD83D\uDEF4";
    playable["bl"] = "\uD83D\uDD90";
    playable["bm"] = "\uD83C\uDF35";
})(playable = exports.playable || (exports.playable = {}));
var foods;
(function (foods) {
})(foods || (foods = {}));
var item;
(function (item) {
    item["buoy"] = "buoy";
    item["bird"] = "bird";
    item["arepa"] = "Arepas";
    item["boba"] = "boba";
    item["cookies"] = "cookies";
    item["cake"] = "cake";
    item["brownies"] = "brownies";
    item["marcons"] = "Macrons";
    item["dino"] = "Dino Nuggets";
    item["pi"] = "Raspberry Pie";
    item["ice"] = "Ice cream on the fork";
    item["fries"] = "French Fries";
    item["salad"] = "Salad";
    item["cheesecake"] = "Cheesecake";
    item["mug"] = "Mug cake";
    item["crepe"] = "Crepe";
    item["maggi"] = "Maggi";
})(item = exports.item || (exports.item = {}));
exports.peopleCodes = new Map([
    [
        "746568",
        new people_1.Person("7456568", "teh", ["Tess", "Hornbeck"], 7, Messages_1.tehMessages, playable.bk, item.arepa, 22),
    ],
    [
        "6e6163",
        new people_1.Person("6e6163", "nac", ["Naomi", "Cheng"], 2, Messages_1.nacMessages, playable.ae, item.boba, 19),
    ],
    [
        "6c6173",
        new people_1.Person("6c6173", "las", ["Lauren", "Staelin"], 3, Messages_1.lasMessages, playable.m, item.cookies, 22),
    ],
    [
        "616c6d",
        new people_1.Person("616c6d", "alm", ["Alex", "McCarthy"], 4, Messages_1.almMessages, playable.y, item.cake, 19),
    ],
    [
        "6a756a",
        new people_1.Person("6a756a", "juj", ["Justin", "Jang"], 5, Messages_1.jujMessages, playable.v, item.brownies, 21),
    ],
    [
        "676168",
        new people_1.Person("676168", "gah", ["Gab", "Hussain"], 6, Messages_1.gahMessages, playable.aq, item.marcons, 22),
    ],
    [
        "736563",
        new people_1.Person("736563", "sec", ["Seth", "Canul"], 7, Messages_1.secMessages, playable.c, item.dino, 21),
    ],
    [
        "67616d",
        new people_1.Person("67616d", "gam", ["Gary", "Mejia-Martinez"], 8, Messages_1.gamMessages, playable.e, item.pi, 21),
    ],
    [
        "747963",
        new people_1.Person("747963", "tyc", ["Tyler", "Chow"], 9, Messages_1.tycMessages, playable.af, item.ice, 21),
    ],
    [
        "6d6165",
        new people_1.Person("6d6165", "mae", ["Mayda", "Estrada"], 10, Messages_1.maeMessages, playable.ah, item.fries, 20),
    ],
    [
        "6d6965",
        new people_1.Person("6d6965", "mie", ["Milla", "Elliott"], 11, Messages_1.maeMessages, playable.d, item.salad, 19),
    ],
    [
        "64656a",
        new people_1.Person("64656a", "dej", ["Deborah", "Jung"], 12, Messages_1.dejMessages, playable.ar, item.cheesecake, 20),
    ],
    [
        "616c62",
        new people_1.Person("616c62", "alb", ["Alissa", "Beckerman"], 13, Messages_1.albMessages, playable.ag, item.mug, 19),
    ],
    [
        "616d70",
        new people_1.Person("616d70", "amp", ["Amrita", "Pannu"], 14, Messages_1.ampMessages, playable.bl, item.crepe, 19),
    ],
    [
        "636873",
        new people_1.Person("636873", "chs", ["Chinmai", "Srinivas"], 15, Messages_1.chsMessages, playable.bd, item.maggi, 20),
    ],
]);
//# sourceMappingURL=peopleCodes.js.map