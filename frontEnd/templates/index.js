document.addEventListener('DOMContentLoaded', () => {
    console.log('help')
    const header = document.querySelector('.header');
    if (!header) {
        console.error("Header element not found!");
        return;
    }

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        console.log(`Current Scroll: ${currentScroll}, Last Scroll: ${lastScroll}`);

        if (currentScroll > lastScroll) {
            header.style.transform = 'translateY(-100%)'; // Hide the navbar
            console.log('Hiding Navbar');
        } else {
            header.style.transform = 'translateY(0)'; // Show the navbar
            console.log('Showing Navbar');
        }

        lastScroll = currentScroll;
    });
});
