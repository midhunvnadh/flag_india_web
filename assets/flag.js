const triColors = ({ height, width, x, y }) => {
  var starts = [
    { color: "#ff9934" },
    { color: "#ffffff" },
    { color: "#138708" },
  ];
  starts.map(({ color }, i) => {
    rectangle({
      x,
      y: y + (i * height) / 3,
      height: height / 3,
      width: width,
      color,
    });
  });
};

const spikes = ({ x, y, radius, color, innerCircleRadius }) => {
  var spikes_amount = 24;
  const spike_density = 360 / spikes_amount;
  for (var i = 0; i < 360; i = i + spike_density) {
    radAngle = toRadian(i);
    const a = innerCircleRadius * Math.cos(radAngle) + x;
    const b = innerCircleRadius * Math.sin(radAngle) + y;
    polygonSpike({
      x: a,
      y: b,
      radius: radius - innerCircleRadius,
      angle: i,
      color,
    });
  }
};

const microCircles = ({ x, y, radius, color, flagHeight }) => {
  var spikes_amount = 24;
  const spike_density = 360 / spikes_amount;
  for (var i = 0; i < 360; i = i + spike_density) {
    radAngle = toRadian(i + spike_density / 2);
    const a = (radius - 4.5) * Math.cos(radAngle) + x;
    const b = (radius - 4.5) * Math.sin(radAngle) + y;
    circle({
      x: a,
      y: b,
      radius: flagHeight / 110,
      bgColor: color,
    });
  }
};

const ashokaChakra = ({ coords: { x, y }, radius, flagHeight }) => {
  const color = "#00007f";
  const innerCircleRadius = flagHeight / 60;
  circle({ x, y, radius, color, lineWidth: flagHeight / 44 });
  circle({ x, y, radius: innerCircleRadius, bgColor: color });
  spikes({ x, y, radius, color, innerCircleRadius });
  microCircles({ x, y, radius, color, innerCircleRadius, flagHeight });
};

const flagHandle = ({ x, y, height, width }) => {
  rectangle({
    x,
    y: y - 10,
    height: window.innerHeight,
    width: width / 2,
    color: "#363636",
  });
};

const Flag = ({ coords, ratio_factor }) => {
  const height = 2 * ratio_factor;
  const width = 3 * ratio_factor;
  var x = coords.x;
  var y = coords.y;

  const flagHandleWidth = 50;

  flagHandle({ x, y, height, width: flagHandleWidth });
  x = x + flagHandleWidth;

  triColors({ height, width, x, y });
  ashokaChakra({
    coords: { x: x + width / 2, y: y + height / 2 },
    radius: height / 3 / 2 - height / 55,
    flagHeight: height,
  });
};
function startFlag() {
  const ratio_factor = 200;
  const x = 50,
    y = 50;

  setCanvasDim(window.innerHeight, x + ratio_factor * 3 + 100);
  Flag({ coords: { x, y }, ratio_factor });
}
