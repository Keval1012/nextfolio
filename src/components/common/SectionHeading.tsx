interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  gradientWord,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  // Split title if gradientWord is provided
  let beforeGradient = title;
  let afterGradient = "";

  if (gradientWord && title.includes(gradientWord)) {
    const parts = title.split(gradientWord);
    beforeGradient = parts[0];
    afterGradient = parts.slice(1).join(gradientWord);
  }

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
        {gradientWord ? (
          <>
            {beforeGradient}
            <span className="text-gradient">{gradientWord}</span>
            {afterGradient}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
