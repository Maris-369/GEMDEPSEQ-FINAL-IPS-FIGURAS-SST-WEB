<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cubo 3D Interactivo - IPS FIGURAS SSTCUCUTA SAS</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            font-family: 'Arial', sans-serif;
            overflow: hidden;
            color: white;
            position: relative;
        }
        
        .container {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1000px;
        }
        
        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotate 20s infinite linear;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .cube:hover {
            animation-play-state: paused;
            transform: rotateX(15deg) rotateY(15deg) scale(1.1);
        }
        
        .face {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 3px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            box-shadow: inset 0 0 50px rgba(255,255,255,0.1);
            backdrop-filter: blur(5px);
            text-align: center;
            padding: 10px;
            box-sizing: border-box;
        }
        
        .front {
            background: rgba(255, 99, 71, 0.8);
            transform: rotateY(0deg) translateZ(100px);
        }
        
        .back {
            background: rgba(60, 179, 113, 0.8);
            transform: rotateY(180deg) translateZ(100px);
        }
        
        .right {
            background: rgba(255, 165, 0, 0.8);
            transform: rotateY(90deg) translateZ(100px);
        }
        
        .left {
            background: rgba(147, 112, 219, 0.8);
            transform: rotateY(-90deg) translateZ(100px);
        }
        
        .top {
            background: rgba(255, 20, 147, 0.8);
            transform: rotateX(90deg) translateZ(100px);
        }
        
        .bottom {
            background: rgba(30, 144, 255, 0.8);
            transform: rotateX(-90deg) translateZ(100px);
        }
        
        @keyframes rotate {
            from {
                transform: rotateX(0deg) rotateY(0deg);
            }
            to {
                transform: rotateX(360deg) rotateY(360deg);
            }
        }
        
        .title {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            z-index: 1000;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        }
        
        .controls {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
            z-index: 1000;
        }
        
        .btn {
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid white;
            color: white;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            font-family: inherit;
        }
        
        .btn:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: scale(1.05);
        }
        
        .info {
            position: absolute;
            top: 120px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            font-size: 16px;
            opacity: 0.8;
        }
        
        .instructions {
            position: absolute;
            bottom: 150px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            font-size: 14px;
            opacity: 0.7;
            max-width: 600px;
        }
        
        .logo-text {
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        }
        
        /* Efectos de partículas de fondo */
        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .title {
                font-size: 24px;
                top: 30px;
            }
            
            .cube {
                width: 150px;
                height: 150px;
            }
            
            .face {
                width: 150px;
                height: 150px;
                font-size: 14px;
            }
            
            .front, .back {
                transform: rotateY(0deg) translateZ(75px);
            }
            .back {
                transform: rotateY(180deg) translateZ(75px);
            }
            .right {
                transform: rotateY(90deg) translateZ(75px);
            }
            .left {
                transform: rotateY(-90deg) translateZ(75px);
            }
            .top {
                transform: rotateX(90deg) translateZ(75px);
            }
            .bottom {
                transform: rotateX(-90deg) translateZ(75px);
            }
            
            .controls {
                gap: 10px;
            }
            
            .btn {
                padding: 8px 16px;
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="title">IPS FIGURAS SST CUCUTA SAS</div>
    <div class="info">Cubo 3D Interactivo</div>
    <div class="logo-text">Seguridad y Salud en el Trabajo</div>
    
    <div class="container">
        <div class="cube" id="cube">
            <div class="face front">SEGURIDAD<br>IPS FIGURAS SST</div>
            <div class="face back">SALUD<br>CUCUTA</div>
            <div class="face right">TRABAJO</div>
            <div class="face left">PREVENCIÓN</div>
            <div class="face top">FORMACIÓN</div>
            <div class="face bottom">CULTURA</div>
        </div>
    </div>
    
    <div class="instructions">
        Usa las flechas del teclado para rotar manualmente • Presiona ESPACIO para pausar/continuar • Pasa el mouse sobre el cubo para interactuar
    </div>
    
    <div class="controls">
        <button class="btn" onclick="pauseRotation()">⏸️ Pausar</button>
        <button class="btn" onclick="resumeRotation()">▶️ Continuar</button>
        <button class="btn" onclick="changeSpeed()">⚡ Velocidad</button>
        <button class="btn" onclick="resetPosition()">🔄 Reset</button>
    </div>

    <script>
        const cube = document.getElementById('cube');
        let isPaused = false;
        let currentSpeed = 20;
        let manualRotation = { x: 0, y: 0 };
        
        // Crear partículas de fondo
        function createParticles() {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                document.body.appendChild(particle);
            }
        }
        
        function pauseRotation() {
            cube.style.animationPlayState = 'paused';
            isPaused = true;
        }
        
        function resumeRotation() {
            cube.style.animationPlayState = 'running';
            isPaused = false;
            manualRotation = { x: 0, y: 0 };
        }
        
        function changeSpeed() {
            if (currentSpeed === 20) {
                currentSpeed = 5;
                cube.style.animationDuration = '5s';
            } else if (currentSpeed === 5) {
                currentSpeed = 1;
                cube.style.animationDuration = '1s';
            } else {
                currentSpeed = 20;
                cube.style.animationDuration = '20s';
            }
        }
        
        function resetPosition() {
            cube.style.transform = '';
            manualRotation = { x: 0, y: 0 };
            resumeRotation();
        }
        
        // Efectos de mouse mejorados
        cube.addEventListener('mouseenter', () => {
            if (!isPaused) {
                cube.style.animationPlayState = 'paused';
                cube.style.transform = 'rotateX(15deg) rotateY(15deg) scale(1.1)';
            }
        });
        
        cube.addEventListener('mouseleave', () => {
            if (!isPaused) {
                cube.style.animationPlayState = 'running';
                cube.style.transform = '';
            }
        });
        
        // Efectos de teclado mejorados
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    isPaused ? resumeRotation() : pauseRotation();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    manualRotation.x -= 15;
                    updateManualRotation();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    manualRotation.x += 15;
                    updateManualRotation();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    manualRotation.y -= 15;
                    updateManualRotation();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    manualRotation.y += 15;
                    updateManualRotation();
                    break;
                case 'r':
                case 'R':
                    resetPosition();
                    break;
            }
        });
        
        function updateManualRotation() {
            if (isPaused) {
                cube.style.transform = `rotateX(${manualRotation.x}deg) rotateY(${manualRotation.y}deg)`;
            }
        }
        
        // Inicializar partículas
        createParticles();
        
        // Efecto de pulso sutil en el título
        const title = document.querySelector('.title');
        setInterval(() => {
            title.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)';
            setTimeout(() => {
                title.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
            }, 1000);
        }, 3000);
    </script>
</body>
</html>