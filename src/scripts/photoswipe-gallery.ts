import PhotoSwipeLightbox from "photoswipe/lightbox";

function wrapScreenshotImages() {
  document.querySelectorAll(".screenshots figure img").forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;
    if (img.closest("a[data-pswp-width]")) return;

    const link = document.createElement("a");
    link.href = img.currentSrc || img.src;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const width = img.getAttribute("width");
    const height = img.getAttribute("height");
    if (width) link.setAttribute("data-pswp-width", width);
    if (height) link.setAttribute("data-pswp-height", height);
    if (img.alt) link.setAttribute("aria-label", img.alt);

    img.parentNode?.insertBefore(link, img);
    link.appendChild(img);
  });
}

export function initPhotoSwipeGalleries() {
  wrapScreenshotImages();

  const lightbox = new PhotoSwipeLightbox({
    gallery: ".screenshots",
    children: "a",
    imageClickAction: "close",
    tapAction: "close",
    doubleTapAction: false,
    arrowPrev: false,
    arrowNext: false,
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
}
