// Автоскейл
document.addEventListener("DOMContentLoaded", () => {
  function autoscale() {
    const breakpoint = window.innerWidth > 1440 ? window.innerWidth : window.innerWidth > 640 ? 1440 : window.innerWidth > 320 ? 640 : 320; 
    const zoom = window.innerWidth / breakpoint;

    document.documentElement.style.zoom = zoom;
  }
  
  window.addEventListener("resize", autoscale);
  window.addEventListener("load", autoscale);

});
