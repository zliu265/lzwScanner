//该文件用于打印最后结果用的
// main.js
const fs = require('fs');

const movingAverage = require('./src/indicators/movingAverage');

// 读取并解析 JSON 文件
const json = JSON.parse(fs.readFileSync('AAPL.json', 'utf-8'));

// 访问第一个记录的 close 值
const firstClose = json.data[0].close;

console.log('First close:', firstClose);

const ma5 = movingAverage(json.data, 5);
const ma50 = movingAverage(json.data, 50);
const ma150 = movingAverage(json.data, 150);

console.log('MA5:', ma5);
console.log('MA50:', ma50);
console.log('MA150:', ma150);
