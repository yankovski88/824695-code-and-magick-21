"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP * 12;
var BAR_HEIGHT_TOTAL = 230;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!',
      CLOUD_X + GAP * 5,
      CLOUD_Y + GAP * 2
  );
  ctx.fillText('Список результатов: ',
      CLOUD_X + GAP * 5,
      CLOUD_Y + GAP * 4
  );


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  // ctx.textBaseline = 'hanging';
  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';

  for (var index = 0; index < times.length; index++) {
    ctx.fillText(
        Math.round(times[index]),
        CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * index,
        BAR_HEIGHT_TOTAL - Math.round(BAR_HEIGHT * times[index] / maxTime)
    );
  }

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP * 2
    );


    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(
          CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * i,
          CLOUD_Y + CLOUD_HEIGHT - GAP * 4,
          BAR_WIDTH,
          (-(BAR_HEIGHT) * times[i]) / maxTime
      );
    } else {
      var color = getRandomInt(100);
      ctx.fillStyle = "hsl(248," + color + "%, 57%)";
      ctx.fillRect(
          CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * i,
          CLOUD_Y + CLOUD_HEIGHT - GAP * 4,
          BAR_WIDTH,
          (-(BAR_HEIGHT) * times[i]) / maxTime
      );
    }

  }
};
