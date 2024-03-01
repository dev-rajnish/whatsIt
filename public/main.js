
  function openWhatsAppChat() {
    // Get the phone number from the input field
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    // Check if the phone number is exactly 10 digits long
    if (/^\d{10}$/.test(phoneNumber)) {
      // Format the phone number to include the country code (e.g., +91 for India)
      const formattedPhoneNumber = `+91${phoneNumber}`;

      // Construct the WhatsApp chat link
      const whatsappLink = `https://wa.me/${formattedPhoneNumber}`;

      // Open the WhatsApp chat link in a new tab
      window.open(whatsappLink, '_blank');
    } else {
      // Notify the user that the phone number is invalid or incomplete
      alert('Please enter a valid 10-digit phone number Only.');
    }
  }
function toggleTheme(){
  const phoneNumber = document.getElementsByClassName('theme-controller').value.trim();
  console.log("themeChanged");
}

let installPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the default behavior of the event
    e.preventDefault();
    // Store the install prompt event
    installPrompt = e;
    // Display the install button
    console.log('istallBtn');
    document.getElementById('installBtn').style.display = 'block';
});

// Listen for click event on install button
document.getElementById('installBtn').addEventListener('click', (e) => {
    // If install prompt event is available
    if (installPrompt) {
        // Trigger the install prompt
        installPrompt.prompt();
        // Wait for user's choice
        installPrompt.userChoice.then((choiceResult) => {
            // Log user's choice
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            // Reset install prompt variable
            installPrompt = null;
            // Hide the install button
            document.getElementById('installBtn').style.display = 'none';
        });
    }
});

// Listen for appinstalled event
window.addEventListener('appinstalled', (e) => {
    // Log when the app is installed
    console.log('App installed');
    // Hide the install button
    document.getElementById('installBtn').style.display = 'none';
});

// Check if the app is in browser mode
if (window.matchMedia('(display-mode:browser)').matches) {
    // Display the install button
    document.getElementById('installBtn').style.display = 'block';
} else {
    // Hide the install button
    document.getElementById('installBtn').style.display = 'none';
}