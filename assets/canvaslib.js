const rectangle = ({ x, y, height, width, lineWidth, color }) => {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.lineWidth = lineWidth || 0.0;
  ctx.strokeStyle = color || "";
  ctx.fillStyle = color || "";
  ctx.fill();
  ctx.stroke();
};

const circle = ({ x, y, radius, color, bgColor, lineWidth }) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = color || "";
  ctx.lineWidth = lineWidth || 0.0;

  if (bgColor) {
    ctx.fillStyle = bgColor || "";
    ctx.fill();
  }

  ctx.stroke();
};

const toRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const polygonSpike = ({ x, y, radius, angle, color }) => {
  radAngle = toRadian(angle);
  const a = radius * Math.cos(radAngle) + x;
  const b = radius * Math.sin(radAngle) + y;

  const angleVariance = 10;
  const shape = radius / 3;
  const leftX = shape * Math.cos(toRadian(angle + angleVariance)) + x;
  const leftY = shape * Math.sin(toRadian(angle + angleVariance)) + y;
  const rightX = shape * Math.cos(toRadian(angle - angleVariance)) + x;
  const rightY = shape * Math.sin(toRadian(angle - angleVariance)) + y;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(leftX, leftY);
  ctx.lineTo(a, b);
  ctx.lineTo(rightX, rightY);
  ctx.lineTo(x, y);
  ctx.lineWidth = 1;
  ctx.fillStyle = color;
  ctx.fill();
};
