import { useEffect } from "react";
import type { PageMeta } from "@/config/seo";
import { OG_IMAGE } from "@/config/seo";
import { SITE_URL } from "@/config/site";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Applies per-route title, meta description, canonical URL, Open Graph, and
 * Twitter Card tags. Runs client-side on every route change — there's no
 * server here to set these before the response is sent, so this is the CSR
 * equivalent. Modern search engine crawlers execute JavaScript and pick
 * these up; if maximum crawler compatibility ever becomes a priority,
 * build-time prerendering of each route would be the next step up.
 */
export function useDocumentMeta(meta: PageMeta) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", meta.noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", canonicalUrl);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "MyHouseAssist");
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:locale", "en_IN");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
  }, [meta]);
}
