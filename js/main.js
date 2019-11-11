$(document).ready(function() {
  const portfolioSlider = $(".owl-carousel");

  portfolioSlider.on(
    "initialize.owl.carousel initialized.owl.carousel " +
      "initialize.owl.carousel initialize.owl.carousel" +
      "resize.owl.carousel resized.owl.carousel " +
      "refresh.owl.carousel refreshed.owl.carousel " +
      "update.owl.carousel updated.owl.carousel " +
      "drag.owl.carousel dragged.owl.carousel " +
      "translate.owl.carousel translated.owl.carousel " +
      "to.owl.carousel changed.owl.carousel",
    function(event) {
      $(".slide-controls-number__active").text(event.item.index + 1);
      $(".slide-controls-number__total").text(event.item.count);
    }
  );

  portfolioSlider.owlCarousel({
    items: 1,
    dots: false
  });

  portfolioSlider.on(
    "drag.owl.carousel dragged.owl.carousel " +
      "translate.owl.carousel translated.owl.carousel " +
      "to.owl.carousel changed.owl.carousel",
    function(event) {
      $(".slide-controls-number__active").text(event.item.index + 1);
      $(".slide-controls-number__total").text(event.item.count);
    }
  );

  $("#portfolioArrowRight").click(function() {
    portfolioSlider.trigger("next.owl.carousel");
  });

  $("#portfolioArrowLeft").click(function() {
    portfolioSlider.trigger("prev.owl.carousel");
  });
});
