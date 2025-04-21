$(function () {
  $("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true,
    display: "single",
    duration: 1000,
    gradients: true,
    elevation: 50,
    when: {
      turning: function (e, page, view) {
        $("#page-number").text(page);
      },
    },
  });

  var totalPages = $("#flipbook").turn("pages");
  $("#total-pages").text(totalPages);

  $("#prev").click(function () {
    $("#flipbook").turn("previous");
    return false;
  });

  $("#next").click(function () {
    $("#flipbook").turn("next");
    return false;
  });

  $(".page").click(function (e) {
    var pageWidth = $(this).width();
    var clickX = e.pageX - $(this).offset().left;
    if (clickX < pageWidth / 2) {
      $("#flipbook").turn("previous");
    } else {
      $("#flipbook").turn("next");
    }
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 37) {
      $("#flipbook").turn("previous");
    } else if (e.keyCode == 39) {
      $("#flipbook").turn("next");
    }
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
  $('.toggle-dark').click(function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  });
  
});
