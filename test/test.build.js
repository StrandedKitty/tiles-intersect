(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function calculate(line, dimensions = 2) {
	if(dimensions == 2) 
		return ray2(line[0], line[1]);
	if(dimensions == 3) 
		return ray3(line[0], line[1]);
}

function ray3(a, b) {
	let x = Math.floor(a[0]);
	let y = Math.floor(a[1]);
	let z = Math.floor(a[2]);
	const endX = Math.floor(b[0]);
	const endY = Math.floor(b[1]);
	const endZ = Math.floor(b[2]);
	
	let points = [[x, y, z]];
	
	if(x === endX && y === endY && z === endZ) return points;
	
	const stepX = Math.sign(b[0] - a[0]);
	const stepY = Math.sign(b[1] - a[1]);
	const stepZ = Math.sign(b[2] - a[2]);
	
	const toX = Math.abs(a[0] - x - Math.max(0, stepX));
	const toY = Math.abs(a[1] - y - Math.max(0, stepY));
	const toZ = Math.abs(a[2] - z - Math.max(0, stepZ));
	
	const vX = Math.abs(a[0] - b[0]);
	const vY = Math.abs(a[1] - b[1]);
	const vZ = Math.abs(a[2] - b[2]);
	
	let tMaxX = toX / vX;
	let tMaxY = toY / vY;
	let tMaxZ = toZ / vZ;
	
	const tDeltaX = 1 / vX;
	const tDeltaY = 1 / vY;
	const tDeltaZ = 1 / vZ;
	
	while(!(x === endX && y === endY && z === endZ)) {
		if(tMaxX < tMaxY) {
			if(tMaxX < tMaxZ) {
				x = x + stepX;
				tMaxX = tMaxX + tDeltaX;
			} else {
				z = z + stepZ;
				tMaxZ = tMaxZ + tDeltaZ;
			}
		} else {
			if(tMaxY < tMaxZ) {
				y = y + stepY;
				tMaxY = tMaxY + tDeltaY;
			} else {
				z = z + stepZ;
				tMaxZ = tMaxZ + tDeltaZ;
			}
		}
		
		points.push([x, y, z]);
	}
	
	return points;
}

function ray2(a, b) {
	let x = Math.floor(a[0]);
	let y = Math.floor(a[1]);
	const endX = Math.floor(b[0]);
	const endY = Math.floor(b[1]);
	
	let points = [[x, y]];
	
	if(x === endX && y === endY) return points;
	
	const stepX = Math.sign(b[0] - a[0]);
	const stepY = Math.sign(b[1] - a[1]);
	
	const toX = Math.abs(a[0] - x - Math.max(0, stepX));
	const toY = Math.abs(a[1] - y - Math.max(0, stepY));
	
	const vX = Math.abs(a[0] - b[0]);
	const vY = Math.abs(a[1] - b[1]);

	let tMaxX = toX / vX;
	let tMaxY = toY / vY;
	
	const tDeltaX = 1 / vX;
	const tDeltaY = 1 / vY;
	
	while(!(x === endX && y === endY)) {
		if(tMaxX < tMaxY) {
			tMaxX = tMaxX + tDeltaX;
			x = x + stepX;
		} else {
			tMaxY = tMaxY + tDeltaY;
			y = y + stepY;
		}
		
		points.push([x, y]);
	}
	
	return points;
}

var index = {calculate};

module.exports = index;

},{}],2:[function(require,module,exports){
const tilesIntersect = require('../build/tiles-intersect');

let line = [[0.1, 0.2], [3.5, 2.8]];
let tiles = tilesIntersect.calculate(line, 2);

console.log(tiles);

line = [[0.1, 0.2, 0.3], [3.5, 2.8, 4.6]];
tiles = tilesIntersect.calculate(line, 3);

console.log(tiles);



},{"../build/tiles-intersect":1}]},{},[2]);
