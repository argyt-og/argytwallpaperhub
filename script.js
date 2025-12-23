// Hide loader safely
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Like button (heart only)
function toggleLike(el) {
  el.textContent = el.textContent === "♡" ? "❤️" : "♡";
}

// Open preview
function openPreview(src) {
  const preview = document.getElementById("preview");
  const img = document.getElementById("previewImg");
  preview.style.display = "flex";
  preview.style.pointerEvents = "auto";
  img.src = src;
}

// Close preview
function closePreview() {
  const preview = document.getElementById("preview");
  preview.style.display = "none";
  preview.style.pointerEvents = "none";
}

// Search wallpapers
function searchWallpapers() {
  const val = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.dataset.tags.includes(val) ? "" : "none";
  });
}

// Filter by category
function filterCat(cat) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      cat === "all" || card.dataset.tags.includes(cat)
        ? ""
        : "none";
  });
}
