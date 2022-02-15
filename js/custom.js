var btn = $("#button");
var img = $("#button img");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
    img.addClass("show");
  } else {
    btn.removeClass("show");
    img.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// scroll item click
$(".scroll-item").click(function () {
  var scrollList = $(".scroll-list");
  var liList = scrollList.find(".scroll-item");

  liList.each(function (index, el) {
    $(el).removeClass("active");
  });

  $(this).addClass("active");
});

// scroll to zone active link
const sections = $(".event-cont").find(".event-item");
const navLi = $(".scroll-list").find(".scroll-item");
window.onscroll = () => {
  var current = "";

  sections.each(function (index, section) {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.each(function (index, li) {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
