import { random } from "./random.js";
import { spline } from "@georgedoescode/spline";

export const tiles = [
  (curvedRiver = () => {
    return {
      sides: {
        top: "grass",
        right: "grass",
        bottom: "river",
        left: "river",
      },
      graphics: drawSquigglyPath(0, 0),
    };
  }),

  // straightRiver() {},
];

function drawSquigglyPath(cx, cy, startDegree = 0, radius = 50) {
  const points = getPointsAlongArc(cx, cy, startDegree, radius);

  return `<path d="${spline(points, 1, false)}" class="river"/>`;
}

function getPointsAlongArc(cx, cy, startDegree, radius) {
  points = [];
  points.push(pointAlongArc(cx, cy, startDegree, radius));
  points.push(pointAlongArc(cx, cy, startDegree + 10, radius));
  for (
    var i = startDegree + random(20, 30);
    i < startDegree + 70;
    i += random(10, 20)
  ) {
    points.push(pointAlongArc(cx, cy, i, radius, 5));
  }
  points.push(pointAlongArc(cx, cy, startDegree + 80, radius));
  points.push(pointAlongArc(cx, cy, startDegree + 90, radius));

  return points;
}

function pointAlongArc(cx, cy, angle, radius, range = 0) {
  pointAngleInRadians = degreesToRadian(angle);
  const point = {
    x: Math.floor(
      Math.cos(pointAngleInRadians) * radius + cx + random(range * -1, range)
    ),
    y: Math.floor(
      Math.sin(pointAngleInRadians) * radius + cy + random(range * -1, range)
    ),
  };
  console.log(angle, point);

  return point;
}

function degreesToRadian(degrees) {
  return degrees * (Math.PI / 180);
}
