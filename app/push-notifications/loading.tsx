import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="mt-2 h-4 w-[350px]" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="h-9 w-[150px]" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-10 w-[400px]" />
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-24 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[80px]" />
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-[180px]" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <Skeleton className="h-[1px] w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-4 w-[120px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-4 w-[140px]" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-9 w-[100px]" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-[120px]" />
                <Skeleton className="h-9 w-[150px]" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
