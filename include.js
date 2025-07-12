document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[include-html]').forEach(el => {
    const file = el.getAttribute("include-html");
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
        return res.text();
      })
      .then(html => el.innerHTML = html)
      .catch(err => el.innerHTML = `<p>Error al cargar ${file}</p>`);
  });
});
