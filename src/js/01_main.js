// Автоскейл
$(document).ready(() => {
  function autoscale() {
    const breakpoint =
      window.innerWidth > 1440
        ? window.innerWidth
        : window.innerWidth > 640
        ? 1440
        : window.innerWidth > 320
        ? 640
        : 320;
    const zoom = window.innerWidth / breakpoint;

    document.documentElement.style.zoom = zoom;
  }

  $(window).on("resize", autoscale);
  $(window).on("load", autoscale);
});

// Хедер
$(document).ready(() => {
  $(".header .burger").on("click", () => {
    $("body").toggleClass("menu-open");
    $(".nav__item").removeClass("active");
    $(".nav__submenu").hide(300);
  });

  $(".nav__item_submenu .nav__link").on("click", (e) => {
    if (window.innerWidth > 640) {
      return;
    }

    const parent = $(e.currentTarget).parent();
    const isActive = parent.hasClass("active");

    if (isActive) {
      parent.removeClass("active");
      parent.find(".nav__submenu").hide(300);
    } else {
      $(".nav__item").removeClass("active");
      $(".nav__submenu").hide(300);

      parent.addClass("active");
      parent.find(".nav__submenu").show(300);
    }
  });

  $(window).on("resize", () => {
    if (window.innerWidth > 640) {
      $("body").removeClass("menu-open");
      $(".nav__item").removeClass("active");
      $(".nav__submenu").hide(300);
      $(".nav__item").removeClass("active");
    }
  });
});
