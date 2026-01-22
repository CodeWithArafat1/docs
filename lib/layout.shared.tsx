import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Nill.",
    },

    links: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Docs",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Blog",
        url: "/blogs",
        active: "nested-url",
      },
    ],
  };
}
