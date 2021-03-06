import { type } from "os";
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
  constructor(public nickname: string, public greets: Array<string>) {
    this.greets.push(`Hello, ${this.nickname[0]}`);
    this.greets.push(`Hey, ${this.nickname[0]}`);
    this.greets.push(`What's up, ${this.nickname[0]}`);
    this.greets.push(`Happy valentines day, ${this.nickname[0]}`);
    this.greets.push(`Is that ${this.nickname[0]}? I've missed you...`);
  }
}

const charWidth = 20;
const windowBounds = {
  x: { min: 0, max: 1024 - charWidth },
  y: { min: 0, max: 576 - charWidth },
};
const hitWidth = 64;
const hitHeight = 32;
const boxes = [
  [
    [502 - hitWidth, 502 + hitWidth],
    [556 - hitHeight, 556],
  ],
  [
    [259 - hitWidth, 259 + hitWidth],
    [556 - hitHeight, 556],
  ],
  [
    [259 - hitWidth, 259 + hitWidth],
    [0, hitHeight],
  ],
  [
    [502 - hitWidth, 502 + hitWidth],
    [0, hitHeight],
  ],
  [
    [753 - hitWidth, 753 + hitWidth],
    [0, hitHeight],
  ],
  [
    [753 - hitWidth, 753 + hitWidth],
    [556 - hitHeight, 556],
  ],
];
function hitbox(coord: number, range: Array<number>) {
  return coord >= range[0] && coord <= range[1];
}
function inSquare(coord: Array<number>, box: Array<Array<number>>) {
  return hitbox(coord[0], box[0]) && hitbox(coord[1], box[1]);
}
function getHitBox(coord: Array<number>) {
  for (let i = 0; i < boxes.length; i++) {
    if (inSquare(coord, boxes[i])) return i;
  }
  return -1;
}

const tehMessages = new Messasges("Tess", [
  "Might I interest you in some cheese?", // in some cheese or a pickle joke
  "While writing the code for this, chinmai thought of this joke: Why cant pickles be programmers? They only press DILLete",
]);
const nacMessages = new Messasges("Naomi", [
  "Hello Naomi",
  "Would you like some boba?",
]);
const lasMessages = new Messasges("Lauren", [
  "Hello Lauren",
  "maybe put some text in here",
]);
const almMessages = new Messasges("Alex", ["Hello Alex", ""]);
const jujMessages = new Messasges("Jang", [
  "Hello Jang",
  "have you decided when we will return to monke",
]);
const gahMessages = new Messasges("Gab", [
  "Hello Gab",
  "have you touched some grass today?",
]);
const secMessages = new Messasges("Seth", [
  "Hello Seth",
  "pop funko something",
]);
const gamMessages = new Messasges("Gary", [
  "Hello Gary",
  "i know youve been coding on your rpi, but have you eaten any rpi?",
]);
const tycMessages = new Messasges("Tyler", [
  "Hello Tyler",
  "something something",
]);
const maeMessages = new Messasges("Mayda", [
  "Hello Mayda",
  "are you on tinder, cuz i would swipe right (just a joke)",
]);
const mieMessages = new Messasges("Milla", [
  "Hello Milla",
  "hey, you remind me of that one character from fireboy and lava girl",
]);
const dejMessages = new Messasges("Deborah", [
  "Everybody is good!",
  "Hey, the lighting over there looks pretty good!",
]);
const albMessages = new Messasges("Alissa", [
  "Hello Alissa",
  "something really cool and nice",
]);
const ampMessages = new Messasges("Amrita", [
  "Hello Amrita",
  "have you lisened to  before, you should check them out",
  "have you lisened to before, you should check them out",
  "have you lisened to before, you should check them out",
]);
const chsMessages = new Messasges("Chinmai", [
  "Hello Chinmai",
  "wowee cool nice sentence",
]);

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
export abstract class Option {
  name: string;
  shortname: string;
  constructor(public user: Person) {}
  dismiss() {
    this.complete();
  }
  complete() {
    this.user.options = this.user.options.filter((item) => item !== this);
  }
  abstract accept(): void;
}
export abstract class HitBoxTriggeredAction extends Option {
  inRoom = true;
  constructor(public user: Person, public hitBoxNumber:number) {
    super(user);
  }
  clearHitTriggers(){
    this.user.options = this.user.options.filter(
      (x) => "inRoom" in x && x != this
    );
  }
  stillTriggered(){
   if (this.user.getHitBox() != this.hitBoxNumber) {
     this.complete();
     this.user.options = this.user.options.filter((x) => "inRoom" in x);
     this.user.sendMessage(
       "You are too far away to do this. Walk closer and try again."
     );
     return true
   }
   return false
  }

}

export class joinChat extends HitBoxTriggeredAction{
  accept(): void {
    throw new Error("Method not implemented.");
  }
  
}

export class leaveChat extends Option{
  accept(): void {
    throw new Error("Method not implemented.");
  }

}

export class Travel extends HitBoxTriggeredAction {
  constructor(
    public user: Person,
    public goToLocation: Hallway | Bedroom,
    public hitBoxNumber: number
  ) {
    super(user, hitBoxNumber);
    this.name = `Travel to ${goToLocation.name}`;
    this.clearHitTriggers
  }
  accept() {
    if (this.stillTriggered()){return}
 

    if (this.goToLocation as Hallway) {
      this.user.currentZone = this.goToLocation.num;
    }

    // is bedroom
    if ("owner" in this.goToLocation) {
      if (this.goToLocation.getAccess(this.user)) {
        this.user.currentZone = this.goToLocation.num;
      } else {
        // Get access from owner
        peopleCodes
          .get(this.goToLocation.owner)
          .options.push(
            new EntryRequest(
              peopleCodes.get(this.goToLocation.owner),
              this.user
            )
          );
      }
    }
  }
}

export class EntryRequest extends Option {
  constructor(user: Person, accessTo: Person) {
    super(user);
  }
  accept() {
    if (this.user.athome) {
      this.user.currentZone;
    } else {
      this.user.sendMessage("You must be at home to let a stranger in");
    }
  }
}

export class Person {
  /**
   * the Current active websocket
   */
  websock: Socket;
  /**
   * the items at the user's disposal
   */
  items: Array<item> = [];
  /**
   * the
   * Zone
   * that the user is currently in
   * represented by a number that corresponds to an item in the list
   */
  currentZone: number;
  /**
   * the X and Y coordinates of the player
   */
  loc: Array<number> = [0, 0];
  /**
   * If the player is currently online
   */
  online = false;
  /**
   * If the user is in their house
   */
  athome = () => this.currentZone == this.bedroomDoor;
  /**
   * A list of actions avaliable to the user
   */
  options: Array<Option> = [];
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
    this.currentZone = this.house;
  }
  /**
   * Returns a pretty version of the people
   *
   * @remarks
   * This should be used to print
   *
   * @returns
   * An object with the following data: name, code, rep, room, coord, online, atHome
   */
  exportList() {
    let out = {
      name: this.fullname,
      code: this.code,
      rep: this.rep,
      room: this.currentZone,
      coord: this.loc,
      online: this.online,
      atHome: this.athome,
    };
    return out;
  }
  sendMessage(message: string) {
    this.websock.emit("hoverText", message);
  }
  updateOptions() {}
  getHitBox() {
    for (let i = 0; i < boxes.length; i++) {
      if (inSquare(this.loc, boxes[i])) return i;
    }
    return -1;
  }
}

export let peopleCodes = new Map([
  [
    "746568",
    new Person(
      "7456568",
      "teh",
      ["Tess", "Hornbeck"],
      7,
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
/**
 * @class
 * @alias Zone
 * Test?
 */
abstract class Zone {
  givenItem: item;

  constructor(
    readonly name: string,
    readonly img: string,
    public num: number,
    readonly doors: Array<number>
  ) {}
  abstract getAccess(user: Person): boolean;
  prettyObject() {
    return {
      name: this.name,
      img: this.img,
      num: this.num,
    };
  }
}
/**
 * A zone that has no owner, any user can come and go as they please.
 * No authentication should be required to enter
 */
class Hallway extends Zone {
  getAccess(user: Person) {
    return true;
  }
}
/**
 * A zone owned by one user, their personal zone.
 * Permission from the user should be needed to enter
 */
class Bedroom extends Zone {
  owner: string;
  allowed: Array<string>;
  tempAllowed: Array<string>;
  constructor(user: Person) {
    super(`${user.fullname[0]}'s Bedroom`, `${user.abr}.png`, 0, [
      user.bedroomDoor,
    ]);
    this.owner = user.code;
    this.givenItem = user.food;
    this.num = user.house;
  }
  getAccess(user: Person) {
    if (this.allowed.includes(user.code)) {
      return true;
    }
    if (this.tempAllowed.includes(user.code)) {
      this.tempAllowed = this.tempAllowed.filter((x) => x != user.code);
      return true;
    }
    if (this.owner == user.code) {
      return true;
    }
  }
  // Give access to a user with either a person object or just a user
  giveAccess(id: string): void;
  giveAccess(id: string, user: Person): void;
  giveAccess(id: string, user?: Person) {
    if (user == undefined) {
      this.allowed.push(id);
    } else {
      this.allowed.push(user.code);
    }
  }
  // Let a user into ur room once
  giveTempAccess(id: string): void;
  giveTempAccess(id: string, user: Person): void;
  giveTempAccess(id: string, user?: Person) {
    if (user == undefined) {
      this.tempAllowed.push(id);
    } else {
      this.tempAllowed.push(user.code);
    }
  }
}

let dangerZone = new Hallway("Danger Zone!", "danger", 0, [20]);

/**
 * The list of available rooms/zones that the player could ever enter
 */
export let roomList: Array<Zone> = [dangerZone];
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
  new Hallway("North California", "norcal.png", 19, [20, 2, 14, 4, 13, 11])
);
// One for central cali
roomList.push(
  new Hallway("Central California", "cencal.png", 20, [21, 10, 15, 19, 0, 12])
);
// socal
roomList.push(
  new Hallway("Greater La Area", "socal.png", 21, [9, 7, 8, 20, 22, 5])
);
// east coast losers
roomList.push(
  new Hallway("East Coast", "eastcoast.png", 22, [3, 21, 0, 0, 1, 6])
);
