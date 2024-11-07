import { env } from "~/env"

export const linksConfig = {
  feed: `${env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
  author: "https://stepham.com",
  twitter: "https://x.com/devsuiteco",
  github: "https://github.com/piotrkulpinski/devsuite",
  producthunt: "https://www.producthunt.com/posts/devsuite",
  family: [
    {
      title: "Stepham",
      href: "https://stepham.com",
      description: "Personal Website",
    },
    {
      title: "xuantiep",
      href: "https://xuantiep.com",
      description: "Developer website in developmemt",
    },
    {
      title: "Chipmunk Theme",
      href: "https://chipmunktheme.com",
      description: "Build directory websites in WordPress",
    },
  ],
}
