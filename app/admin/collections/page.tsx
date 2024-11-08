import type { Metadata } from "next"
import type { SearchParams } from "nuqs/server"
import { Suspense } from "react"
import { DataTableSkeleton } from "~/components/admin/data-table/data-table-skeleton"
import { searchParamsSchema } from "~/schema/search-params"
import { CollectionsTable } from "./_components/collections-table"
import { getCollections } from "./_lib/queries"

type PageProps = {
  searchParams: Promise<SearchParams>
}

export const metadata: Metadata = {
  title: "Collections",
}

export default async function CollectionsPage({ searchParams }: PageProps) {
  const search = searchParamsSchema.parse(await searchParams)
  const collectionsPromise = getCollections(search)

  return (
    <Suspense
      fallback={
        <DataTableSkeleton
          title="Collections"
          columnCount={5}
          rowCount={15}
          searchableColumnCount={1}
          filterableColumnCount={2}
          cellWidths={["12%", "48%", "15%", "15%", "10%"]}
          shrinkZero
        />
      }
    >
      <CollectionsTable collectionsPromise={collectionsPromise} />
    </Suspense>
  )
}
