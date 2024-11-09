import { env } from "~/env"

export const linksConfig = {
  feed: `${env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
  author: "https://stepham.com",
  twitter: "https://x.com/devsuiteco",
  github: "https://github.com/piotrkulpinski/devsuite",
  producthunt: "https://www.producthunt.com/posts/devsuite",
  family: [
    {
      title: "OpenAlternative",
      href: "https://openalternative.co",
      description: "Open Source Alternatives to Popular Software",
    },
    {
      title: "Superstash",
      href: "https://superstash.co",
      description: "No-code directory website builder",
    },
    {
      title: "Chipmunk Theme",
      href: "https://chipmunktheme.com",
      description: "Build directory websites in WordPress",
    },
  ],
}
