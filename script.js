document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with a welcome animation sequence
    animateEntrance();
    
    // Initialize all components with slight delays for better visual effect
    setTimeout(() => initBalloons(), 500);
    setTimeout(() => initConfetti(), 1000);
    setTimeout(() => initSlideshow(), 1500);
    setTimeout(() => initSurpriseButton(), 2000);
});

// Animate entrance of elements
function animateEntrance() {
    // Get all animated elements
    const animatedElements = document.querySelectorAll('.animate__animated');
    
    // Add animation classes with cascading delays
    animatedElements.forEach((element, index) => {
        // Skip elements that already have delay classes
        if (!element.className.includes('animate__delay')) {
            element.style.animationDelay = `${index * 0.2}s`;
        }
    });
    
    // Play a birthday tune (optional - uncomment if desired)
    // playBirthdayTune();
}

// Create and animate balloons
function initBalloons() {
    const balloonContainer = document.querySelector('.balloon-container');
    const balloonCount = 20;
    
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Randomize balloon positions
        const startPositionX = Math.random() * 100;
        balloon.style.left = `${startPositionX}%`;
        
        // Randomize animation delay
        const delay = Math.random() * 5;
        balloon.style.animationDelay = `${delay}s`;
        
        balloonContainer.appendChild(balloon);
    }
}

// Initialize confetti effect
function initConfetti() {
    // Initial confetti burst
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#ff69b4', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff']
        });
    }, 1000);
    
    // Periodic confetti bursts
    setInterval(() => {
        const randomX = Math.random();
        const randomY = Math.random() * 0.5;
        
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: randomX, y: randomY },
            colors: ['#ff0000', '#ff69b4', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'],
            shapes: ['circle', 'square'],
            ticks: 200
        });
    }, 3000);
}

// Initialize slideshow
function initSlideshow() {
    const slideshow = document.getElementById('slideshow');
    
    // Custom personal images
    const images = [
        'images/custom1.jpeg',
        'images/custom2.jpeg',
        'images/custom3.jpeg',
        'images/custom4.jpeg'
    ];
    
    // Create slides with captions
    const captions = [
        "Happy Birthday to You!",
        "Wishing You Joy and Laughter!",
        "May Your Day Be Special!",
        "Here's to Another Amazing Year!"
    ];
    
    // Create slides
    images.forEach((src, index) => {
        const slideContainer = document.createElement('div');
        slideContainer.className = 'slide';
        
        // Create image
        const slide = document.createElement('img');
        slide.src = src;
        slide.alt = `Birthday Photo ${index + 1}`;
        slide.style.width = '100%';
        slide.style.height = '100%';
        slide.style.objectFit = 'cover';
        
        // Create caption
        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.textContent = captions[index];
        caption.style.position = 'absolute';
        caption.style.bottom = '20px';
        caption.style.left = '0';
        caption.style.right = '0';
        caption.style.textAlign = 'center';
        caption.style.color = 'white';
        caption.style.fontSize = '1.5rem';
        caption.style.fontWeight = 'bold';
        caption.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
        caption.style.padding = '10px';
        caption.style.background = 'linear-gradient(transparent, rgba(0,0,0,0.7))';
        
        // Make the first slide active
        if (index === 0) {
            slideContainer.classList.add('active');
        }
        
        // Append elements
        slideContainer.appendChild(slide);
        slideContainer.appendChild(caption);
        slideshow.appendChild(slideContainer);
    });
    
    // Add navigation arrows
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&#10094;';
    prevButton.className = 'slide-nav prev';
    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.left = '10px';
    prevButton.style.transform = 'translateY(-50%)';
    prevButton.style.zIndex = '2';
    prevButton.style.background = 'rgba(255,255,255,0.5)';
    prevButton.style.border = 'none';
    prevButton.style.borderRadius = '50%';
    prevButton.style.width = '40px';
    prevButton.style.height = '40px';
    prevButton.style.fontSize = '20px';
    prevButton.style.cursor = 'pointer';
    
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&#10095;';
    nextButton.className = 'slide-nav next';
    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.right = '10px';
    nextButton.style.transform = 'translateY(-50%)';
    nextButton.style.zIndex = '2';
    nextButton.style.background = 'rgba(255,255,255,0.5)';
    nextButton.style.border = 'none';
    nextButton.style.borderRadius = '50%';
    nextButton.style.width = '40px';
    nextButton.style.height = '40px';
    nextButton.style.fontSize = '20px';
    nextButton.style.cursor = 'pointer';
    
    slideshow.appendChild(prevButton);
    slideshow.appendChild(nextButton);
    
    // Rotate slides every 4 seconds with different transitions
    let currentSlide = 0;
    const transitions = ['fadeIn', 'zoomIn', 'slideInRight', 'bounceIn', 'flipInX'];
    
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        
        currentSlide = index;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;
        
        // Apply random animation class
        const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
        slides[currentSlide].classList.add('active');
        slides[currentSlide].classList.add(`animate__animated`);
        slides[currentSlide].classList.add(`animate__${randomTransition}`);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            slides[currentSlide].classList.remove(`animate__${randomTransition}`);
            slides[currentSlide].classList.remove('animate__animated');
        }, 1000);
    }
    
    // Auto advance slides
    const slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000);
    
    // Add click handlers for navigation
    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(currentSlide - 1);
    });
    
    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(currentSlide + 1);
    });
}

// Initialize surprise button
function initSurpriseButton() {
    const surpriseButton = document.getElementById('surprise-button');
    const surpriseContent = document.getElementById('surprise-content');
    
    surpriseButton.addEventListener('click', function() {
        // Show surprise content
        surpriseContent.classList.remove('hidden');
        
        // Create a big confetti burst with special colors and shapes
        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#ff69b4', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'],
            shapes: ['circle', 'square', 'star'],
            ticks: 300
        });
        
        // Add surprise content (video or music player)
        surpriseContent.innerHTML = `
    <h2 class="animate__animated animate__bounceIn">Your Special Surprise!</h2>
    <div class="video-container animate__animated animate__zoomIn">
        <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/ODJUiHraIlQ?autoplay=1" 
                title="Birthday Surprise" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
        </iframe>
    </div>
    <p class="animate__animated animate__fadeIn animate__delay-1s">
        Wishing you the most amazing birthday filled with joy, laughter, and wonderful memories!
    </p>
`;

        
        // Create multiple confetti bursts
        let count = 0;
        const maxBursts = 5;
        const burstInterval = setInterval(() => {
            const randomX = Math.random();
            confetti({
                particleCount: 200,
                spread: 120,
                origin: { x: randomX, y: Math.random() * 0.3 + 0.1 },
                colors: ['#ff0000', '#ff69b4', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff']
            });
            
            count++;
            if (count >= maxBursts) {
                clearInterval(burstInterval);
            }
        }, 800);
        
        // Hide the button after it's clicked
        this.style.display = 'none';
    });
}

// Function to personalize the page with a name
function personalizePage(name) {
    const nameElements = document.querySelectorAll('.name');
    nameElements.forEach(el => {
        el.textContent = name;
    });
    
    // Also update the page title
    document.title = `Happy Birthday ${name}!`;
}

// Get name from URL parameter or use default
function getNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    return name || 'Sarah'; // Default name if not specified
}

// Call this function with the birthday person's name from URL
personalizePage(getNameFromURL());