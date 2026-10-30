const toggle = document.querySelector("#bib-toggle");
const panel = document.querySelector("#bibtex");
const copyButton = document.querySelector("#copy-bib");
const copyStatus = document.querySelector("#copy-status");

if (toggle && panel) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.hidden = !isOpen;
    toggle.textContent = isOpen ? "BibTeX −" : "BibTeX +";
  });
}

if (copyButton && panel && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const citation = panel.querySelector("code")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(citation);
      copyStatus.textContent = "Copied to clipboard.";
    } catch {
      copyStatus.textContent = "Clipboard unavailable. Select and copy the citation above.";
    }
  });
}
