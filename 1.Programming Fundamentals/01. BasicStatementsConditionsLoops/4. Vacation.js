function solveVacation(num, group, day) {
    let singlePrice = 0;

    if(group === 'Students' && day === 'Friday') {
        singlePrice = 8.45;
    } else if(group === 'Students' && day === 'Saturday') {
        singlePrice = 9.8;
    } else if(group === 'Students' && day === 'Sunday') {
        singlePrice = 10.46;
    } else if(group === 'Business' && day === 'Friday') {
        singlePrice = 10.9;
    } else if(group === 'Business' && day === 'Saturday') {
        singlePrice = 15.6;
    } else if(group === 'Business' && day === 'Sunday') {
        singlePrice = 16;
    } else if(group === 'Regular' && day === 'Friday') {
        singlePrice = 15;
    } else if(group === 'Regular' && day === 'Saturday') {
        singlePrice = 20;
    } else if(group === 'Regular' && day === 'Sunday') {
        singlePrice = 22.5;
    }

    let totalPrice = num * singlePrice;

    let finalPrice = 0;

    if(group === 'Students' && num >= 30
    ) {
        finalPrice = totalPrice * 0.85;
    } else if(group === 'Business' && num >= 100) {
        finalPrice = (num - 10) * singlePrice;
    } else if(group === 'Regular' && (num >= 10 && num <= 20)) {
        finalPrice = totalPrice * 0.95;
    }else {
        finalPrice = totalPrice;
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

solveVacation(30, "Students", "Sunday");
solveVacation(40, "Regular", "Saturday");