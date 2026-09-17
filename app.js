import { content } from "./content.js";

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const initPage = () => {
  document.title = content.site.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", content.site.description);
  }

  const brandLink = document.querySelector(".brand");
  if (brandLink) {
    brandLink.setAttribute("aria-label", content.brand.homeLabel);
  }

  setText("#brand-name", content.brand.name);
  setText("#nav-about", content.nav.about);
  setText("#nav-values", content.nav.values);
  setText("#nav-contact", content.nav.contact);

  setText("#hero-eyebrow", content.hero.eyebrow);
  setText("#hero-title", content.hero.title);
  setText("#hero-lede", content.hero.lede);
  setText("#hero-primary-cta", content.hero.primaryCta);
  setText("#hero-secondary-cta", content.hero.secondaryCta);

  setText("#about-label", content.about.label);
  setText("#about-title", content.about.title);
  setText("#about-body", content.about.body);
  setText("#values-label", content.values.label || "Values");
  const valueGrid = document.querySelector(".value-grid");
  if (valueGrid) {
    if (Array.isArray(content.values.items) && content.values.items.length) {
      // render items into the existing three slots or expand
      valueGrid.innerHTML = content.values.items
        .map(
          (it, i) =>
            `<article><h3 id="value-${i + 1}-title">${it.title}</h3><p id="value-${i + 1}-body">${it.body}</p></article>`
        )
        .join("");
    } else if (content.values.body) {
      // single paragraph placeholder
      valueGrid.innerHTML = `<div style="grid-column: 1 / -1; padding:18px; color:var(--muted);">${content.values.body}</div>`;
    } else {
      valueGrid.innerHTML = `<div style="grid-column: 1 / -1; padding:18px; color:var(--muted);">Coming soon</div>`;
    }
  }

  setText("#contact-label", content.contact.label);
  setText("#contact-title", content.contact.title);
  setText("#contact-body", content.contact.body);
  // contact link: set text and href
  const contactLink = document.querySelector("#contact-link");
  if (contactLink) {
    const email = content.contact.email || "hello@faire-ge.com";
    contactLink.textContent = email;
    contactLink.setAttribute("href", `mailto:${email}`);
  }

  setText("#footer-copyright", content.footer.copyright || "");
  if (content.footer && content.footer.note) {
    setText("#footer-note", content.footer.note);
  }
};

initPage();
