function solveGladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpences = 0;
    let brokenShieldCounter = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 6 === 0) {
            totalExpences += (helmetPrice + swordPrice + shieldPrice);
            brokenShieldCounter++;
            if (brokenShieldCounter % 2 === 0) {
                totalExpences += armorPrice;
            }
        } else if (i % 3 === 0) {
            totalExpences += swordPrice;
        } else if (i % 2 === 0) {

            totalExpences += helmetPrice;

        }

    }

    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`);
}


solveGladiatorExpenses(7,
    2,
    3,
    4,
    5
)