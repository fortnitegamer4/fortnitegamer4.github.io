let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showImage(index) {
    // Ensure the index stays within bounds
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    // Calculate the offset for the translateX transform
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Function to move slide by clicking buttons (left or right)
function moveSlide(step) {
    showImage(currentIndex + step); // Adjust the index by the step (-1 or 1)
}

// Autoplay functionality
function autoPlay() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
        showImage(currentIndex); // Show the updated image
    }, 3000); // Change every 3 seconds
}

// Start the autoplay when the page loads
autoPlay();

// Add event listeners to buttons
document.querySelector('.left-button').addEventListener('click', function() {
    moveSlide(-1); // Move to the previous image
});

document.querySelector('.right-button').addEventListener('click', function() {
    moveSlide(1); // Move to the next image
});
