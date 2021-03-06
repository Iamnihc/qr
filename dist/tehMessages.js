"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chsMessages = exports.ampMessages = exports.albMessages = exports.dejMessages = exports.maeMessages = exports.tycMessages = exports.gamMessages = exports.secMessages = exports.gahMessages = exports.jujMessages = exports.almMessages = exports.lasMessages = exports.nacMessages = exports.tehMessages = exports.Messasges = void 0;
class Messasges {
    constructor(nickname, greets) {
        this.nickname = nickname;
        this.greets = greets;
        this.greets.push(`Hello, ${this.nickname[0]}`);
        this.greets.push(`Hey, ${this.nickname[0]}`);
        this.greets.push(`What's up, ${this.nickname[0]}`);
        this.greets.push(`Happy valentines day, ${this.nickname[0]}`);
        this.greets.push(`Is that ${this.nickname[0]}? I've missed you...`);
    }
}
exports.Messasges = Messasges;
exports.tehMessages = new Messasges("Tess", [
    "Might I interest you in some cheese?",
    "While writing the code for this, chinmai thought of this joke: Why cant pickles be programmers? They only press DILLete",
]);
exports.nacMessages = new Messasges("Naomi", [
    "Hello Naomi",
    "Would you like some boba?",
]);
exports.lasMessages = new Messasges("Lauren", [
    "Hello Lauren",
    "maybe put some text in here",
]);
exports.almMessages = new Messasges("Alex", ["Hello Alex", ""]);
exports.jujMessages = new Messasges("Jang", [
    "Hello Jang",
    "have you decided when we will return to monke",
]);
exports.gahMessages = new Messasges("Gab", [
    "Hello Gab",
    "have you touched some grass today?",
]);
exports.secMessages = new Messasges("Seth", [
    "Hello Seth",
    "pop funko something",
]);
exports.gamMessages = new Messasges("Gary", [
    "Hello Gary",
    "i know youve been coding on your rpi, but have you eaten any rpi?",
]);
exports.tycMessages = new Messasges("Tyler", [
    "Hello Tyler",
    "something something",
]);
exports.maeMessages = new Messasges("Mayda", [
    "Hello Mayda",
    "are you on tinder, cuz i would swipe right (just a joke)",
]);
const mieMessages = new Messasges("Milla", [
    "Hello Milla",
    "hey, you remind me of that one character from fireboy and lava girl",
]);
exports.dejMessages = new Messasges("Deborah", [
    "Everybody is good!",
    "Hey, the lighting over there looks pretty good!",
]);
exports.albMessages = new Messasges("Alissa", [
    "Hello Alissa",
    "something really cool and nice",
]);
exports.ampMessages = new Messasges("Amrita", [
    "Hello Amrita",
    "have you lisened to  before, you should check them out",
    "have you lisened to before, you should check them out",
    "have you lisened to before, you should check them out",
]);
exports.chsMessages = new Messasges("Chinmai", [
    "Hello Chinmai",
    "wowee cool nice sentence",
]);
//# sourceMappingURL=tehMessages.js.map