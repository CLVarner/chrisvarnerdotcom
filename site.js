(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  if (menu && nav) {
    document.documentElement.classList.add('js');
    menu.hidden = false;
    const close = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (event) => { if(event.target.closest('a')) close(); });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {close();menu.focus();}
    });
    window.addEventListener('resize', () => {if(window.innerWidth>920)close();});
  }
  const openLinkedNote = () => {
    if (!location.hash.startsWith('#note-')) return;
    const note = document.getElementById(location.hash.slice(1));
    if(note instanceof HTMLDetailsElement) note.open = true;
  };
  window.addEventListener('hashchange', openLinkedNote);
  openLinkedNote();
})();
