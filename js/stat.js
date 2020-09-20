"use strict";

'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.fillText(
    'Вы',
    CLOUD_X + GAP,
    CLOUD_Y + GAP + FONT_GAP
  );
  ctx.fillRect(
    CLOUD_X + GAP + TEXT_WIDTH,
    CLOUD_Y + GAP,
    barWidth,
    BAR_HEIGHT
  );

  ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + BAR_HEIGHT);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + BAR_HEIGHT + GAP, barWidth, BAR_HEIGHT);

  ctx.fillText('Юлия', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + BAR_HEIGHT + GAP + BAR_HEIGHT);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, 120, 430, 20);
};








// var canvas = document.getElementById("canvas");
//
// //ctx на чем рисовать
// const renderCloud = function (ctx, x, y, height, width, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, height, width);
// };
//
// var CLOUD_WIDTH = 420;
// var CLOUD_HEIGHT = 270;
// var CLOUD_X = 100;
// var CLOUD_Y = 10;
// var FONT_GAP = 10;
//
// var X_START_ALL = 100;
// var Y_COLOM_TEXT = CLOUD_HEIGHT - GAP_TEXT_TITLE;
// var Y_COLOM_START = 250;
// var WIDTH_COLOM = 40;
// var Y_COLOM_TOTAL = 90;
//
// var GAP = 50;
// var GAP_TEXT_TITLE = 20;
//
// window.renderStatistics = function (ctx, names, times) {
//
//   renderCloud(
//     ctx,
//     CLOUD_X + FONT_GAP,
//     CLOUD_Y + FONT_GAP,
//     CLOUD_WIDTH,
//     CLOUD_HEIGHT,
//     'rgba(0, 0, 0, 0.7)'
//   );
//   renderCloud(
//     ctx,
//     CLOUD_X,
//     CLOUD_Y,
//     CLOUD_WIDTH,
//     CLOUD_HEIGHT,
//     '#ffffff');
//
//   ctx.fillStyle = '#000';
//   ctx.font = '16px PT Mono';
//   // ctx.textBaseline = 'hanging';
//   ctx.fillText('Ура вы победили!', X_START_ALL + GAP_TEXT_TITLE, GAP_TEXT_TITLE * 2);
//   // ctx.textBaseline = 'hanging';
//   ctx.fillText('Список результатов: ', X_START_ALL + GAP_TEXT_TITLE, GAP_TEXT_TITLE * 3);
// ctx.fillRect(150, 60, 100, 1)
//
//
//
//   ctx.fillText('Вы', (X_START_ALL + GAP), Y_COLOM_TEXT);
//   renderCloud(ctx, (X_START_ALL + GAP), Y_COLOM_START, WIDTH_COLOM, -150, 'rgba(0, 0, 0, 0.7)');
//   ctx.fillText('1000', (X_START_ALL + GAP), GAP_TEXT_TITLE * 4);
//
//   ctx.fillText('Юля', (X_START_ALL + GAP + WIDTH_COLOM + GAP), Y_COLOM_TEXT);
//   renderCloud(ctx, (X_START_ALL + GAP + WIDTH_COLOM + GAP), Y_COLOM_START, WIDTH_COLOM, -150, 'rgba(0, 0, 0, 0.7)');
//   ctx.fillText('1000', (X_START_ALL + GAP + WIDTH_COLOM + GAP), GAP_TEXT_TITLE * 4);
//
//   ctx.fillText('Ник', (X_START_ALL + GAP + WIDTH_COLOM + GAP + WIDTH_COLOM + GAP), Y_COLOM_TEXT);
//   renderCloud(ctx, (X_START_ALL + GAP + WIDTH_COLOM + GAP + WIDTH_COLOM + GAP), Y_COLOM_START, WIDTH_COLOM, -150, 'rgba(0, 0, 0, 0.7)');
//   ctx.fillText('1000', (X_START_ALL + GAP + WIDTH_COLOM + GAP + WIDTH_COLOM + GAP), GAP_TEXT_TITLE * 4);
// };
//
