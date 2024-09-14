"use client"
import HackathonCard from "@/components/HackathonCard"
import { useInfiniteQuery } from "@tanstack/react-query"
import { IEvents } from "@/interfaces"

async function fetchEvents(page: number) {
  const res = await fetch(`/api/discover?page=${page}`)
  if (!res.ok) throw new Error('Network response was not ok')
  const data: IEvents[] = await res.json()
  return data
}

export default function Discover({ events }: { events: IEvents[] }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<IEvents[]>({
    queryKey: ["events"],
    queryFn: ({ pageParam = 1 }) => fetchEvents(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const morePageExists = lastPage.length > 0;
      return morePageExists ? allPages.length + 1 : undefined;
    },
    initialData: { pages: [events], pageParams: [1] }
  })

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-7 px-3 md:px-32 py-7 max-w-[1500px] mx-auto">
        {data?.pages.flatMap((page, i) =>
          page.map(({id, title, starts_at, ends_at, is_online, registrations_count, themes, displayed_location, organization_name}) => (
            <HackathonCard 
              key={id}
              id={id}
              starts_at={starts_at}
              ends_at={ends_at}
              title={title}
              displayed_location={displayed_location}
              is_online={is_online}
              organisation_name={organization_name}
              registrations_count={registrations_count}
              themes={themes}
            />
          ))
        )}
      </section>
      {hasNextPage && (
        <div className="text-center py-4">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  )
}