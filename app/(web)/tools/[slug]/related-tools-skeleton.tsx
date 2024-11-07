import { ToolSkeleton } from "~/components/web/cards/tool-skeleton"
import { Listing } from "~/components/web/listing"

export const RelatedToolsSkeleton = () => {
  return (
    <Listing title="Similar Developer Tools:">
      {[...Array(3)].map((_, index) => (
        <ToolSkeleton key={index} />
      ))}
    </Listing>
  )
}
