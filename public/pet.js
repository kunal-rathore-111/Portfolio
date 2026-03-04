(function () {
    // Create and style canvas
    var canvas = document.createElement("canvas");
    canvas.id = "pet-canvas";
    canvas.style.position = "fixed";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "auto";
    canvas.style.zIndex = "1000";
    canvas.style.userSelect = "none";
    document.body.appendChild(canvas);

    // Track if mouse is over the pet
    var isMouseOverPet = false;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    // ---- SPRITES ----
    var idleSprite = new Image();
    idleSprite.src = "/pet.gif";

    var sleepSprite = new Image();
    sleepSprite.src = "/pet-sleep.gif";

    // ---- SPRITE INFO ----
    var TOTAL_FRAMES = 5;
    var SHEET_WIDTH = 472;
    var SHEET_HEIGHT = 140;

    var FRAME_WIDTH = SHEET_WIDTH / TOTAL_FRAMES;
    var FRAME_HEIGHT = SHEET_HEIGHT;

    // ---- STATE ----
    var state = "idle";

    // ---- ANIMATION ----
    var frame = 0;
    var lastFrameTime = 0;

    // ---- POSITION ----
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;

    var mouseX = x;
    var mouseY = y;

    // ---- DISPLAY SIZE ----
    var displayHeight = 125;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // Check if mouse is over the pet
        var petCenterX = Math.round(x);
        var petCenterY = Math.round(y);
        var scale = displayHeight / FRAME_HEIGHT;
        var petWidth = FRAME_WIDTH * scale;
        var petHeight = FRAME_HEIGHT * scale;
        var left = petCenterX - petWidth / 2;
        var right = petCenterX + petWidth / 2;
        var top = petCenterY - petHeight / 2;
        var bottom = petCenterY + petHeight / 2;
        isMouseOverPet = (e.clientX >= left && e.clientX <= right && e.clientY >= top && e.clientY <= bottom);
        // Set pointer-events so canvas can capture double-click
        canvas.style.pointerEvents = isMouseOverPet ? "auto" : "none";
    });

    // ---- DOUBLE CLICK → SLEEP / WAKE ----
    canvas.addEventListener("dblclick", function (e) {
        if (isMouseOverPet) {
            e.preventDefault(); // Prevent text selection
            if (state === "sleep") {
                state = "idle";
                frame = 0;
            } else {
                state = "sleep";
                frame = 0;
            }
        }
    });

    // ---- UPDATE ----
    function update(timestamp) {
        if (state === "idle") {
            var dx = mouseX - x;
            var dy = mouseY - y;
            var distance = Math.hypot(dx, dy);
            var speed;
            var frameDelay;
            if (distance > 170) {
                speed = Math.min(distance * 0.004, 6);
                frameDelay = 100;
            } else {
                speed = 0.6;
                frameDelay = 150;
            }
            if (distance > 1) {
                x += (dx / distance) * speed;
                y += (dy / distance) * speed;
            }
            if (timestamp - lastFrameTime > frameDelay) {
                frame = (frame + 1) % TOTAL_FRAMES;
                lastFrameTime = timestamp;
            }
        } else if (state === "sleep") {
            var frameDelay = 200;
            if (timestamp - lastFrameTime > frameDelay) {
                frame = (frame + 1) % TOTAL_FRAMES;
                lastFrameTime = timestamp;
            }
        }
    }

    // ---- RENDER ----
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Always transparent
        ctx.save();
        var sprite = state === "idle" ? idleSprite : sleepSprite;
        var scale = displayHeight / FRAME_HEIGHT;
        ctx.translate(Math.round(x), Math.round(y));
        if (mouseX < x) {
            ctx.scale(-scale, scale);
        } else {
            ctx.scale(scale, scale);
        }
        ctx.drawImage(
            sprite,
            frame * FRAME_WIDTH,
            0,
            FRAME_WIDTH,
            FRAME_HEIGHT,
            -FRAME_WIDTH / 2,
            -FRAME_HEIGHT / 2,
            FRAME_WIDTH,
            FRAME_HEIGHT
        );
        ctx.restore();
    }

    // ---- LOOP ----
    function loop(timestamp) {
        update(timestamp);
        render();
        requestAnimationFrame(loop);
    }

    // ---- START ----
    Promise.all([
        new Promise(function (res) { idleSprite.onload = res; }),
        new Promise(function (res) { sleepSprite.onload = res; })
    ]).then(function () {
        requestAnimationFrame(loop);
    });
})();