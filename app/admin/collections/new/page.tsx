import type { Metadata } from "next"
import { CollectionForm } from "~/app/admin/collections/_components/collection-form"
import { getTools } from "~/app/admin/collections/_lib/queries"
import { Wrapper } from "~/components/admin/ui/wrapper"
import { H4 } from "~/components/common/heading"

export const metadata: Metadata = {
  title: "Create collection",
}

export default async function CreateCollectionPage() {
  const tools = await getTools()

  return (
    <Wrapper size="md">
      <H4 as="h1">Create collection</H4>

      <CollectionForm tools={tools} />
    </Wrapper>
  )
}
