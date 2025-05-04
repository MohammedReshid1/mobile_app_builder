import { Skeleton } from "@/components/ui/skeleton"
import LayoutWithSidebar from "../layout-with-sidebar"

export default function IntegrationsLoading() {
  return (
    <LayoutWithSidebar>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="mt-2 h-4 w-[300px]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-[300px]" />
            <Skeleton className="h-10 w-[150px]" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[120px] w-full" />
            ))}
        </div>

        <Skeleton className="h-10 w-[500px]" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[200px] w-full" />
            ))}
        </div>

        <Skeleton className="h-[400px] w-full" />
      </div>
    </LayoutWithSidebar>
  )
}
