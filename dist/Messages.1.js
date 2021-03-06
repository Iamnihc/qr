"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
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
//# sourceMappingURL=Messages.1.js.map