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

  // brand name removed from header; set nav labels
  setText("#nav-values", content.nav.values);
  setText("#nav-contact", content.nav.contact);

  setText("#hero-eyebrow", content.hero.eyebrow);
  setText("#hero-title", content.hero.title);
  setText("#hero-lede", content.hero.lede);
  setText("#hero-primary-cta", content.hero.primaryCta);
  setText("#hero-secondary-cta", content.hero.secondaryCta);

  setText("#values-label", content.values.label || "Values");
  // populate a simple values body if present
  if (content.values && content.values.body) {
    setText("#values-body", content.values.body);
  } else {
    setText("#values-body", "Coming soon");
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
