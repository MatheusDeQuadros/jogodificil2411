var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4a663f76-cfe1-4706-b1cc-b3a481453750","2bc6d8fe-2b15-4b4f-972f-ef4653014d3a"],"propsByKey":{"4a663f76-cfe1-4706-b1cc-b3a481453750":{"name":"corn_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH/category_food/corn.png","frameSize":{"x":380,"y":369},"frameCount":1,"looping":true,"frameDelay":2,"version":"2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":369},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2VkmW9_3c9eZfp_mAh9VWoycXLLvT8WH/category_food/corn.png"},"2bc6d8fe-2b15-4b4f-972f-ef4653014d3a":{"name":"cuteanimals_hen_1","sourceUrl":"assets/api/v1/animation-library/gamelab/V9RHcfnV6v1.KxJx8hmc31xSPoEG.9lX/category_animals/cuteanimals_hen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"V9RHcfnV6v1.KxJx8hmc31xSPoEG.9lX","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/V9RHcfnV6v1.KxJx8hmc31xSPoEG.9lX/category_animals/cuteanimals_hen.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var galinha;

boundary1 = createSprite(190,120,420,3);
boundary2 = createSprite(190,260,420,3);
galinha = createSprite(20,190,13,13);
galinha.shapeColor = "black";
car1 = createSprite(110,130,10,10);
car1.shapeColor = "red";
car2 = createSprite(225,130,10,10);
car2.shapeColor = "pink";
car3 = createSprite(175,250,10,10);
car3.shapeColor = "yellow";
car4 = createSprite(280,250,10,10);
car4.shapeColor = "blue";
var milho = createSprite(360, 190, 13, 13);
car1.velocityY = 5;
car3.velocityY = 5;
car2.velocityY = -5;
car4.velocityY = -5;
milho.setAnimation("corn_1");
milho.scale = 0.1;
galinha.setAnimation("cuteanimals_hen_1");
galinha.scale = 0.1;
function draw() {
  background("green");
  text("Mortes: " + life,200,100);
  strokeWeight(0);
  fill("red");
  createEdgeSprites();
  galinha.bounceOff(rightEdge);
  galinha.bounceOff(leftEdge);
  galinha.bounceOff(boundary1);
  galinha.bounceOff(boundary2);
  car1.bounceOff(boundary1);
  car2.bounceOff(boundary1);
  car3.bounceOff(boundary1);
  car4.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary2);
  if (keyDown("up")) {
    galinha.velocityX = 0;
    galinha.velocityY = -4;
  }
  if (keyDown("down")) {
    galinha.velocityX = 0;
    galinha.velocityY = 4;
  }
  if (keyDown("left")) {
    galinha.velocityX = -4;
    galinha.velocityY = 0;
  }
  if (keyDown("right")) {
    galinha.velocityX = 4;
    galinha.velocityY = 0;
  }
  if (galinha.isTouching(car1)||galinha.isTouching(car2)||galinha.isTouching(car3)||galinha.isTouching(car4)) {
    galinha.x = 20;
    galinha.y = 190;
    life = life + 1;
  }
  if (galinha.isTouching(milho)) {
    galinha.x = 20;
    galinha.y = 190;
  }
  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
