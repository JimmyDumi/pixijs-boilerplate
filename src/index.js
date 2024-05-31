import * as PIXI from "pixi.js";
import redCircleSVG from "./assets/red-circle.svg";

const svgDataUrl = `data:image/svg+xml;base64,${btoa(redCircleSVG)}`;

const app = new PIXI.Application();
// Create a PixiJS application

await app.init({
  antialias: true,
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.canvas);

const mySVG = new PIXI.Graphics().svg(redCircleSVG);
const bounds = mySVG.getLocalBounds();

mySVG.position.set(app.screen.width / 2, app.screen.height / 2);
mySVG.pivot.set((bounds.x + bounds.width) / 2, (bounds.y + bounds.height) / 2);

app.stage.addChild(mySVG);

app.ticker.add((time) => {
  mySVG.rotation += 0.01;
});
