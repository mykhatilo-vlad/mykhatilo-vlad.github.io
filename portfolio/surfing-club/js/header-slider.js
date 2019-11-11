$(document).ready(function() {
  const headerSlider = $("#headerSlider");

  headerSlider.on("initialize.owl.carousel initialized.owl.carousel", function(
    event
  ) {
    $(".slide-controls__number-active").text(event.item.index + 1);
    $(".slide-controls__number-total").text(event.item.count);
  });

  headerSlider.owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    smartSpeed: 1000
  });

  $("#headerSliderLeft").click(function() {
    console.log("Left");
    headerSlider.trigger("prev.owl.carousel");
  });

  $("#headerSliderRight").click(function() {
    console.log("Right");
    headerSlider.trigger("next.owl.carousel");
  });

  headerSlider.on("changed.owl.carousel", function(event) {
    $(".slide-controls__number-active").text(event.item.index + 1);
    $(".slide-controls__number-total").text(event.item.count);
  });
});
