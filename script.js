document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления интерфейса
    const jarvisInterface = document.querySelector('.jarvis-interface');
    jarvisInterface.style.opacity = '0';
    jarvisInterface.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        jarvisInterface.style.transition = 'all 1s ease';
        jarvisInterface.style.opacity = '1';
        jarvisInterface.style.transform = 'translateY(0)';
    }, 500);

    // Эффект при наведении на ссылки
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
        });
    });

    // Обработчик для кнопки "О нас"
    document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
        e.preventDefault();
        showAboutSection();
    });

    // Добавляем обработчик для кнопки "VPN Сервис"
    document.querySelector('a[href="#vpn"]').addEventListener('click', (e) => {
        e.preventDefault();
        showVpnSection();
    });

    // Ищем кнопку по тексту
    const appsButton = Array.from(document.querySelectorAll('a')).find(a => 
        a.textContent.trim().toLowerCase() === 'приложения'
    );
    
    if (appsButton) {
        appsButton.addEventListener('click', (e) => {
            e.preventDefault();
            showAppsSection();
        });
    } else {
        console.error('Кнопка "Приложения" не найдена');
    }

    function showAboutSection() {
        // Создаем контейнер для новой секции
        const aboutSection = document.createElement('div');
        aboutSection.className = 'about-section';
        
        // Добавляем матричный фон
        const matrixBg = document.createElement('div');
        matrixBg.className = 'matrix-background';
        
        // Добавляем контейнер для текста
        const textContainer = document.createElement('div');
        textContainer.className = 'about-text-container';
        
        // Добавляем текст
        const aboutText = document.createElement('p');
        aboutText.className = 'about-text';
        aboutText.textContent = 'JarvisProduction - моя собственная вымышленная компания, вдохновлённая ИИ, а также Тони Старком из фильма "Железный Человек"';
        
        // Добавляем кнопку закрытия
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×';
        
        // Обработчик закрытия
        closeButton.addEventListener('click', () => {
            aboutSection.style.opacity = '0';
            setTimeout(() => {
                aboutSection.remove();
            }, 500);
        });
        
        // Собираем структуру
        textContainer.appendChild(aboutText);
        aboutSection.appendChild(matrixBg);
        aboutSection.appendChild(textContainer);
        aboutSection.appendChild(closeButton);
        document.body.appendChild(aboutSection);

        // Запускаем матричный дождь
        initMatrixRain(matrixBg);

        // Анимация появления
        setTimeout(() => {
            aboutSection.style.opacity = '1';
        }, 100);
    }

    function initMatrixRain(container) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        container.appendChild(canvas);

        // Настройка размеров canvas
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Символы для матрицы
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const drops = [];
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        // Инициализация капель
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 33);
    }

    function showVpnSection() {
        const vpnSection = document.createElement('div');
        vpnSection.className = 'vpn-section';
        
        const comingSoonText = document.createElement('div');
        comingSoonText.className = 'coming-soon';
        comingSoonText.innerHTML = 'Coming Soon<span class="dots">...</span>';
        
        vpnSection.appendChild(comingSoonText);
        
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×';
        
        closeButton.addEventListener('click', () => {
            vpnSection.style.opacity = '0';
            setTimeout(() => vpnSection.remove(), 500);
        });
        
        vpnSection.appendChild(closeButton);
        document.body.appendChild(vpnSection);
        
        setTimeout(() => {
            vpnSection.style.opacity = '1';
        }, 100);
    }

    function initGlobeAnimation(globe) {
        const jarvisText = [
            `
     ██╗ █████╗ ██████╗ ██╗   ██╗██╗███████╗
     ██║██╔══██╗██╔══██╗██║   ██║██║██╔════╝
     ██║███████║██████╔╝██║   ██║██║███████╗
██   ██║██╔══██║██╔══██╗╚██╗ ██╔╝██║╚════██║
╚█████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║███████║
 ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝
                                              
 ██████╗ ██████╗  ██████╗ ██████╗ ██╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
 ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
 ██████╔╝██████╔╝██║   ██║██║  ██║██║   ██║██║        ██║   ██║██║   ██║██╔██╗ ██║
 ██╔═══╝ ██╔══██╗██║   ██║██║  ██║██║   ██║██║        ██║   ██║██║   ██║██║╚██╗██║
 ██║     ██║  ██║╚██████╔╝██████╔╝╚██████╔╝╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
        `,
            `
     ██╗ █████╗ ██████╗ ██╗   ██╗██╗███████╗
     ██║██╔══██╗██╔══██╗██║   ██║██║██╔════╝
     ██║███████║██████╔╝██║   ██║██║███████╗
██   ██║██╔══██║██╔══██╗╚██╗ ██╔╝██║╚════██║
╚█████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║███████║
 ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝
                                              
 ██████╗ ██████╗  ██████╗ ██████╗ ██╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
 ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
 ██████╔╝██████╔╝██║   ██║██║  ██║██║   ██║██║        ██║   ██║██║   ██║██╔██╗ ██║
 ██╔═══╝ ██╔══██╗██║   ██║██║  ██║██║   ██║██║        ██║   ██║██║   ██║██║╚██╗██║
 ██║     ██║  ██║╚██████╔╝██████╔╝╚██████╔╝╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
        `
        ];

        let frameIndex = 0;
        let textColorIndex = 0;
        const colors = ['#0f0', '#00f', '#0ff']; // Цвета для анимации текста

        // Анимация смены цвета
        setInterval(() => {
            globe.innerHTML = jarvisText[frameIndex];
            globe.style.color = colors[textColorIndex];
            frameIndex = (frameIndex + 1) % jarvisText.length;
            textColorIndex = (textColorIndex + 1) % colors.length;
        }, 500);
    }

    function showAppsSection() {
        const appsSection = document.createElement('div');
        appsSection.className = 'apps-section';
        
        const contentContainer = document.createElement('div');
        contentContainer.className = 'content-container';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.innerHTML = `
            <div class="image-frame">
                <img src="./images/screens.png" alt="Discord Screenshot">
            </div>
        `;

        const textInfo = document.createElement('div');
        textInfo.className = 'text-info';
        textInfo.innerHTML = `
            <h2>Новый обход дискорд by J.P</h2>
            <div class="buttons-container">
                <button class="download-button main-button">
                    Скачать
                    <span class="button-glow"></span>
                </button>
                <div class="secondary-buttons hidden">
                    <a href="https://web.telegram.org/k/#@fixbyjp" target="_blank" class="download-button">
                        Через Telegram
                        <span class="button-glow"></span>
                    </a>
                    <a href="https://www.dropbox.com/scl/fi/kne2bhqmynrggtd4x0xeu/Debug.rar?rlkey=s6axarfs7x0gm03p4zst1s5w3&st=s0qnzfqs&dl=1" target="_blank" class="download-button">
                        Прямая ссылка
                        <span class="button-glow"></span>
                    </a>
                </div>
            </div>
        `;

        const cmdContainer = document.createElement('div');
        cmdContainer.className = 'apps-text-container';
        cmdContainer.innerHTML = `
            <div class="cmd-header">
                <span>C:\\JARVIS\\APPS></span>
                <span class="cursor">_</span>
            </div>
        `;

        contentContainer.appendChild(imageContainer);
        contentContainer.appendChild(textInfo);
        appsSection.appendChild(contentContainer);
        appsSection.appendChild(cmdContainer);

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×';
        
        closeButton.addEventListener('click', () => {
            appsSection.style.opacity = '0';
            setTimeout(() => appsSection.remove(), 500);
        });

        appsSection.appendChild(closeButton);
        document.body.appendChild(appsSection);

        const mainButton = appsSection.querySelector('.main-button');
        const secondaryButtons = appsSection.querySelector('.secondary-buttons');
        
        mainButton.addEventListener('click', () => {
            mainButton.classList.add('hidden');
            secondaryButtons.classList.remove('hidden');
        });

        setTimeout(() => {
            appsSection.style.opacity = '1';
        }, 100);
    }

    // Добавляем обработчик для слова "впн"
    const vpnText = document.querySelector('.vpn-text');
    if (vpnText) {
        vpnText.style.cursor = 'pointer';
        vpnText.addEventListener('click', showVpnSection);
    }
}); 
