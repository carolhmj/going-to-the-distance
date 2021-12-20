import {Engine} from "@babylonjs/core";
import createStartScene from "./startscene";

let canvas = document.createElement("canvas");
let eng = new Engine(canvas, true, null, true); 

let startScene = createStartScene(eng); 

eng.runRenderLoop(() => { 

    startScene.scene.render(); 

});