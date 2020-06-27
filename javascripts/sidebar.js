$(function() {
  $('nav a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault()
      var scrollTo = $(this).attr('href')
      var whitespace = scrollTo == '#h1-about' ? 120 : 80
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000)
    })
  })
})
