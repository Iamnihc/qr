import socketIO, { Socket } from "socket.io";

export enum playable {
  a = "§",
  b = "¤",
  c = "ˁ",
  d = "ˀ",
  e = "֍",
  f = "৩",
  g = "ᐁ",
  h = "⊙",
  i = "⏺",
  j = "☻",
  k = "⚉",
  l = "⛇",
  m = "⛄",
  n = "⛾",
  o = "❁",
  p = "❂",
  q = "⟁",
  r = "❤",
  s = "❥",
  t = "🐱",
  u = "😼",
  v = "🙀",
  w = "😿",
  x = "🐕",
  y = "🐶",
  z = "🐵",
  aa = "😮",
  ab = "⸮",
  ac = "?",
  ae = "🧋",
  af = "🍦",
  ag = "🍴",
  ah = "👽",
  ai = "❤",
  aj = "🧡",
  ak = "💛",
  al = "💚",
  am = "💙",
  an = "💜",
  ao = "💓",
  ap = "💕",
  aq = "🤚",
  ar = "📷",
  as = "🪙",
  at = "🗿",
  au = "☢",
  av = "🚫",
  aw = "☣",
  ax = "🅱",
  ay = "🏳️‍🌈",
  az = "🏳️‍⚧️",
  ba = "🍆",
  bb = "🍑",
  bc = "🥞",
  bd = "🧅",
  be = "🔪",
  bf = "🏍",
  bg = "🛺",
  bh = "🛹",
  bi = "🏎",
  bj = "🚗",
  bk = "🛴",
  bl = "🖐",
  bm = "🌵",
}
enum foods {}
enum items {
  buoy,
}

class Messasges {
  constructor(public greets: Array<string>) {}
}

const tehMessages = new Messasges([
  "Might I interest you in some cheese?", // in some cheese or a pickle joke
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

enum item {
  buoy = "buoy",
  bird = "bird",
  arepa = "Arepas",
  boba = "boba",
  cookies = "cookies",
  cake = "cake",
  brownies = "brownies",
  marcons = "Macrons",
  dino = "Dino Nuggets",
  pi = "Raspberry Pie",
  ice = "Ice cream on the fork",
  fries = "French Fries",
  salad = "Salad",
  cheesecake = "Cheesecake",
  mug = "Mug cake",
  crepe = "Crepe",
  maggi = "Maggi",
}

class Pronouns {
  constructor(public p1: string, public p2: string, public p3: string) {}
}
const he = new Pronouns("he", "him", "his");
const she = new Pronouns("she", "her", "hers");
const they = new Pronouns("they", "them", "theirs");

class Zone {
  constructor(
    readonly name: string,
    readonly img: string,
    readonly doors: Array<Zone>,
    readonly allowed: Array<string>
  ) {}
  getAccess(user: Person) {
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

export class Person {
  websock: Socket;
  items: Array<item> = [];
  room: number;
  loc: Array<number> = [0, 0];
  online = false;
  athome = false;
  constructor(
    readonly code: string,
    readonly abr: string,
    readonly fullname: Array<string>,
    readonly house: number,
    public msg: Messasges,
    readonly rep: playable,
    public food: item,
    public pronoun: Pronouns = they
  ) {
    this.msg.greets.push(`Hello, ${this.fullname[0]}`);
    this.msg.greets.push(`Hey, ${this.fullname[0]}`);
    this.msg.greets.push(`What's up, ${this.fullname[0]}`);
    this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
    this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
    this.room = this.house;
  }
}

export let peopleCodes = new Map([
  [
    "746568",
    new Person(
      "7456568",
      "teh",
      ["Tess", "Hornbeck"],
      1,
      tehMessages,
      playable.bk,
      item.arepa
    ),
  ],
  [
    "6e6163",
    new Person(
      "6e6163",
      "nac",
      ["Naomi", "Cheng"],
      2,
      nacMessages,
      playable.ae,
      item.boba
    ),
  ],
  [
    "6c6173",
    new Person(
      "6c6173",
      "las",
      ["Lauren", "Staelin"],
      3,
      lasMessages,
      playable.m,
      item.cookies
    ),
  ],
  [
    "616c6d",
    new Person(
      "616c6d",
      "alm",
      ["Alex", "McCarthy"],
      4,
      almMessages,
      playable.y,
      item.cake
    ),
  ],
  [
    "6a756a",
    new Person(
      "6a756a",
      "juj",
      ["Justin", "Jang"],
      5,
      jujMessages,
      playable.v,
      item.brownies
    ),
  ],
  [
    "676168",
    new Person(
      "676168",
      "gah",
      ["Gab", "Hussain"],
      6,
      gahMessages,
      playable.aq,
      item.marcons
    ),
  ],
  [
    "736563",
    new Person(
      "736563",
      "sec",
      ["Seth", "Canul"],
      7,
      secMessages,
      playable.c,
      item.dino
    ),
  ],
  [
    "67616d",
    new Person(
      "67616d",
      "gam",
      ["Gary", "Mejia-Martinez"],
      8,
      gamMessages,
      playable.e,
      item.pi
    ),
  ],
  [
    "747963",
    new Person(
      "747963",
      "tyc",
      ["Tyler", "Chow"],
      9,
      tycMessages,
      playable.af,
      item.ice
    ),
  ],
  [
    "6d6165",
    new Person(
      "6d6165",
      "mae",
      ["Mayda", "Estrada"],
      10,
      maeMessages,
      playable.ah,
      item.fries
    ),
  ],
  [
    "6d6965",
    new Person(
      "6d6965",
      "mie",
      ["Milla", "Elliott"],
      11,
      maeMessages,
      playable.d,
      item.salad
    ),
  ],
  [
    "64656a",
    new Person(
      "64656a",
      "dej",
      ["Deborah", "Jung"],
      12,
      dejMessages,
      playable.ar,
      item.cheesecake
    ),
  ],
  [
    "616c62",
    new Person(
      "616c62",
      "alb",
      ["Alissa", "Beckerman"],
      13,
      albMessages,
      playable.ag,
      item.mug
    ),
  ],
  [
    "616d70",
    new Person(
      "616d70",
      "amp",
      ["Amrita", "Pannu"],
      14,
      ampMessages,
      playable.bl,
      item.crepe
    ),
  ],
  [
    "636873",
    new Person(
      "636873",
      "chs",
      ["Chinmai", "Srinivas"],
      15,
      chsMessages,
      playable.bd,
      item.maggi
    ),
  ],
]);
