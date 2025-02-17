<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>King V1 Executor</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            height: 200vh; /* Makes the body tall enough to require scrolling */
            margin: 0;
            padding: 0;
            background-color: #000; /* Dark background for snow visibility */
        }

        .hidden-player {
            position: relative;
            width: 100%;
            height: 50px; /* Player height */
            top: 150vh; /* Places the player off-screen initially (requires scrolling to reveal) */
        }

        #snowCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* Prevents the canvas from interfering with other elements */
            z-index: -1; /* Ensures the canvas is behind all other elements */
        }

        .executor-box {
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <canvas id="snowCanvas"></canvas>
        <div class="executor-box">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRxcGc5aWpnOGwyeWE1b251bDk2eTl6cXJvaWMwam5zbGtweW1paSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rDtfmkyxM92CQdFrTK/giphy.gif" alt="King V1 Executor" class="executor-image" style="width: 400px; height: auto;">
            <p id="description">King V1 is a next-generation Roblox executor designed for maximum efficiency and user convenience. With its advanced scripting engine, seamless updates, and unparalleled stability, it provides a lag-free and secure experience. Whether you're running complex scripts or simply exploring new possibilities, King V1 ensures top-tier performance.</p>
            <button id="download-btn" onclick="window.location.href='https://www.youtube.com'">Get King V1</button>
        </div>
    </div>

    <!-- SoundCloud Embed Player for the song "alone" with autoplay and looping -->
    <iframe id="alone-track" class="hidden-player" scrolling="no" frameborder="no" allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1743984675&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false&loop=true"></iframe>
    <div style="font-size: 8px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/findingyen" title="music influencer" target="_blank" style="color: #cccccc; text-decoration: none;">music influencer</a> · 
        <a href="https://soundcloud.com/findingyen/alone" title="jaydes - alone" target="_blank" style="color: #cccccc; text-decoration: none;">jaydes - alone</a>
    </div>

    <footer style="text-align: center; margin-top: 20px; color: white;">Made by Quan</footer>

    <script>
        // Snow Effect JavaScript

        const canvas = document.getElementById("snowCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Snowflake array
        const snowflakes = [];

        // Create Snowflakes
        function createSnowflakes() {
            for (let i = 0; i < 100; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 4 + 1,
                    density: Math.random() * 0.5 + 0.2
                });
            }
        }

        // Draw Snowflakes
        function drawSnowflakes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            ctx.fillStyle = "white";
            ctx.beginPath();

            for (let i = 0; i < snowflakes.length; i++) {
                const flake = snowflakes[i];
                ctx.moveTo(flake.x, flake.y);
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, false);
            }

            ctx.fill();
            moveSnowflakes();
        }

        // Move Snowflakes
        function moveSnowflakes() {
            for (let i = 0; i < snowflakes.length; i++) {
                const flake = snowflakes[i];
                flake.y += Math.pow(flake.density, 2) + 1;
                if (flake.y > canvas.height) {
                    snowflakes[i] = { x: Math.random() * canvas.width, y: 0, radius: flake.radius, density: flake.density };
                }
            }
        }

        // Update the Snowfall
        function update() {
            drawSnowflakes();
            requestAnimationFrame(update);
        }

        // Initialize Snowfall
        createSnowflakes();
        update();
    </script>
</body>
</html>
