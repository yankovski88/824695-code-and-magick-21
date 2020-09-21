"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TEXT_WIDTH = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = CLOUD_HEIGHT - GAP * 12;
const BAR_HEIGHT_TOTAL = 230;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = Math.round(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const getRandomColor = function (maxNumber = 100) {
  if (maxNumber > 100) {
    maxNumber = 100;
  }
  const colorNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  return `hsl(248, ${colorNumber}%, 57%)`;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`,
      CLOUD_X + GAP * 5,
      CLOUD_Y + GAP * 2
  );
  ctx.fillText(`Список результатов: `,
      CLOUD_X + GAP * 5,
      CLOUD_Y + GAP * 4
  );


  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  const maxTime = getMaxElement(times);

  ctx.fillStyle = `#000`;


  for (let index = 0; index < times.length; index++) {
    ctx.fillText(
        Math.round(times[index]),
        CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * index,
        BAR_HEIGHT_TOTAL - Math.round(BAR_HEIGHT * times[index] / Math.round(maxTime))
    );
  }

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP * 2
    );

    const renderColumn = function (j, colorColomn) {
      ctx.fillStyle = colorColomn;
      ctx.fillRect(
          CLOUD_X + GAP + TEXT_WIDTH + (GAP + TEXT_WIDTH) * j,
          CLOUD_Y + CLOUD_HEIGHT - GAP * 4,
          BAR_WIDTH,
          (-(BAR_HEIGHT) * Math.round(times[j])) / Math.round(maxTime)
      );
    };

    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      renderColumn(i);
    } else {
      renderColumn(i, getRandomColor());
    }
  }
};
