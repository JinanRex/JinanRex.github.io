const toggle = document.querySelector('#bib-toggle');
const panel = document.querySelector('#bibtex');
const copyButton = document.querySelector('#copy-bib');
const copyStatus = document.querySelector('#copy-status');

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.hidden = !isOpen;
    toggle.textContent = isOpen ? 'BIBTEX −' : 'BIBTEX +';
  });
}

if (copyButton && panel && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const citation = panel.querySelector('code')?.textContent ?? '';
    try {
      await navigator.clipboard.writeText(citation);
      copyStatus.textContent = 'COPIED.';
    } catch {
      copyStatus.textContent = 'CLIPBOARD UNAVAILABLE. COPY MANUALLY.';
    }
  });
}