
export class Messages {
  constructor(public nickname: string, public greets: Array<string>) {
    this.greets.push(`Hello, ${this.nickname[0]}`);
    this.greets.push(`Hey, ${this.nickname[0]}`);
    this.greets.push(`What's up, ${this.nickname[0]}`);
    this.greets.push(`Happy valentines day, ${this.nickname[0]}`);
    this.greets.push(`Is that ${this.nickname[0]}? I've missed you...`);
  }
}
export let tehMessages = new Messages("Tess", [
  "Might I interest you in some cheese?",
  "While writing the code for this, chinmai thought of this joke: Why cant pickles be programmers? They only press DILLete",
]);
export let nacMessages = new Messages("Naomi", [
  "Hello Naomi",
  "Would you like some boba?",
]);
export let lasMessages = new Messages("Lauren", [
  "Hello Lauren",
  "maybe put some text in here",
]);
export let almMessages = new Messages("Alex", ["Hello Alex", ""]);
export let jujMessages = new Messages("Jang", [
  "Hello Jang",
  "have you decided when we will return to monke",
]);
export let gahMessages = new Messages("Gab", [
  "Hello Gab",
  "have you touched some grass today?",
]);
export let secMessages = new Messages("Seth", [
  "Hello Seth",
  "pop funko something",
]);
export let gamMessages = new Messages("Gary", [
  "Hello Gary",
  "i know youve been coding on your rpi, but have you eaten any rpi?",
]);
export let tycMessages = new Messages("Tyler", [
  "Hello Tyler",
  "something something",
]);
export let maeMessages = new Messages("Mayda", [
  "Hello Mayda",
  "are you on tinder, cuz i would swipe right (just a joke)",
]);
export let mieMessages = new Messages("Milla", [
  "Hello Milla",
  "hey, you remind me of that one character from fireboy and lava girl",
]);
export let dejMessages = new Messages("Deborah", [
  "Everybody is good!",
  "Hey, the lighting over there looks pretty good!",
]);
export let albMessages = new Messages("Alissa", [
  "Hello Alissa",
  "something really cool and nice",
]);
export let ampMessages = new Messages("Amrita", [
  "Hello Amrita",
  "have you lisened to  before, you should check them out",
  "have you lisened to before, you should check them out",
  "have you lisened to before, you should check them out",
]);
export let chsMessages = new Messages("Chinmai", [
  "Hello Chinmai",
  "wowee cool nice sentence",
]);

