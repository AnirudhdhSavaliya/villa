
window.onscroll = function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };
  
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  