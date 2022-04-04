//CASO 1
const bookings = [
    {
        roomType: "standard",
        pax: 1,
        nights: 3
    },
    {
        roomType: "standard",
        pax: 1,
        nights: 4
    },
    {
        roomType: "suite",
        pax: 2,
        nights: 1
    }
];

class PrivateHotelBookings {
    constructor(){
        this._bookings = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculateRoonType(type){
        const roomType = {
            standard: 100,
            suite: 150
        };
        return roomType[type];
    };

    calculateExtraPerson(pax, nights){
        let extraPerson = (pax > 1) ? ((pax-1) * nights * 40) : 0;
        return extraPerson;
    };

    calculateSubtotal(){
        this._subtotal = bookings.reduce((acc, {roomType, pax, nights}) => acc + (nights * this.calculateRoonType(roomType)) + this.calculateExtraPerson(pax , nights), 0);
    };
    
    calculateTotal(){
        this._total = this.subtotal + (this.subtotal * 0.21);
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set bookings(booking){
        this._bookings = booking;
        this.calculateSubtotal();
        this.calculateTotal();
    }
}

const privateBooking = new PrivateHotelBookings();
privateBooking.bookings = bookings;
console.log("Subtotal Private Hotel Bookings: " + privateBooking.subtotal + "€");
console.log("Total Private Hotel Bookings: " + privateBooking.total+ "€");

console.log("=====================");

//CASO 2
class TourOperatorHotelBookings extends PrivateHotelBookings{
    calculateRoonType(type){
        const roomType = {
            standard: 100,
            suite: 100
        };
        return roomType[type];
    };

    calculateTotal(){
        this._total = (this.subtotal + (this.subtotal * 0.21));
        this._total = this._total - (this._total * 0.15);
    }
}

const TourOperatorooking = new TourOperatorHotelBookings();
TourOperatorooking.bookings = bookings;
console.log("Subtotal Tour Operator Hotel Bookings: " + TourOperatorooking.subtotal + "€");
console.log("Total Tour Operator Hotel Bookings: " + TourOperatorooking.total+ "€");




