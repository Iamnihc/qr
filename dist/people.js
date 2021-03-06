"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomList = exports.peopleCodes = exports.Person = exports.sendChat = exports.leaveChat = exports.joinChat = exports.continueSpeech = exports.talkToNPC = exports.EntryRequest = exports.Travel = exports.HitBoxTriggeredAction = exports.Option = void 0;
const item_1 = require("./item");
const Messages_1 = require("./Messages");
const playable_1 = require("./playable");
var foods;
(function (foods) {
})(foods || (foods = {}));
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
function hitbox(coord, range) {
    return coord >= range[0] && coord <= range[1];
}
function inSquare(coord, box) {
    return hitbox(coord[0], box[0]) && hitbox(coord[1], box[1]);
}
function getHitBox(coord) {
    for (let i = 0; i < boxes.length; i++) {
        if (inSquare(coord, boxes[i]))
            return i;
    }
    return -1;
}
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
class Option {
    constructor(user) {
        this.user = user;
        this.optionID = () => {
            this.user.options.indexOf(this);
        };
    }
    dismiss() {
        this.complete();
    }
    complete() {
        this.user.options = this.user.options.filter((item) => item !== this);
    }
    showTask() {
        this.user.websock.emit("options", this.user.options.forEach(element => {
            element.prettyObject();
        }));
    }
    prettyObject() {
        return {
            name: this.name,
            shortname: this.shortname,
            number: this.optionID
        };
    }
}
exports.Option = Option;
class HitBoxTriggeredAction extends Option {
    constructor(user, hitBoxNumber) {
        super(user);
        this.user = user;
        this.hitBoxNumber = hitBoxNumber;
        this.inRoom = true;
    }
    clearHitTriggers() {
        this.user.options = this.user.options.filter((x) => "inRoom" in x && x != this);
    }
    stillTriggered() {
        if (this.user.getHitBox() != this.hitBoxNumber) {
            this.complete();
            this.user.options = this.user.options.filter((x) => "inRoom" in x);
            this.user.sendMessage("You are too far away to do this. Walk closer and try again.");
            return true;
        }
        return false;
    }
}
exports.HitBoxTriggeredAction = HitBoxTriggeredAction;
class Travel extends HitBoxTriggeredAction {
    constructor(user, goToLocation, hitBoxNumber) {
        super(user, hitBoxNumber);
        this.user = user;
        this.goToLocation = goToLocation;
        this.hitBoxNumber = hitBoxNumber;
        this.name = `Travel to ${goToLocation.name}`;
        this.clearHitTriggers;
    }
    accept() {
        if (this.stillTriggered()) {
            return;
        }
        if (this.goToLocation) {
            this.user.currentZone = this.goToLocation.num;
        }
        // is bedroom
        if ("owner" in this.goToLocation) {
            if (this.goToLocation.getAccess(this.user)) {
                this.user.currentZone = this.goToLocation.num;
            }
            else {
                // Get access from owner
                exports.peopleCodes
                    .get(this.goToLocation.owner)
                    .options.push(new EntryRequest(exports.peopleCodes.get(this.goToLocation.owner), this.user));
            }
        }
    }
}
exports.Travel = Travel;
class EntryRequest extends Option {
    constructor(user, accessTo) {
        super(user);
    }
    accept() {
        if (this.user.athome) {
            this.user.currentZone;
        }
        else {
            this.user.sendMessage("You must be at home to let a stranger in");
        }
    }
}
exports.EntryRequest = EntryRequest;
class talkToNPC extends HitBoxTriggeredAction {
    accept() {
        throw new Error("Method not implemented.");
    }
}
exports.talkToNPC = talkToNPC;
class continueSpeech extends Option {
    accept() {
        throw new Error("Method not implemented.");
    }
}
exports.continueSpeech = continueSpeech;
class joinChat extends HitBoxTriggeredAction {
    accept() {
        throw new Error("Method not implemented.");
    }
}
exports.joinChat = joinChat;
class leaveChat extends Option {
    accept() {
        throw new Error("Method not implemented.");
    }
}
exports.leaveChat = leaveChat;
class sendChat extends Option {
    accept() {
        throw new Error("Method not implemented.");
    }
}
exports.sendChat = sendChat;
class Person {
    constructor(code, abr, fullname, house, msg, rep, food, bedroomDoor, pronoun = they) {
        this.code = code;
        this.abr = abr;
        this.fullname = fullname;
        this.house = house;
        this.msg = msg;
        this.rep = rep;
        this.food = food;
        this.bedroomDoor = bedroomDoor;
        this.pronoun = pronoun;
        /**
         * the items at the user's disposal
         */
        this.items = [];
        /**
         * the X and Y coordinates of the player
         */
        this.loc = [0, 0];
        /**
         * If the player is currently online
         */
        this.online = false;
        /**
         * If the user is in their house
         */
        this.athome = () => this.currentZone == this.bedroomDoor;
        /**
         * A list of actions avaliable to the user
         */
        this.options = [];
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
    sendMessage(message) {
        this.websock.emit("hoverText", message);
    }
    updateOptions() { }
    getHitBox() {
        for (let i = 0; i < boxes.length; i++) {
            if (inSquare(this.loc, boxes[i]))
                return i;
        }
        return -1;
    }
}
exports.Person = Person;
exports.peopleCodes = new Map([
    [
        "746568",
        new Person("7456568", "teh", ["Tess", "Hornbeck"], 7, Messages_1.tehMessages, playable_1.playable.bk, item_1.item.arepa, 22),
    ],
    [
        "6e6163",
        new Person("6e6163", "nac", ["Naomi", "Cheng"], 2, Messages_1.nacMessages, playable_1.playable.ae, item_1.item.boba, 19),
    ],
    [
        "6c6173",
        new Person("6c6173", "las", ["Lauren", "Staelin"], 3, Messages_1.lasMessages, playable_1.playable.m, item_1.item.cookies, 22),
    ],
    [
        "616c6d",
        new Person("616c6d", "alm", ["Alex", "McCarthy"], 4, Messages_1.almMessages, playable_1.playable.y, item_1.item.cake, 19),
    ],
    [
        "6a756a",
        new Person("6a756a", "juj", ["Justin", "Jang"], 5, Messages_1.jujMessages, playable_1.playable.v, item_1.item.brownies, 21),
    ],
    [
        "676168",
        new Person("676168", "gah", ["Gab", "Hussain"], 6, Messages_1.gahMessages, playable_1.playable.aq, item_1.item.marcons, 22),
    ],
    [
        "736563",
        new Person("736563", "sec", ["Seth", "Canul"], 7, Messages_1.secMessages, playable_1.playable.c, item_1.item.dino, 21),
    ],
    [
        "67616d",
        new Person("67616d", "gam", ["Gary", "Mejia-Martinez"], 8, Messages_1.gamMessages, playable_1.playable.e, item_1.item.pi, 21),
    ],
    [
        "747963",
        new Person("747963", "tyc", ["Tyler", "Chow"], 9, Messages_1.tycMessages, playable_1.playable.af, item_1.item.ice, 21),
    ],
    [
        "6d6165",
        new Person("6d6165", "mae", ["Mayda", "Estrada"], 10, Messages_1.maeMessages, playable_1.playable.ah, item_1.item.fries, 20),
    ],
    [
        "6d6965",
        new Person("6d6965", "mie", ["Milla", "Elliott"], 11, Messages_1.maeMessages, playable_1.playable.d, item_1.item.salad, 19),
    ],
    [
        "64656a",
        new Person("64656a", "dej", ["Deborah", "Jung"], 12, Messages_1.dejMessages, playable_1.playable.ar, item_1.item.cheesecake, 20),
    ],
    [
        "616c62",
        new Person("616c62", "alb", ["Alissa", "Beckerman"], 13, Messages_1.albMessages, playable_1.playable.ag, item_1.item.mug, 19),
    ],
    [
        "616d70",
        new Person("616d70", "amp", ["Amrita", "Pannu"], 14, Messages_1.ampMessages, playable_1.playable.bl, item_1.item.crepe, 19),
    ],
    [
        "636873",
        new Person("636873", "chs", ["Chinmai", "Srinivas"], 15, Messages_1.chsMessages, playable_1.playable.bd, item_1.item.maggi, 20),
    ],
]);
/**
 * a chat message
**/
class chatMessage {
    constructor(sender, msg) {
        this.sender = sender;
        this.msg = msg;
    }
}
class Zone {
    constructor(name, img, num, doors) {
        this.name = name;
        this.img = img;
        this.num = num;
        this.doors = doors;
        this.messages = new Array();
        this.inChat = new Array();
    }
    joinChat(user) {
        this.inChat.push(user);
    }
    sendMessage(user, msg) {
        this.messages.push(new chatMessage(user, msg));
    }
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
    getAccess(user) {
        return true;
    }
}
/**
 * A zone owned by one user, their personal zone.
 * Permission from the user should be needed to enter
 */
class Bedroom extends Zone {
    constructor(user) {
        super(`${user.fullname[0]}'s Bedroom`, `${user.abr}.png`, 0, [
            user.bedroomDoor,
        ]);
        this.owner = user.code;
        this.givenItem = user.food;
        this.num = user.house;
    }
    getAccess(user) {
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
    giveAccess(id, user) {
        if (user == undefined) {
            this.allowed.push(id);
        }
        else {
            this.allowed.push(user.code);
        }
    }
    giveTempAccess(id, user) {
        if (user == undefined) {
            this.tempAllowed.push(id);
        }
        else {
            this.tempAllowed.push(user.code);
        }
    }
}
let dangerZone = new Hallway("Danger Zone!", "danger", 0, [20]);
/**
 * The list of available rooms/zones that the player could ever enter
 */
exports.roomList = [dangerZone];
// Genreate most of the zones
for (let j of exports.peopleCodes.values()) {
    exports.roomList.push(new Bedroom(j));
}
// Placeholders for people who dont extst
exports.roomList.push(dangerZone);
exports.roomList.push(dangerZone);
exports.roomList.push(dangerZone);
// UPDATE DOORS OF NORCAL
exports.roomList.push(new Hallway("North California", "norcal.png", 19, [20, 2, 14, 4, 13, 11]));
// One for central cali
exports.roomList.push(new Hallway("Central California", "cencal.png", 20, [21, 10, 15, 19, 0, 12]));
// socal
exports.roomList.push(new Hallway("Greater La Area", "socal.png", 21, [9, 7, 8, 20, 22, 5]));
// east coast losers
exports.roomList.push(new Hallway("East Coast", "eastcoast.png", 22, [3, 21, 0, 0, 1, 6]));
//# sourceMappingURL=people.js.map