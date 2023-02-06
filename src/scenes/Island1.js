import {
  Color3,
  Engine,
  FreeCamera,
  HemisphericLight,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import sand from "../assets/sand.jpg";

const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -90), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 200, height: 200 },
    scene
  );
  ground.material = new StandardMaterial("groundMaterial", scene);
  ground.material.diffuseColor = new Color3(0.03, 0.48, 0.79, 0.83);
  ground.position.y = -14.1;

  var island2 = MeshBuilder.CreateSphere(
    "island",
    { diameter: 100, segments: 15 },
    scene
  );
  island2.position.y = -45;
  island2.position.x = -3;

  var groundMaterial = new StandardMaterial("ground", scene);
  groundMaterial.diffuseTexture = new Texture(sand, scene);
  groundMaterial.diffuseTexture.uScale = 6;
  groundMaterial.diffuseTexture.vScale = 6;
  groundMaterial.specularColor = new Color3(0, 0, 0);
  island2.material = groundMaterial;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
