import Image from "next/image";
import { notFound } from "next/navigation";
import { getUser, getAllUsernames } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { SocialLink } from "@/components/social-link";
import { ContactRow } from "@/components/contact-row";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateStaticParams() {
  return getAllUsernames().map((username) => ({ username }));
}

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  const user = getUser(username);
  if (!user) return { title: "Not Found" };

  return {
    title: `${user.name} - ${user.role}`,
    description: `Contact ${user.name}, ${user.role} at ${user.company}. ${user.bio}`,
    openGraph: {
      title: `${user.name} - ${user.role} | GYLDAN`,
      description: `Contact ${user.name}, ${user.role} at ${user.company}. Access digital business card and contact information.`,
    },
  };
}

export default async function UserPage({ params }: Props) {
  const { username } = await params;
  const user = getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,.03),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,.02),transparent_55%)] bg-white text-zinc-900">
      <div className="mx-auto flex w-full max-w-md flex-col px-5 pb-14 pt-10">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/10 shadow-soft">
            <Image
              src={user.avatarUrl}
              alt={user.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="mt-5 text-2xl font-semibold tracking-tight">
            {user.name}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            {user.role} · {user.company}
          </p>

          {user.bio ? (
            <p className="mt-4 max-w-sm text-pretty text-sm leading-6 text-zinc-600">
              {user.bio}
            </p>
          ) : null}
        </header>

        {/* Contact */}
        <section className="mt-8">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Contact
          </h2>
          <div className="space-y-2">
            {user.contact.email ? (
              <ContactRow
                label="Email"
                value={user.contact.email}
                href={`mailto:${user.contact.email}`}
              />
            ) : null}
            {user.contact.phone ? (
              <ContactRow
                label="Phone"
                value={user.contact.phone}
                href={`tel:${user.contact.phone}`}
              />
            ) : null}
            {user.contact.location ? (
              <ContactRow label="Location" value={user.contact.location} />
            ) : null}
            {user.contact.website ? (
              <ContactRow
                label="Website"
                value={user.contact.website.replace(/^https?:\/\//, "")}
                href={user.contact.website}
              />
            ) : null}
          </div>
        </section>

        {/* Links */}
        <section className="mt-8">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Social
          </h2>

          <div className="grid gap-2">
            {user.social.map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
          </div>

{user.vcfUrl ? (
            <a
              href={user.vcfUrl}
              download
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 font-medium text-white transition hover:bg-zinc-800 active:scale-[0.99]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
              + Add Contact
            </a>
          ) : null}
        </section>
      </div>
    </main>
  );
}
