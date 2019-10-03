const tilesIntersect = require('../build/tiles-intersect');

let line = [[0.1, 0.2], [3.5, 2.8]];
let tiles = tilesIntersect.calculate(line, 2);

console.log(tiles);

line = [[0.1, 0.2, 0.3], [3.5, 2.8, 4.6]];
tiles = tilesIntersect.calculate(line, 3);

console.log(tiles);


