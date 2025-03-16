import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  center?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  className,
  center = true
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-16",
      center && "text-center",
      className
    )}>
      <span className="inline-block px-4 py-1.5 bg-blue-600/10 rounded-full text-blue-500 text-sm font-medium mb-4">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
