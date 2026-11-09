/* Zet het thema voordat de pagina getekend wordt (geen flits). Extern bestand wegens de CSP (geen inline scripts).
   Moet dezelfde logica volgen als src/lib/thema.js. */
(function () {
  var voorkeur = 'automatisch';
  try {
    var v = window.localStorage.getItem('dienstklok-thema');
    if (v === 'licht' || v === 'donker') voorkeur = v;
  } catch (e) { /* opslag niet beschikbaar */ }
  var donker = voorkeur === 'donker';
  if (voorkeur === 'automatisch') {
    try { donker = window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) { donker = false; }
  }
  var root = document.documentElement;
  root.dataset.thema = donker ? 'donker' : 'licht';
  root.style.colorScheme = donker ? 'dark' : 'light';
  if (donker) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#1e293b');
  }
})();
