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
  "While writing the code for this, chinmai thought of this joke: Why cant pickles be programmers? They only press DILLete",
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
  "have you lisened to  before, you should check them out",
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

export class Person {
  websock: Socket;
  items: Array<item> = [];
  currentZone: number;
  loc: Array<number> = [0, 0];
  online = false;
  athome = false;
  constructor(
    readonly code: string,
    readonly abr: string,
    readonly fullname: Array<string>,
    readonly house: number,
    public msg: Messasges,
    public rep: playable,
    public food: item,
    public bedroomDoor: number,
    public pronoun: Pronouns = they
  ) {
    this.msg.greets.push(`Hello, ${this.fullname[0]}`);
    this.msg.greets.push(`Hey, ${this.fullname[0]}`);
    this.msg.greets.push(`What's up, ${this.fullname[0]}`);
    this.msg.greets.push(`Happy valentines day, ${this.fullname[0]}`);
    this.msg.greets.push(`Is that ${this.fullname[0]}? I've missed you...`);
    this.currentZone = this.house;
  }
  exportList() {
    let out = {
      name: this.fullname,
      code: this.code,
      rep: this.rep,
      room: this.currentZone,
      coord: this.loc,
    };
    return out;
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
      item.arepa,
      22
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
      item.boba,
      19
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
      item.cookies,
      22
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
      item.cake,
      19
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
      item.brownies,
      21
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
      item.marcons,
      22
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
      item.dino,
      21
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
      item.pi,
      21
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
      item.ice,
      21
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
      item.fries,
      20
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
      item.salad,
      19
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
      item.cheesecake,
      20
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
      item.mug,
      19
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
      item.crepe,
      19
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
      item.maggi,
      20
    ),
  ],
]);

abstract class Zone {
  constructor(
    readonly name: string,
    readonly img: string,
    readonly doors: Array<number>
  ) {}
  abstract getAccess(user: Person): boolean;
}

class Hallway extends Zone {
  getAccess(user: Person) {
    return true;
  }
}
class Bedroom extends Zone {
  owner: string;
  allowed: Array<string>;
  constructor(user: Person) {
    super(`${user.fullname[0]}'s Bedroom`, `${user.abr}.png`, [
      user.bedroomDoor,
    ]);
    this.owner = user.code;
  }
  getAccess(user: Person) {
    if (this.allowed.includes(user.code)) {
      return true;
    }
    if (this.owner == user.code) {
      return true;
    }
  }
  giveAccess(id: string): void;
  giveAccess(id: string, user: Person): void;
  giveAccess(id: string, user?: Person) {
    if (user == undefined) {
      this.allowed.push(id);
    } else {
      this.allowed.push(user.code);
    }
  }
}

let dangerZone = new Hallway("Danger Zone!", "danger", [20]);

let roomList: Array<Zone> = [dangerZone];
// Genreate most of the zones

for (let j of peopleCodes.values()) {
  roomList.push(new Bedroom(j));
}

// Placeholders for people who dont extst
roomList.push(dangerZone);
roomList.push(dangerZone);
roomList.push(dangerZone);

// UPDATE DOORS OF NORCAL
roomList.push(
  new Hallway("North California", "norcal.png", [20, 2, 14, 4, 13, 11])
);
// One for central cali
roomList.push(
  new Hallway("Central California", "cencal.png", [21, 10, 15, 19, 0, 12])
);
// socal
roomList.push(
  new Hallway("Greater La Area", "socal.png", [9, 7, 8, 20, 22, 5])
);
// east coast losers
roomList.push(new Hallway("East Coast", "eastcoast.png", [3, 21, 0, 0, 1, 6]));
