import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

/**
 * Every page is lazy-loaded via route.lazy(), so the initial JS bundle only
 * contains what's needed for the Layout + whichever page was requested.
 * This is what satisfies the "Lazy Loading / Code Splitting" performance
 * requirement without adding React.lazy() boilerplate to every page file.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import("@/pages/Home"),
      },
      {
        path: "home-deep-cleaning",
        lazy: () => import("@/pages/HomeDeepCleaning"),
      },
      {
        path: "bathroom-cleaning",
        lazy: () => import("@/pages/BathroomCleaning"),
      },
      {
        path: "pricing",
        lazy: () => import("@/pages/Pricing"),
      },
      {
        path: "about",
        lazy: () => import("@/pages/About"),
      },
      {
        path: "contact",
        lazy: () => import("@/pages/Contact"),
      },
      {
        path: "faq",
        lazy: () => import("@/pages/Faq"),
      },
      {
        path: "privacy-policy",
        lazy: () => import("@/pages/PrivacyPolicy"),
      },
      {
        path: "terms-and-conditions",
        lazy: () => import("@/pages/TermsAndConditions"),
      },
      {
        path: "*",
        lazy: () => import("@/pages/NotFound"),
      },
    ],
  },
]);
