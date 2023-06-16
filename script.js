// Get all of the navigation links
var navigationLinks = document.querySelectorAll(".navigation a");

// When a navigation link is clicked, scroll to the corresponding section
navigationLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the ID of the section that the link is linked to
    var sectionId = link.href.split("#")[1];

    // Scroll to the section
    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop,
      left: 0
    });
  });
});
