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
