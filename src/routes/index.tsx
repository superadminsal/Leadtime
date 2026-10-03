import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ClipboardList, Truck } from "lucide-react";
import { useEffect } from "react";
import { APP_NAME, APP_TAGLINE } from "@/lib/leadtime/constants";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const pintu = new URLSearchParams(window.location.search).get("pintu");
    if (pintu === "supir") void navigate({ to: "/supir" });
    if (pintu === "petugas") void navigate({ to: "/admin" });
  }, [navigate]);

  return (
    <main data-page="home" className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-8">
      <header className="mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Divisi Transport · DC
        </p>
        <h1 className="mt-1 font-display text-5xl leading-none text-ink">{APP_NAME}</h1>
        <p className="mt-2 text-muted">{APP_TAGLINE}</p>
      </header>

      <section className="grid gap-3">
        <Link
          to="/supir"
          className="rounded-xl bg-surface p-5 shadow-ticket transition-transform duration-150 hover:-translate-y-0.5"
        >
          <div className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-fg">
            <Truck className="size-5" />
          </div>
          <h2 className="mt-5 font-display text-3xl leading-none">Deliveryman</h2>
        </Link>

        <Link
          to="/admin"
          className="rounded-xl bg-ink p-5 text-accent-fg shadow-ticket transition-transform duration-150 hover:-translate-y-0.5"
        >
          <div className="flex size-11 items-center justify-center rounded-md bg-surface/10">
            <ClipboardList className="size-5" />
          </div>
          <h2 className="mt-5 font-display text-3xl leading-none">Petugas pos</h2>
          </Link>
      </section>
    </main>
  );
}
