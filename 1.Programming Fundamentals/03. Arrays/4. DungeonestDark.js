function solveDungeonestDark(arr) {
    let initialHealth = 100;
    let currentHealth = initialHealth;
    let coins = 0;

    let rooms = arr[0].split('|');

for(let i = 0; i < rooms.length; i++) {
    let[entity, points] = rooms[i].split(' ');
    
    if(entity === 'chest') {
        coins += Number(points);
        console.log(`You found ${points} coins.`)
    } else  if(entity === 'potion') {
        let healthPoints = Number(points);
        let difference = 0;
        if(currentHealth + healthPoints > initialHealth) {
            difference = initialHealth - currentHealth;
            currentHealth = initialHealth;                      
            console.log(`You healed for ${difference} hp.`);          
        } else {
            currentHealth += healthPoints;
            console.log(`You healed for ${healthPoints} hp.`);
        }
        
        console.log(`Current health ${currentHealth}.`);
    } else {
        let monsterAttack = Number(points);
        currentHealth -= monsterAttack;
        if(currentHealth > 0) {
            console.log(`You slayed ${entity}.`);
            
        } else if(currentHealth <= 0) {
            console.log(`You died! Killed by ${entity}.`);
            console.log(`Best room: ${i + 1}.`);
            break;
        }
    }
}

if(currentHealth > 0) {
    console.log(`You've made it!\ Coins: ${coins}\nHealth: ${currentHealth}.`);
}

}

//solveDungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solveDungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);