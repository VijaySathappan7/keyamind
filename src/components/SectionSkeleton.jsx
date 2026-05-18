export default function SectionSkeleton() {
  return (
    <div className="w-full py-16 sm:py-24 relative overflow-hidden bg-ivory-cream/5 select-none min-h-[300px] flex flex-col items-center justify-center">
      {/* Soft Premium Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/10 via-purple-100/5 to-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300/10 rounded-full blur-[80px] pointer-events-none animate-pulse-soft" />

      {/* Glass card skeleton */}
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col gap-6 relative z-10 animate-pulse">
        <div className="h-4 w-32 bg-dark-lavender/10 rounded-full" />
        <div className="h-10 w-2/3 sm:w-1/2 bg-dark-lavender/15 rounded-2xl" />
        <div className="space-y-3 mt-4">
          <div className="h-4 w-full bg-dark-lavender/10 rounded-full" />
          <div className="h-4 w-5/6 bg-dark-lavender/10 rounded-full" />
          <div className="h-4 w-4/5 bg-dark-lavender/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
