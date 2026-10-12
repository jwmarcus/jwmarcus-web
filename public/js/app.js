var form_offset = Math.floor(Math.random() * 20);
$("#form_num_mod").val(form_offset);
$("#form_num_mod_text").html(form_offset.toString());

// Keep the footer copyright year current
$("#copyright-year").text(new Date().getFullYear());

// Pause control for the autoplaying header video (WCAG 2.2.2 Pause, Stop, Hide)
window._wq = window._wq || [];
window._wq.push({
  id: "z4gkwv9zdo",
  onReady: function(video) {
    var $toggle = $("#video-toggle");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function render(paused) {
      $toggle.attr("aria-pressed", paused ? "true" : "false");
      $toggle.find("i").attr("class", paused ? "fas fa-play" : "fas fa-pause");
      $toggle.find(".video-toggle-label").text(paused ? "Play background video" : "Pause background video");
    }

    if (reduceMotion) {
      video.pause();
    }
    render(reduceMotion);
    $toggle.prop("hidden", false).on("click", function() {
      if (video.state() === "playing") {
        video.pause();
        render(true);
      } else {
        video.play();
        render(false);
      }
    });
  }
});
