function solveHeroInventory(arr) {
    let heroes = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(' / ');
        let hero = {};
        hero.name = name;
        hero.level = Number(level);
        hero.items = items.split(', ').sort((a, b) => a.localeCompare(b));
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let i = 0; i < heroes.length; i++) {
        let currentHero = heroes[i];
        console.log(`Hero: ${currentHero.name}`);
        console.log(`level => ${currentHero.level}`);
        console.log(`items: ${currentHero.items.join(', ')}`);
    }
}

solveHeroInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
);