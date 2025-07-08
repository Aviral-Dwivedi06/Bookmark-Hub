document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");

  
  function updateBookmarkCount() {
    const total = document.querySelectorAll("p a").length;
    document.getElementById("bookmarkCount").textContent = `Total Bookmarks: ${total}`;
  }

 
  updateBookmarkCount();

  
  searchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const allParagraphs = document.querySelectorAll("p");

    allParagraphs.forEach(p => {
      const text = p.textContent.toLowerCase();
      if (text.includes(filter)) {
        p.style.display = "";
      } else {
        p.style.display = "none";
      }
    });
  });
});



