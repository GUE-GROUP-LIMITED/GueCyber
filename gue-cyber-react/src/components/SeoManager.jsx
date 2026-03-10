import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "GUE Cyber Limited";
const DEFAULT_TITLE = "GUE Cyber Limited | Cyber Business and Technology Services";
const DEFAULT_DESCRIPTION =
  "GUE Cyber Limited delivers cybersecurity, software and web development, cloud and DevOps, IT consulting, enterprise training, and technology procurement services.";
const DEFAULT_IMAGE = "/img/gue (5).jpg";

const routeMeta = {
  "/": {
    title: "GUE Cyber Limited | Cyber Business and Technology Services",
    description:
      "Cybersecurity, software and web development, intranet solutions, cloud and DevOps, IT consulting, training, and tech procurement for resilient organizations.",
  },
  "/about": {
    title: "About | GUE Cyber Limited",
    description:
      "Learn about GUE Cyber Limited, our mission, values, and approach to building resilient digital operations.",
  },
  "/services": {
    title: "Services | GUE Cyber Limited",
    description:
      "Explore GUE Cyber service offerings across cybersecurity, software/web/intranet development, cloud and DevOps, consulting, training, and tech procurement.",
  },
  "/contact": {
    title: "Contact | GUE Cyber Limited",
    description:
      "Contact GUE Cyber Limited to discuss cybersecurity, software, cloud, DevOps, and IT transformation priorities.",
  },
  "/careers": {
    title: "Careers | GUE Cyber Limited",
    description:
      "Explore career opportunities at GUE Cyber across cybersecurity, cloud and DevOps, software engineering, IT support, training, and procurement operations.",
  },
  "/blog": {
    title: "Projects & Case Studies | GUE Cyber Limited",
    description:
      "Explore GUE Cyber project highlights and case studies across cybersecurity, software development, cloud, and IT consulting.",
  },
  "/privacy": {
    title: "Privacy Policy | GUE Cyber Limited",
    description: "Read the GUE Cyber Limited privacy policy and data handling practices.",
  },
  "/terms": {
    title: "Terms | GUE Cyber Limited",
    description: "Review terms and conditions for using GUE Cyber Limited website and services.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | GUE Cyber Limited",
    description: "Understand how GUE Cyber Limited uses cookies and similar technologies.",
  },
};

function upsertMetaByName(name, content) {
  let tag = document.querySelector(`meta[name=\"${name}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property=\"${property}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let tag = document.querySelector("link[rel='canonical']");
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", url);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const page = routeMeta[location.pathname] || {};
    const title = page.title || DEFAULT_TITLE;
    const description = page.description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    const imageUrl = `${window.location.origin}${DEFAULT_IMAGE}`;

    document.title = title;
    upsertMetaByName("description", description);
    upsertMetaByName("robots", "index,follow,max-image-preview:large");

    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", imageUrl);
    upsertMetaByProperty("og:locale", "en_NG");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", imageUrl);

    upsertCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}
