// Select all links with the class 'menu-link'
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the href attribute of the clicked link
        const targetHref = this.getAttribute('href');

        // Remove "active" class from all menu links in both header and sidebar
        menuLinks.forEach(link => link.classList.remove('active'));

        // Add "active" class to both header and sidebar links with the same href
        document.querySelectorAll(`.menu-link[href="${targetHref}"]`).forEach(link => {
            link.classList.add('active');
        });

        // Smooth scroll to the target section
        const targetSection = document.querySelector(targetHref);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});