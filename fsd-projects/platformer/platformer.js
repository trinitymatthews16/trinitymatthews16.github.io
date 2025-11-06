$(function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      setInterval(main, 1000 / frameRate);
    }

    createPlatform(-50, -50, canvas.width + 100, 50); 
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); 
    createPlatform(-50, -50, 50, canvas.height + 500); 
    createPlatform(canvas.width, -50, 50, canvas.height + 100); 

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    toggleGrid();

    // Platforms rearranged strategically
    createPlatform(100, 700, 400, 30, "aqua");
    createPlatform(50, 620, 80, 30, "pink");
    createPlatform(180, 550, 60, 20, "blue");
    createPlatform(300, 500, 200, 20, "aqua");

    // Moving platform
    createPlatform(400, 400, 120, 20, "orange", 400, 900,2);

    // Collectables
    createCollectable("diamond", 150, 200, 1.5, 0.6);
    createCollectable("grace", 250, 250, 2.5, 0.5);

    // Moving collectable
    createCollectable("kennedi", 300, 150 ,0.5, 0.4, 400,900,2);

    // Cannons
    createCannon("top", 400, 3000);
    createCannon("right", 100, 3000);
    createCannon("bottom", 200, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});