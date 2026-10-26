const toggle = document.querySelector('#bib-toggle');
const panel = document.querySelector('#bibtex');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
  toggle.textContent = open ? 'BibTeX −' : 'BibTeX +';
});
document.querySelector('#copy-bib').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(panel.querySelector('code').textContent);
    status.textContent = 'Copied!';
  } catch {
    status.textContent = 'Please select and copy the citation above.';
  }
});
