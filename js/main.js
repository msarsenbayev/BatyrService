function applyParallaxEffect(containerId, imageId, multiplier, maxTranslation) {
    var container = document.getElementById(containerId);
    var parallaxImage = document.getElementById(imageId);

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var moveAmount = scrollPosition * multiplier;

        // Limit the translation to the specified maximum
        moveAmount = Math.min(moveAmount, maxTranslation);

        parallaxImage.style.transform = 'translateX(' + moveAmount + 'px)';
    });
}

// Example usage with a maximum translation of 100 pixels
applyParallaxEffect('container1', 'parallaxImage1', 0.2, 300);
applyParallaxEffect('container2', 'parallaxImage2', 0.15, 300); // You can adjust the multiplier for each container
applyParallaxEffect('container2', 'parallaxImage3', 0.15, 300); // You can adjust the multiplier for each container
applyParallaxEffect('container2', 'parallaxImage4', 0.13, 300); // You can adjust the multiplier for each container
