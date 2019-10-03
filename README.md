# tiles-intersect
Given two points which represent a line in 2D or 3D space find all tiles/voxels it intersects. It's a JavaScript implementation of [A Fast Voxel Traversal Algorithm for Ray Tracing](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.42.3443&rep=rep1&type=pdf).
## Usage
```javascript
const tilesIntersect = require('tiles-intersect');
let line = [[0.1, 0.2], [3.5, 2.8]];
let tiles = tilesIntersect.calculate(line, 2); // [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]]
```
## API
### `calculate(line, dimensions = 2)`
Returns a 2D array of tiles/voxels intersected by a line.
#### line
Two-dimensional array which contains two points.
#### dimensions
Number of dimensions (2 or 3).