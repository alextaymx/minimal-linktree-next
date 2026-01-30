import Link from "next/link";
import { getAllUsernames, getUser } from "@/lib/profile";

export default function Page() {
  const usernames = getAllUsernames();

  return (
    <main className="min-h-dvh bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,.03),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,.02),transparent_55%)] bg-white text-zinc-900">
      <div className="mx-auto flex w-full max-w-md flex-col px-5 pb-14 pt-10">
        <header className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            User Contacts
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Select a contact to view
          </p>
        </header>

        <section className="mt-8">
          <div className="grid gap-2">
            {usernames.map((username) => {
              const user = getUser(username);
              return (
                <Link
                  key={username}
                  href={`/${username}`}
                  className="group flex items-center justify-between rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 transition hover:bg-black/[0.05] active:scale-[0.99]"
                >
                  <div className="min-w-0">
                    <div className="font-medium tracking-tight">{user?.name || username}</div>
                    <div className="text-xs text-zinc-500">{user?.role}</div>
                  </div>
                  <span className="text-sm text-zinc-400">/{username}</span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
