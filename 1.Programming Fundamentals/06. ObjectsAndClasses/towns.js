function solveTowns(arr) {
    let townsArr = [];
for(let i = 0; i < arr.length; i++) {
    let [town, latitude, longitude] = arr[i].split(' | ');
    let townObj = {};
    townObj.town = town;
    townObj.latitude = Number(latitude).toFixed(2);
    townObj.longitude = Number(longitude).toFixed(2);
    townsArr.push(townObj);
}
console.log(townsArr);
}
solveTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );