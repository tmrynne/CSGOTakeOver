$('.count').each(function() {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 900,
    easing: 'swing',
    step: function(now) {
      $(this).text(Math.ceil(now));
	  document.getElementById("shiva").innerHTML =

document.getElementById("shiva").innerHTML =
Math.floor(Math.random() * 25) + 90;
    }
  });
});