document.addEventListener('DOMContentLoaded', function() {
    // Smooth transitions between pages
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fadeOut');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Change to match your CSS transition duration
        });
    });

    let slideIndex = 1;
    showSlides(slideIndex);
});

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach((slideshow, index) => {
        const folderName = ['food_delivery', 'data_viz', 'machine_learning', 'collaborative_code_editor'][index]; // Folder names
        const imageCount = 2; // Number of images in each folder
        slideshow.innerHTML = ''; // Clear previous images

        for (let i = 1; i <= imageCount; i++) {
            const img = document.createElement('img');
            img.src = `/${folderName}/food_ordering_img${i}.jpg`; // Adjust the image file names
            img.alt = `${folderName} Image`;
            slideshow.appendChild(img);
        }
    });
}
