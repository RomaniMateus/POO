import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";


// register bike
// remove user
// rent bike
// return bike

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User {
        return this.users.find(user => user.email === email)
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        this.users.push(user)
    }

    removeUser(email: string): void {
        const user = this.findUser(email)
        if (!user) {
            throw new Error('User not found.')
        }
        this.users.splice(this.users.indexOf(user), 1)
    }

    registerBike(bike: Bike): void {
        this.bikes.push(bike)
    }


    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date): Rent {

        if (!this.findUser(user.email)) {
            throw new Error('User not found.')
        }
        if (!this.bikes.includes(bike)) {
            throw new Error('Bike not found.')
        }

        const rent = Rent.create([], bike, user, startDate, endDate)
        this.rents.push(rent)
        return rent
    }

    returnBike(rent: Rent): void {
        rent.returnBike()
    }
}