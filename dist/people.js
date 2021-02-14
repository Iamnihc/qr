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
    playable["bm"] = "\uD83C\uDF35";
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
    "Might I interest you in some cheese?",
    "While writing the code for this, chinmai thought of this joke: ",
]);
const nacMessages = new Messasges(["Hello Naomi", "Would you like some boba?"]);
const lasMessages = new Messasges([
    "Hello Lauren",
    "maybe put some text in here",
]);
const almMessages = new Messasges(["Hello Alex", ""]);
const jujMessages = new Messasges([
    "Hello Jang",
    "have you decided when we will return to monke",
]);
const gahMessages = new Messasges([
    "Hello Gab",
    "have you touched some grass today?",
]);
const secMessages = new Messasges(["Hello Seth", "pop funko something"]);
const gamMessages = new Messasges([
    "Hello Gary",
    "i know youve been coding on your rpi, but have you eaten any rpi?",
]);
const tycMessages = new Messasges(["Hello Tyler", "something something"]);
const maeMessages = new Messasges([
    "Hello Mayda",
    "are you on tinder, cuz i would swipe right (just a joke)",
]);
const mieMessages = new Messasges([
    "Hello Milla",
    "hey, you remind me of that one character from fireboy and lava girl",
]);
const dejMessages = new Messasges([
    "Everybody is good!",
    "Hey, the lighting over there looks pretty good!",
]);
const albMessages = new Messasges([
    "Hello Alissa",
    "something really cool and nice",
]);
const ampMessages = new Messasges([
    "Hello Amrita",
    "have you lisened to before, you should check them out",
    "have you lisened to before, you should check them out",
    "have you lisened to before, you should check them out",
]);
const chsMessages = new Messasges(["Hello Chinmai", "wow cool nice sentence"]);
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
})(item || (item = {}));
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
class Zone {
    constructor(name, img, doors, allowed) {
        this.name = name;
        this.img = img;
        this.doors = doors;
        this.allowed = allowed;
    }
    getAccess(user) {
        if (this.allowed == []) {
            return true;
        }
        if (this.allowed.includes(user.code)) {
            return true;
        }
        return false;
    }
}
let dangerZone = new Zone("Danger Zone!", "danger", [], []);
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
        this.items = [];
        this.loc = [0, 0];
        this.online = false;
        this.athome = false;
        this.msg.greets.push(`Hello, ${this.fullname[0]}`);
        this.msg.greets.push(`Hey, ${this.fullname[0]}`);
        this.msg.greets.push(`What's up, ${this.fullname[0]}`);
        this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
        this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
        this.room = this.house;
    }
}
exports.Person = Person;
exports.peopleCodes = new Map([
    [
        "746568",
        new Person("7456568", "teh", ["Tess", "Hornbeck"], 1, tehMessages, playable.bk, item.arepa),
    ],
    [
        "6e6163",
        new Person("6e6163", "nac", ["Naomi", "Cheng"], 2, nacMessages, playable.ae, item.boba),
    ],
    [
        "6c6173",
        new Person("6c6173", "las", ["Lauren", "Staelin"], 3, lasMessages, playable.m, item.cookies),
    ],
    [
        "616c6d",
        new Person("616c6d", "alm", ["Alex", "McCarthy"], 4, almMessages, playable.y, item.cake),
    ],
    [
        "6a756a",
        new Person("6a756a", "juj", ["Justin", "Jang"], 5, jujMessages, playable.v, item.brownies),
    ],
    [
        "676168",
        new Person("676168", "gah", ["Gab", "Hussain"], 6, gahMessages, playable.aq, item.marcons),
    ],
    [
        "736563",
        new Person("736563", "sec", ["Seth", "Canul"], 7, secMessages, playable.c, item.dino),
    ],
    [
        "67616d",
        new Person("67616d", "gam", ["Gary", "Mejia-Martinez"], 8, gamMessages, playable.e, item.pi),
    ],
    [
        "747963",
        new Person("747963", "tyc", ["Tyler", "Chow"], 9, tycMessages, playable.af, item.ice),
    ],
    [
        "6d6165",
        new Person("6d6165", "mae", ["Mayda", "Estrada"], 10, maeMessages, playable.ah, item.fries),
    ],
    [
        "6d6965",
        new Person("6d6965", "mie", ["Milla", "Elliott"], 11, maeMessages, playable.d, item.salad),
    ],
    [
        "64656a",
        new Person("64656a", "dej", ["Deborah", "Jung"], 12, dejMessages, playable.ar, item.cheesecake),
    ],
    [
        "616c62",
        new Person("616c62", "alb", ["Alissa", "Beckerman"], 13, albMessages, playable.ag, item.mug),
    ],
    [
        "616d70",
        new Person("616d70", "amp", ["Amrita", "Pannu"], 14, ampMessages, playable.bl, item.crepe),
    ],
    [
        "636873",
        new Person("636873", "chs", ["Chinmai", "Srinivas"], 15, chsMessages, playable.bd, item.maggi),
    ],
]);
//# sourceMappingURL=people.js.map