import socketIO from "socket.io";

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
}
enum foods {}
enum items {
  buoy,
}

class Messasges {
  constructor(public greets: Array<string>) {}
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
  constructor(public p1: string, public p2: string, public p3: string) {}
}
const he = new Pronouns("he", "him", "his");
const she = new Pronouns("she", "her", "hers");
const they = new Pronouns("they", "them", "theirs");

export class Person {
  websock: Socket;
  items = [false, false, false];
  constructor(
    readonly code: string,
    readonly abr: string,
    readonly fullname: Array<string>,
    readonly house: number,
    public msg: Messasges,
    readonly rep: playable,
    public food: string,
    public pronoun: Pronouns = they
  ) {
    this.msg.greets.push(`Hello, ${this.fullname[0]}`);
    this.msg.greets.push(`Hey, ${this.fullname[0]}`);
    this.msg.greets.push(`What's up, ${this.fullname[0]}`);
    this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
    this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
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
      "Arepas"
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
      "Boba"
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
      "Cookies"
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
      "Cake"
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
      "Brownies"
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
      "Macrons"
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
      "Dino Nuggets"
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
      "Pizza"
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
      "Ice cream on the fork"
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
      "French Fries"
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
      "Salad"
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
      "Cheesecake"
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
      "Mug cake"
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
      "Crepe"
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
      "Maggi"
    ),
  ],
]);
