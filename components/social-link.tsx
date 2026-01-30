import { ArrowUpRight } from "lucide-react";

type Props = {
  label: string;
  href: string;
  subtitle?: string;
};

export function SocialLink({ label, href, subtitle }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 transition hover:bg-black/[0.05] active:scale-[0.99]"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium tracking-tight">{label}</span>
          {subtitle ? (
            <span className="truncate text-xs text-zinc-500">{subtitle}</span>
          ) : null}
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600" />
    </a>
  );
}
