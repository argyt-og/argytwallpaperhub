/* ================= LOADER ================= */
// Fade out loader safely when page is fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 400);
});


/* ================= LIKE BUTTON ================= */
// Heart symbol only (♡ / ❤️)
function toggleLike(el) {
  el.textContent = el.textContent === "♡" ? "❤️" : "♡";
}


/* ================= PREVIEW ================= */
// Open fullscreen preview
function openPreview(src) {
  const preview = document.getElementById("preview");
  const img = document.getElementById("previewImg");

  if (!preview || !img) return;

  img.src = src;
  preview.style.display = "flex";
  preview.style.pointerEvents = "auto";
}

// Close fullscreen preview
function closePreview() {
  const preview = document.getElementById("preview");
  if (!preview) return;

  preview.style.display = "none";
  preview.style.pointerEvents = "none";
}


/* ================= SEARCH ================= */
function searchWallpapers() {
  const input = document.getElementById("search");
  if (!input) return;

  const val = input.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const tags = card.dataset.tags || "";
    card.style.display = tags.includes(val) ? "" : "none";
  });
}


/* ================= CATEGORY FILTER ================= */
function filterCat(cat) {
  document.querySelectorAll(".card").forEach(card => {
    const tags = card.dataset.tags || "";

    if (cat === "all" || tags.includes(cat)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}


/* ================= AUTO LOAD WALLPAPERS (IMPORTANT) ================= */
fetch("wallpapers.json")
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    gallery.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.tags = item.tags.join(" ");

      card.innerHTML = `
        <img src="${item.file}" alt="Wallpaper" onclick="openPreview(this.src)">
        <div class="actions">
          <span class="heart" onclick="toggleLike(this)">♡</span>
          <a href="${item.file}" download class="download">
            ⬇ <span>Download</span>
          </a>
        </div>
      `;

      gallery.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Wallpaper load error:", err);
  });
