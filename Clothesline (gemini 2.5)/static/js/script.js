// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // This ensures the script runs after the DOM is fully loaded

    const taglineElement = document.getElementById('typing-tagline');
    const taglines = [
        "Discover our latest collection of stylish and comfortable clothing.",
        "Find your perfect style with Clothesline today!",
        "Quality fashion delivered right to your door."
        // Add more taglines here if you like
    ];

    let taglineIndex = 0;
    const typingSpeed = 50; // milliseconds per character
    const eraseSpeed = 30; // milliseconds per character
    const pauseBeforeErase = 2000; // milliseconds to wait before erasing
    const pauseBeforeType = 500; // milliseconds to wait before typing next tagline

    function type(text, element, callback) {
        let i = 0;
        element.textContent = ''; // Clear previous text
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                if (callback) callback();
            }
        }, typingSpeed);
    }

    function erase(element, callback) {
        let text = element.textContent;
        let i = text.length;
        const erasingInterval = setInterval(() => {
            if (i > 0) {
                element.textContent = text.substring(0, i - 1);
                i--;
            } else {
                clearInterval(erasingInterval);
                if (callback) callback();
            }
        }, eraseSpeed);
    }

    function cycleTaglines() {
        const currentTagline = taglines[taglineIndex];
        type(currentTagline, taglineElement, () => {
            // After typing, wait, then erase
            setTimeout(() => {
                erase(taglineElement, () => {
                    // After erasing, move to the next tagline and wait before typing
                    taglineIndex = (taglineIndex + 1) % taglines.length; // Loop back to start
                    setTimeout(cycleTaglines, pauseBeforeType);
                });
            }, pauseBeforeErase);
        });
    }

    // Start the animation cycle
    if (taglineElement) { // Ensure the element exists before trying to animate
         // Add an initial delay before the first tagline starts typing
        setTimeout(cycleTaglines, 1000); // Start after 1 second
    }
});