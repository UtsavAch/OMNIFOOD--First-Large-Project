// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open")
})


// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behaviour: "smooth"
            });
            // Scroll to other links
        } else if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behaviour: "smooth"
            })
        }

        // CLose mobile navigation
        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open")
        }
    })
})

///////////////////// Sticky Navigation ////////////////////////
const sectionHeroEl = document.querySelector(".section-hero");


const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    } else if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
    }
}, {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
obs.observe(sectionHeroEl);