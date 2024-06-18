class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(array, sortCriteria) {
    const tickets = [];
    let arr = array.slice(0);
    for (let i = 0; i <= arr.length - 1; i++) {
        let [destination, price, status] = arr[i].split('|');
        const ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }

   let sortedTickets = []

   if(sortCriteria === 'destination') {
    sortedTickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination) || a - b);
   } else if(sortCriteria === 'price') {
    sortedTickets = tickets.sort((a, b) => a.price - b.price || a - b);
   } else if(sortCriteria === 'status') {
    sortedTickets = tickets.sort((a, b) => a.status.localeCompare(b.status) || a - b);
   }
   console.log(sortedTickets);

}

/*
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)
    */

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'status'
   )