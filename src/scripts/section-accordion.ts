type GuideLang = "en" | "fi" | "sv" | "ar";

const toggleLabels: Record<
  GuideLang,
  { expand: string; collapse: string }
> = {
  en: { expand: "Expand section", collapse: "Collapse section" },
  fi: { expand: "Laajenna osio", collapse: "Supista osio" },
  sv: { expand: "Expandera avsnitt", collapse: "Fäll ihop avsnitt" },
  ar: { expand: "توسيع القسم", collapse: "طي القسم" },
};

function getLang(): GuideLang {
  const lang = document.documentElement.lang;
  if (lang === "fi" || lang === "sv" || lang === "ar") return lang;
  return "en";
}

function setToggleLabel(btn: HTMLButtonElement, open: boolean, lang: GuideLang) {
  btn.setAttribute(
    "aria-label",
    open ? toggleLabels[lang].collapse : toggleLabels[lang].expand,
  );
}

function openSection(section: HTMLElement, lang: GuideLang) {
  section.classList.add("is-open");
  const btn = section.querySelector(".section-toggle");
  if (btn instanceof HTMLButtonElement) {
    btn.setAttribute("aria-expanded", "true");
    setToggleLabel(btn, true, lang);
  }
}

function toggleSection(section: HTMLElement, btn: HTMLButtonElement, lang: GuideLang) {
  const open = section.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", String(open));
  setToggleLabel(btn, open, lang);
}

function openFromHash(sections: NodeListOf<Element>, lang: GuideLang) {
  const id = window.location.hash.slice(1);
  if (!id) return;

  for (const section of sections) {
    if (section instanceof HTMLElement && section.id === id) {
      openSection(section, lang);
      break;
    }
  }
}

export function initSectionAccordions() {
  const lang = getLang();
  const sections = document.querySelectorAll(".wrap > section[id]");
  if (!sections.length) return;

  sections.forEach((section) => {
    if (!(section instanceof HTMLElement)) return;

    const h2 = section.querySelector(":scope > h2");
    if (!h2 || h2.querySelector(".section-toggle")) return;

    const panel = document.createElement("div");
    panel.className = "section-panel";
    panel.id = `${section.id}-panel`;

    let node = h2.nextElementSibling;
    while (node) {
      const next = node.nextElementSibling;
      panel.appendChild(node);
      node = next;
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "section-toggle";
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-controls", panel.id);
    setToggleLabel(btn, true, lang);

    while (h2.firstChild) {
      btn.appendChild(h2.firstChild);
    }

    const chevron = document.createElement("span");
    chevron.className = "section-toggle-aside";
    chevron.setAttribute("aria-hidden", "true");
    btn.appendChild(chevron);

    h2.appendChild(btn);
    section.appendChild(panel);
    section.classList.add("guide-section", "is-open");

    btn.addEventListener("click", () => {
      toggleSection(section, btn, lang);
    });
  });

  document.querySelectorAll('nav.toc a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;

      const section = document.getElementById(href.slice(1));
      if (section?.classList.contains("guide-section")) {
        openSection(section, lang);
      }
    });
  });

  window.addEventListener("hashchange", () => openFromHash(sections, lang));
  openFromHash(sections, lang);
}
