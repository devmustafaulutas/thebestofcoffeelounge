// app/menu/[slug]/loading.tsx
export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="h-[46svh] min-h-[300px] w-full animate-pulse bg-muted" />
      <div className="mx-auto max-w-6xl px-4 md:px-5 -mt-2">
        <div className="rounded-[1.8rem] border border-border bg-card overflow-hidden">
          <div className="px-5 pt-7 pb-5 md:px-7 md:pt-8">
            <div className="h-3 w-20 rounded bg-muted animate-pulse" />
            <div className="mt-3 h-8 w-56 rounded bg-muted animate-pulse" />
          </div>

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 md:px-7 md:py-5 border-b border-border">
              <div className="w-[68px] h-[68px] md:w-[84px] md:h-[84px] rounded-xl bg-muted animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-40 rounded bg-muted animate-pulse" />
                <div className="h-3 w-full rounded bg-muted animate-pulse" />
                <div className="h-3 w-24 rounded bg-muted animate-pulse" />
              </div>
              <div className="h-6 w-16 rounded bg-muted animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}