


// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    // When the window loads, register the service worker
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../public/pwa/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

// Initialize variable to store install prompt
