"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peopleCodes = exports.Person = exports.playable = void 0;
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
})(playable = exports.playable || (exports.playable = {}));
var foods;
(function (foods) {
})(foods || (foods = {}));
var items;
(function (items) {
    items[items["buoy"] = 0] = "buoy";
})(items || (items = {}));
class Messasges {
    constructor(greets) {
        this.greets = greets;
    }
}
const tehMessages = new Messasges([
    "Hello tessandra, have a happy valentines day",
    "hello again but longer, happy day",
]);
const nacMessages = new Messasges([
    "Hello Naomi",
    "maybe put some text in here",
]);
const lasMessages = new Messasges([
    "Hello Lauren",
    "maybe put some text in here",
]);
const almMessages = new Messasges([
    "Hello Alex",
    "maybe put some text in here",
]);
const jujMessages = new Messasges([
    "Hello Jang",
    "maybe put some text in here",
]);
const gahMessages = new Messasges([
    "Hello Gab",
    "maybe put some or a lot of  text in here",
]);
const secMessages = new Messasges([
    "Hello Seth",
    "maybe put some text in here",
]);
const gamMessages = new Messasges([
    "Hello Gary",
    "maybe put some text in here",
]);
const tycMessages = new Messasges([
    "Hello Tyler",
    "maybe put some text in here",
]);
const maeMessages = new Messasges([
    "Hello Mayda",
    "maybe put some text in here",
]);
const mieMessages = new Messasges([
    "Hello Milla",
    "maybe put some text in here",
]);
const dejMessages = new Messasges([
    "Hello Deborah",
    "maybe put some text in here",
]);
const albMessages = new Messasges([
    "Hello Alissa",
    "maybe put some text in here",
]);
const ampMessages = new Messasges([
    "Hello Amrita",
    "maybe put some text in here",
]);
const chsMessages = new Messasges([
    "Hello Chinmai",
    "maybe put some text in here",
]);
class Pronouns {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}
const he = new Pronouns("he", "him", "his");
const she = new Pronouns("she", "her", "hers");
const they = new Pronouns("they", "them", "theirs");
class Person {
    constructor(code, abr, fullname, house, msg, rep, food, pronoun = they) {
        this.code = code;
        this.abr = abr;
        this.fullname = fullname;
        this.house = house;
        this.msg = msg;
        this.rep = rep;
        this.food = food;
        this.pronoun = pronoun;
        this.items = [false, false, false];
        this.msg.greets.push(`Hello, ${this.fullname[0]}`);
        this.msg.greets.push(`Hey, ${this.fullname[0]}`);
        this.msg.greets.push(`What's up, ${this.fullname[0]}`);
        this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
        this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
    }
}
exports.Person = Person;
exports.peopleCodes = new Map([
    [
        "746568",
        new Person("7456568", "teh", ["Tess", "Hornbeck"], 1, tehMessages, playable.bk, "Arepas"),
    ],
    [
        "6e6163",
        new Person("6e6163", "nac", ["Naomi", "Cheng"], 2, nacMessages, playable.ae, "Boba"),
    ],
    [
        "6c6173",
        new Person("6c6173", "las", ["Lauren", "Staelin"], 3, lasMessages, playable.m, "Cookies"),
    ],
    [
        "616c6d",
        new Person("616c6d", "alm", ["Alex", "McCarthy"], 4, almMessages, playable.y, "Cake"),
    ],
    [
        "6a756a",
        new Person("6a756a", "juj", ["Justin", "Jang"], 5, jujMessages, playable.v, "Brownies"),
    ],
    [
        "676168",
        new Person("676168", "gah", ["Gab", "Hussain"], 6, gahMessages, playable.aq, "Macrons"),
    ],
    [
        "736563",
        new Person("736563", "sec", ["Seth", "Canul"], 7, secMessages, playable.c, "Dino Nuggets"),
    ],
    [
        "67616d",
        new Person("67616d", "gam", ["Gary", "Mejia-Martinez"], 8, gamMessages, playable.e, "Pizza"),
    ],
    [
        "747963",
        new Person("747963", "tyc", ["Tyler", "Chow"], 9, tycMessages, playable.af, "Ice cream on the fork"),
    ],
    [
        "6d6165",
        new Person("6d6165", "mae", ["Mayda", "Estrada"], 10, maeMessages, playable.ah, "French Fries"),
    ],
    [
        "6d6965",
        new Person("6d6965", "mie", ["Milla", "Elliott"], 11, maeMessages, playable.d, "Salad"),
    ],
    [
        "64656a",
        new Person("64656a", "dej", ["Deborah", "Jung"], 12, dejMessages, playable.ar, "Cheesecake"),
    ],
    [
        "616c62",
        new Person("616c62", "alb", ["Alissa", "Beckerman"], 13, albMessages, playable.ag, "Mug cake"),
    ],
    [
        "616d70",
        new Person("616d70", "amp", ["Amrita", "Pannu"], 14, ampMessages, playable.bl, "Crepe"),
    ],
    [
        "636873",
        new Person("636873", "chs", ["Chinmai", "Srinivas"], 15, chsMessages, playable.bd, "Maggi"),
    ],
]);
//# sourceMappingURL=people.js.map