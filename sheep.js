const sheep = [0,1,1,0,0,1]
const spot = []
for (x=0;x<6;x++) {
    if (sheep[x] === 0) {
        spot.push(sheep[x])
    }
}
console.log(`в массиве ${sheep} находиться ${spot.length} белые овцы`)