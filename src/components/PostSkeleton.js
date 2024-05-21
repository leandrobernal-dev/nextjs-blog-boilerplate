import { Skeleton } from "@/components/ui/skeleton";

export function PostSkeleton() {
  return (
    <div className="my-2 flex w-full items-center space-x-4">
      <div className="w-full space-y-2">
        <Skeleton className="h-16 w-[300px]" />
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
