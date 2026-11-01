const currentPage = document.body.dataset.page;

const navigation = [
  { key: "about", label: "About Us", href: "index.html" },
  { key: "activities", label: "活動内容", href: "activities.html" },
  { key: "log", label: "活動Log", href: "log.html" },
];

const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");

if (header) {
  header.className = "site-header";
  header.innerHTML = `
    <div class="site-header__inner">
      <a class="brand" href="index.html" aria-label="Dialogue トップページ">Dialogue<span>.</span></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span class="menu-button__label">Menu</span><span class="menu-button__icon" aria-hidden="true"></span>
      </button>
      <nav id="primary-navigation" class="primary-nav" aria-label="メインナビゲーション">
        ${navigation.map((item) => `<a href="${item.href}" ${item.key === currentPage ? 'aria-current="page"' : ""}>${item.label}</a>`).join("")}
      </nav>
    </div>`;

  const button = header.querySelector(".menu-button");
  const nav = header.querySelector(".primary-nav");
  button?.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
  });
}

if (footer) {
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="site-footer__inner">
      <div>
        <a class="brand brand--footer" href="index.html">Dialogue<span>.</span></a>
        <p>国際教養大学の対話サークル</p>
      </div>
      <div class="footer-links">
        <a href="https://forms.gle/tM5tNzw7RAHFwkZQ9" target="_blank" rel="noopener noreferrer">参加フォーム <span aria-hidden="true">↗</span></a>
        <a href="https://www.instagram.com/dialogue_aiu/" target="_blank" rel="noopener noreferrer">Instagram @dialogue_aiu <span aria-hidden="true">↗</span></a>
      </div>
      <p class="copyright">© <span id="year"></span> Dialogue, Akita International University</p>
    </div>`;
  const year = footer.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
}

const list = document.querySelector("#log-list");
if (list) {
  const entries = Array.isArray(window.logEntries) ? window.logEntries : [];
  if (!entries.length) {
    list.innerHTML = '<p class="empty-log">資料は順次追加します。次の対話をお待ちください。</p>';
  } else {
    entries.forEach((entry) => {
      const card = document.createElement("article");
      card.className = "log-card";
      const meta = document.createElement("p");
      meta.className = "log-card__meta";
      meta.textContent = [entry.date, entry.presenter].filter(Boolean).join(" · ");
      const title = document.createElement("h3");
      title.textContent = entry.title;
      const description = document.createElement("p");
      description.textContent = entry.description || "";
      const link = document.createElement("a");
      link.href = entry.file;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "text-link";
      link.innerHTML = 'PDFを開く <span aria-hidden="true">↗</span>';
      card.append(meta, title, description, link);
      list.append(card);
    });
  }
}
