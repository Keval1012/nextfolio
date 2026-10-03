export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-75 dark:opacity-60" />

      {/* Top primary glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-3xl rounded-full" />

      {/* Accent glow on top right */}
      <div className="absolute top-[20%] right-[-150px] w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full" />

      {/* Accent glow on bottom left */}
      <div className="absolute top-[60%] left-[-150px] w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
    </div>
  );
}
