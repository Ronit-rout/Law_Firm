"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas } from "@/data/practiceAreas";

type Status = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const next: Errors = {};
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message || message.length < 10) {
      next.message = "Please provide a brief description (at least 10 characters).";
    }
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    // NOTE: This is a frontend-only demo. No data is sent anywhere.
    // A future backend integration would replace this block with a real
    // API call (e.g. fetch("/api/contact", { method: "POST", ... })).
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-brass/40 bg-stone/60 px-6 py-8 md:px-10 md:py-10 flex flex-col items-center text-center"
      >
        <p className="font-display text-2xl text-navy text-center">Thank you.</p>
        <p className="mt-3 font-body text-sm text-slate-muted max-w-md text-center mx-auto">
          Your message has been recorded in this demo. In a live deployment,
          the firm would follow up directly using the details you provided.
          No information from this form is stored or transmitted anywhere.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-body text-sm text-navy underline underline-offset-4 focus-ring"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="font-body text-xs uppercase tracking-widest2 text-slate-muted"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink focus:outline-none focus:border-navy transition-colors"
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-red-800">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="font-body text-xs uppercase tracking-widest2 text-slate-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink focus:outline-none focus:border-navy transition-colors"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-800">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-body text-xs uppercase tracking-widest2 text-slate-muted"
          >
            Phone <span className="normal-case text-ink/40">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="practiceArea"
          className="font-body text-xs uppercase tracking-widest2 text-slate-muted"
        >
          Relevant practice area{" "}
          <span className="normal-case text-ink/40">(optional)</span>
        </label>
        <select
          id="practiceArea"
          name="practiceArea"
          className="mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink focus:outline-none focus:border-navy transition-colors"
          defaultValue=""
        >
          <option value="">Select a practice area</option>
          {practiceAreas.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-body text-xs uppercase tracking-widest2 text-slate-muted"
        >
          Brief description
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-3 font-body text-base text-ink focus:outline-none focus:border-navy transition-colors resize-none"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-800">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-navy focus-ring"
        />
        <label htmlFor="privacy" className="font-body text-xs text-slate-muted">
          I understand that submitting this form does not create an
          advocate-client relationship, and that this information is not
          treated as confidential unless the firm has formally accepted the
          engagement.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative inline-flex items-center gap-3 bg-navy text-parchment px-8 py-4 font-body text-sm uppercase tracking-widest2 disabled:opacity-60 focus-ring"
      >
        {status === "loading" ? "Sending…" : "Send message"}
        {status !== "loading" && (
          <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
            →
          </span>
        )}
      </button>
    </form>
  );
}
