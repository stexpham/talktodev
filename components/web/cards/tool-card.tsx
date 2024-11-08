import { DollarSignIcon, SparkleIcon } from "lucide-react"
import Link from "next/link"
import type { HTMLAttributes } from "react"
import { H4 } from "~/components/common/heading"
import { Stack } from "~/components/common/stack"
import { Badge } from "~/components/web/ui/badge"
import { Card, CardDescription, CardStars } from "~/components/web/ui/card"
import { Favicon } from "~/components/web/ui/favicon"
import type { ToolMany } from "~/server/tools/payloads"

type ToolCardProps = HTMLAttributes<HTMLElement> & {
  tool: ToolMany
  showBadges?: boolean
}

export const ToolCard = ({ tool, showBadges = true, ...props }: ToolCardProps) => {
  return (
    <Card isFeatured={tool.isFeatured} asChild>
      <Link href={`/tools/${tool.slug}`} prefetch {...props}>
        <Stack size="sm" className="absolute top-0 inset-x-6 z-10 -translate-y-1/2 mx-px">
          {tool.isFeatured && (
            <Badge variant="outline" prefix={<SparkleIcon className="text-yellow-500" />}>
              Featured
            </Badge>
          )}

          {showBadges &&
            tool.collections.map(collection => (
              <Badge key={collection.id} variant="outline">
                {collection.name}
              </Badge>
            ))}
        </Stack>

        {tool.isFeatured && <CardStars className="brightness-125" />}

        <div className="w-full flex gap-3 items-center justify-between">
          <H4>{tool.name}</H4>
          {tool.faviconUrl && <Favicon src={tool.faviconUrl} title={tool.name} />}
        </div>

        {tool.tagline && <CardDescription>{tool.tagline}</CardDescription>}

        <Stack size="sm" className="mt-auto">
          {tool.pricing && (
            <Badge variant="ghost" prefix={<DollarSignIcon className="text-green-500" />}>
              {tool.pricing}
            </Badge>
          )}
        </Stack>
      </Link>
    </Card>
  )
}
