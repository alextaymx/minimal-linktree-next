import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: string;
  href?: string;
};

export function ContactRow({ label, value, href }: Props) {
  const inner = (
    <div className="flex items-center justify-between rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="ml-4 truncate text-sm text-zinc-900">{value}</span>
    </div>
  );

  return href ? (
    <a
      href={href}
      className={cn("block transition hover:bg-black/[0.05] rounded-xl")}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
