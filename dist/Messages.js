"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chsMessages = exports.ampMessages = exports.albMessages = exports.dejMessages = exports.maeMessages = exports.tycMessages = exports.gamMessages = exports.secMessages = exports.gahMessages = exports.jujMessages = exports.almMessages = exports.lasMessages = exports.nacMessages = exports.tehMessages = exports.Messages = void 0;
class Messages {
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
exports.Messages = Messages;
exports.tehMessages = new Messages("Tess", [
    "Might I interest you in some cheese?",
    "While writing the code for this, chinmai thought of this joke: Why cant pickles be programmers? They only press DILLete",
]);
exports.nacMessages = new Messages("Naomi", [
    "Hello Naomi",
    "Would you like some boba?",
]);
exports.lasMessages = new Messages("Lauren", [
    "Hello Lauren",
    "maybe put some text in here",
]);
exports.almMessages = new Messages("Alex", ["Hello Alex", ""]);
exports.jujMessages = new Messages("Jang", [
    "Hello Jang",
    "have you decided when we will return to monke",
]);
exports.gahMessages = new Messages("Gab", [
    "Hello Gab",
    "have you touched some grass today?",
]);
exports.secMessages = new Messages("Seth", [
    "Hello Seth",
    "pop funko something",
]);
exports.gamMessages = new Messages("Gary", [
    "Hello Gary",
    "i know youve been coding on your rpi, but have you eaten any rpi?",
]);
exports.tycMessages = new Messages("Tyler", [
    "Hello Tyler",
    "something something",
]);
exports.maeMessages = new Messages("Mayda", [
    "Hello Mayda",
    "are you on tinder, cuz i would swipe right (just a joke)",
]);
var mieMessages = new Messages("Milla", [
    "Hello Milla",
    "hey, you remind me of that one character from fireboy and lava girl",
]);
exports.dejMessages = new Messages("Deborah", [
    "Everybody is good!",
    "Hey, the lighting over there looks pretty good!",
]);
exports.albMessages = new Messages("Alissa", [
    "Hello Alissa",
    "something really cool and nice",
]);
exports.ampMessages = new Messages("Amrita", [
    "Hello Amrita",
    "have you lisened to  before, you should check them out",
    "have you lisened to before, you should check them out",
    "have you lisened to before, you should check them out",
]);
exports.chsMessages = new Messages("Chinmai", [
    "Hello Chinmai",
    "wowee cool nice sentence",
]);
//# sourceMappingURL=Messages.js.map