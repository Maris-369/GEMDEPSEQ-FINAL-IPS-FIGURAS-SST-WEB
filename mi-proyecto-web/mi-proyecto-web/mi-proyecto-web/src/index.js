/**
 * Este script se ejecuta cuando todo el contenido del DOM (la página HTML) ha sido cargado.
 * Contiene toda la lógica interactiva de la página web de IPS FIGURAS SST.
 */
document.addEventListener('DOMContentLoaded', () => {

    // Clave de API para el servicio de Gemini. Se deja vacía porque el entorno la proporcionará.
    const apiKey = ""; 

    /**
     * Función asíncrona para llamar a la API de Gemini.
     * @param {string} prompt - El texto de la pregunta o instrucción para la IA.
     * @param {HTMLElement} resultElement - El elemento HTML donde se mostrará la respuesta.
     * @param {HTMLElement} spinnerElement - El elemento HTML del spinner de carga.
     */
    async function callGemini(prompt, resultElement, spinnerElement) {
        spinnerElement.style.display = 'block'; // Muestra el spinner
        resultElement.style.display = 'none';   // Oculta el resultado anterior
        resultElement.innerHTML = '';           // Limpia el resultado anterior

        // Prepara los datos para enviar a la API
        let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            // Realiza la petición a la API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Error en la API: ${response.statusText}`);
            }

            const result = await response.json();

            // Procesa la respuesta de la API
            if (result.candidates && result.candidates[0] && result.candidates[0].content && result.candidates[0].content.parts[0]) {
                const text = result.candidates[0].content.parts[0].text;
                resultElement.innerHTML = simpleMarkdownToHtml(text); // Convierte y muestra la respuesta
            } else {
                throw new Error("Respuesta inesperada de la API.");
            }
        } catch (error) {
            console.error("Error al llamar a la API de Gemini:", error);
            resultElement.innerHTML = `<p style="color: red;">Lo sentimos, ocurrió un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde.</p>`;
        } finally {
            // Oculta el spinner y muestra el resultado
            spinnerElement.style.display = 'none';
            resultElement.style.display = 'block';
        }
    }
    
    /**
     * Convierte un texto simple con formato Markdown a HTML.
     * @param {string} text - El texto en formato Markdown.
     * @returns {string} - El texto convertido a HTML.
     */
    function simpleMarkdownToHtml(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Negrita
            .replace(/\*(.*?)\*/g, '<em>$1</em>')       // Cursiva
            .replace(/^- (.*$)/mg, '<li>$1</li>')       // Elementos de lista
            .replace(/(\n<li>.*<\/li>)/g, '<ul>$1</ul>') // Envuelve las listas
            .replace(/\n/g, '<br>');                      // Saltos de línea
    }

    // --- Lógica del Analizador de Síntomas con IA ---
    const analyzeBtn = document.getElementById('analyze-symptoms-btn');
    const symptomsInput = document.getElementById('symptoms-input');
    const symptomsResult = document.getElementById('ai-symptoms-result');
    const symptomsSpinner = document.getElementById('ai-symptoms-spinner');

    analyzeBtn.addEventListener('click', () => {
        const symptoms = symptomsInput.value;
        if (symptoms.trim().length < 10) {
            symptomsResult.innerHTML = `<p style="color: orange;">Por favor, describe tus síntomas con más detalle para obtener una mejor orientación.</p>`;
            symptomsResult.style.display = 'block';
            return;
        }
        const prompt = `Basado en los siguientes síntomas: "${symptoms}", ¿cuáles son las posibles especialidades médicas que una persona debería considerar consultar y qué tipo de preguntas clave podría hacerle al doctor? Proporciona la respuesta en formato Markdown, clara y fácil de entender. No ofrezcas un diagnóstico. Comienza con un encabezado de 'Orientación Sugerida'.`;
        callGemini(prompt, symptomsResult, symptomsSpinner);
    });

    // --- Lógica del Modal del Asistente por Especialidad ---
    const modal = document.getElementById('ai-specialist-modal');
    const modalCloseBtn = document.getElementById('ai-modal-close-btn');
    const modalSubmitBtn = document.getElementById('ai-modal-submit');
    const modalQuestionInput = document.getElementById('ai-modal-question');
    const modalTitle = document.getElementById('ai-modal-title');
    const modalResult = document.getElementById('ai-modal-result');
    const modalSpinner = document.getElementById('ai-modal-spinner');
    let currentSpecialty = '';
    
    document.querySelectorAll('.ai-specialist-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.specialty-card');
            currentSpecialty = card.querySelector('.specialty-title').textContent;
            modalTitle.textContent = `Asistente de IA - ${currentSpecialty}`;
            modalQuestionInput.value = '';
            modalResult.style.display = 'none';
            modal.classList.add('visible');
        });
    });

    modalCloseBtn.addEventListener('click', () => modal.classList.remove('visible'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('visible');
        }
    });

    modalSubmitBtn.addEventListener('click', () => {
        const question = modalQuestionInput.value;
        if (question.trim().length < 5) {
            modalResult.innerHTML = `<p style="color: orange;">Por favor, escribe una pregunta.</p>`;
            modalResult.style.display = 'block';
            return;
        }
        const prompt = `Como asistente de IA experto en ${currentSpecialty}, responde la siguiente pregunta de forma general e informativa. No des consejos médicos personalizados ni diagnósticos. La pregunta es: "${question}"`;
        callGemini(prompt, modalResult, modalSpinner);
    });

    // --- Funcionalidad del Menú Móvil ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // --- Efectos de Scroll y Navegación Activa ---
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.querySelector('.back-to-top');
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        // Estilo de la barra de navegación al hacer scroll
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        // Botón de "volver arriba"
        if (window.scrollY > 300) backToTopBtn.classList.add('active');
        else backToTopBtn.classList.remove('active');
        // Resaltar el enlace de navegación activo
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLi.forEach(a => {
            a.classList.remove('active');
            if(a.getAttribute('href') == `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // --- Desplazamiento Suave para Enlaces Ancla ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                }
            } else if (targetId === '#') {
                e.preventDefault();
            }
        });
    });
    
    // --- Animación de Elementos al Hacer Scroll ---
    const animateOnScroll = () => {
        document.querySelectorAll('.animate-in').forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar la página

    // --- Envío del Formulario de Contacto ---
    const contactForm = document.getElementById('main-contact-form');
    const formStatus = document.getElementById('form-status');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        formStatus.innerHTML = '';
        formStatus.className = 'form-status';
        if (isValid) {
            formStatus.textContent = 'Gracias por su mensaje. Nos pondremos en contacto con usted pronto.';
            formStatus.classList.add('success');
            contactForm.reset();
        } else {
            formStatus.textContent = 'Por favor complete todos los campos requeridos.';
            formStatus.classList.add('error');
        }
        setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
    });
});
