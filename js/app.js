$(document).ready(function () {
  // Click To Scroll Up
  $('#scroll-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
  })
})

// Auto indicate active section from the section link script
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.menu .nav-item a')

const options = {
  rootMargin: '-50% 0% -50% 0%',
  threshold: 0,
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id')
      navLinks.forEach((link) => {
        link.classList.remove('active_links')
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active_links')
        }
      })
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})
