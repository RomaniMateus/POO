"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const rent_1 = require("./rent");
// register bike
// remove user
// rent bike
// return bike
class App {
    constructor() {
        this.users = [];
        this.bikes = [];
        this.rents = [];
    }
    findUser(email) {
        return this.users.find(user => user.email === email);
    }
    registerUser(user) {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.');
            }
        }
        this.users.push(user);
    }
    removeUser(email) {
        const user = this.findUser(email);
        if (!user) {
            throw new Error('User not found.');
        }
        this.users.splice(this.users.indexOf(user), 1);
    }
    registerBike(bike) {
        this.bikes.push(bike);
    }
    rentBike(bike, user, startDate, endDate) {
        const rent = rent_1.Rent.create([], bike, user, startDate, endDate);
        this.rents.push(rent);
        return rent;
    }
    returnBike(rent) {
        rent.returnBike();
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map