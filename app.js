const LANGUAGES = [
  // Systems
  {
    name: "C",
    category: "systems",
    description: "Low-level, fast language used for OS, embedded, and performance-critical software.",
    links: [
      { label: "TutorialsPoint (C)", url: "https://www.tutorialspoint.com/cprogramming/index.htm" },
      { label: "C Reference (cppreference)", url: "https://en.cppreference.com/w/c" }
    ]
  },
  {
    name: "C++",
    category: "systems",
    description: "High-performance language used for games, engines, and system-level applications.",
    links: [
      { label: "TutorialsPoint (C++)", url: "https://www.tutorialspoint.com/cplusplus/index.htm" },
      { label: "C++ Reference (cppreference)", url: "https://en.cppreference.com/w/cpp" }
    ]
  },
  {
    name: "Rust",
    category: "systems",
    description: "Memory-safe systems programming language with modern tooling.",
    links: [
      { label: "The Rust Book", url: "https://doc.rust-lang.org/book/" }
    ]
  },
  {
    name: "Go (Golang)",
    category: "systems",
    description: "Simple, fast language popular for cloud tools and backend services.",
    links: [
      { label: "Go Tour", url: "https://go.dev/tour/welcome/1" },
      { label: "Go Docs", url: "https://go.dev/doc/" }
    ]
  },

  // Web
  {
    name: "HTML",
    category: "web",
    description: "Markup language for structuring web pages.",
    links: [
      { label: "W3Schools (HTML)", url: "https://www.w3schools.com/html/" },
      { label: "MDN (HTML)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
    ]
  },
  {
    name: "CSS",
    category: "web",
    description: "Stylesheet language for designing web pages.",
    links: [
      { label: "W3Schools (CSS)", url: "https://www.w3schools.com/css/" },
      { label: "MDN (CSS)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ]
  },
  {
    name: "JavaScript",
    category: "web",
    description: "Language of the web used for interactivity, frontend, and backend (Node.js).",
    links: [
      { label: "MDN (JavaScript)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { label: "TutorialsPoint (JS)", url: "https://www.tutorialspoint.com/javascript/index.htm" }
    ]
  },
  {
    name: "TypeScript",
    category: "web",
    description: "JavaScript with types for large-scale frontend and backend apps.",
    links: [
      { label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }
    ]
  },
  {
    name: "Bootstrap",
    category: "web",
    description: "CSS framework for building responsive websites quickly.",
    links: [
      { label: "Bootstrap Docs", url: "https://getbootstrap.com/docs/" },
      { label: "W3Schools (Bootstrap)", url: "https://www.w3schools.com/bootstrap/" }
    ]
  },

  // Backend
  {
    name: "Java",
    category: "backend",
    description: "Popular for backend services, Android, and enterprise systems.",
    links: [
      { label: "TutorialsPoint (Java)", url: "https://www.tutorialspoint.com/java/index.htm" },
      { label: "Java Docs", url: "https://docs.oracle.com/en/java/" }
    ]
  },
  {
    name: "Python",
    category: "backend",
    description: "Great for backend, automation, scripting, and quick development.",
    links: [
      { label: "Python Docs", url: "https://docs.python.org/3/" },
      { label: "TutorialsPoint (Python)", url: "https://www.tutorialspoint.com/python/index.htm" }
    ]
  },
  {
    name: "PHP",
    category: "backend",
    description: "Server-side language used widely for websites and CMS like WordPress.",
    links: [
      { label: "PHP Manual", url: "https://www.php.net/manual/en/" },
      { label: "W3Schools (PHP)", url: "https://www.w3schools.com/php/" }
    ]
  },
  {
    name: "Node.js",
    category: "backend",
    description: "JavaScript runtime used for backend APIs and real-time apps.",
    links: [
      { label: "Node.js Docs", url: "https://nodejs.org/en/docs" }
    ]
  },
  {
    name: "C#",
    category: "backend",
    description: "Modern language used for .NET web APIs, desktop apps, and games (Unity).",
    links: [
      { label: "Microsoft Learn (C#)", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" }
    ]
  },
  {
    name: "Visual Basic .NET",
    category: "backend",
    description: ".NET language used for Windows apps and business tools.",
    links: [
      { label: "TutorialsPoint (VB.NET)", url: "https://www.tutorialspoint.com/vb.net/index.htm" }
    ]
  },

  // Mobile
  {
    name: "Kotlin",
    category: "mobile",
    description: "Modern language for Android development.",
    links: [
      { label: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" }
    ]
  },
  {
    name: "Swift",
    category: "mobile",
    description: "Apple’s language for iOS and macOS development.",
    links: [
      { label: "Swift Docs", url: "https://www.swift.org/documentation/" }
    ]
  },

  // Data
  {
    name: "SQL",
    category: "data",
    description: "Language for querying and managing relational databases.",
    links: [
      { label: "W3Schools (SQL)", url: "https://www.w3schools.com/sql/" }
    ]
  },
  {
    name: "R",
    category: "data",
    description: "Language used for statistics, data analysis, and visualization.",
    links: [
      { label: "R Project", url: "https://www.r-project.org/" }
    ]
  }
];

function $(id){ return document.getElementById(id); }

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderGrid(items){
  const grid = $("langGrid");

  grid.innerHTML = items.map((lang) => `
    <article class="lang-card">
      <div class="lang-card__top">
        <h3 class="lang-card__title">${escapeHtml(lang.name)}</h3>
        <span class="lang-card__tag">${escapeHtml(lang.category)}</span>
      </div>
      <p class="lang-card__desc">${escapeHtml(lang.description)}</p>
      <div class="lang-card__actions">
        <button class="btn btn--primary" type="button" data-open="${escapeHtml(lang.name)}">View resources</button>
      </div>
    </article>
  `).join("");
}

function getFiltered(){
  const q = $("langSearch").value.trim().toLowerCase();
  const cat = $("langCategory").value;

  return LANGUAGES.filter(l => {
    const matchQ = !q || l.name.toLowerCase().includes(q);
    const matchCat = cat === "all" || l.category === cat;
    return matchQ && matchCat;
  });
}

/* Modal */
function openModal(lang){
  const modal = $("langModal");
  $("modalTitle").textContent = lang.name;
  $("modalDesc").textContent = lang.description;

  $("modalLinks").innerHTML = (lang.links || []).map(l => {
    const label = escapeHtml(l.label);
    const url = escapeHtml(l.url);
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }).join("");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const modal = $("langModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function init(){
  renderGrid(LANGUAGES);

  $("langSearch").addEventListener("input", () => renderGrid(getFiltered()));
  $("langCategory").addEventListener("change", () => renderGrid(getFiltered()));

  $("langGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (!btn) return;

    const langName = btn.dataset.open;
    const lang = LANGUAGES.find(l => l.name === langName);
    if (lang) openModal(lang);
  });

  $("langModal").addEventListener("click", (e) => {
    const closeTarget = e.target.closest("[data-close='true']");
    if (closeTarget) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("langModal").classList.contains("is-open")) {
      closeModal();
    }
  });
}

init();
