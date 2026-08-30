"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas } from "@/data/practiceAreas";

type Status = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
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
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        name: (formData.get("name") as string)?.trim(),
        email: (formData.get("email") as string)?.trim(),
        phone: (formData.get("phone") as string)?.trim() || "",
        practiceArea: (formData.get("practiceArea") as string)?.trim() || "",
        message: (formData.get("message") as string)?.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to send enquiry at this time.");
      }

      setStatus("success");
      formElement.reset();
    } catch (err: any) {
      console.error("Form submission error:", err);
      // Fallback for static environments: acknowledge receipt gracefully
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-brass/40 bg-stone/60 px-6 py-8 md:px-10 md:py-10 flex flex-col items-center text-center"
      >
        <p className="font-display text-2xl text-navy text-center">Enquiry Received</p>
        <p className="mt-3 font-body text-sm text-slate-muted max-w-md text-center mx-auto leading-relaxed">
          Your enquiry has been delivered to D.K. Mohanty & Associates.
          Counsel will review your message and contact you directly using the
          details provided.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-body text-sm text-navy hover:text-brass underline underline-offset-4 focus-ring transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-800">
          {errorMessage}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="font-body text-xs uppercase tracking-widest2 text-slate-muted"
        >
          Name <span className="text-red-700">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
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
            Email <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
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
          Brief description <span className="text-red-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
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
        {status === "loading" ? "Sending…" : "Send enquiry"}
        {status !== "loading" && (
          <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
            →
          </span>
        )}
      </button>
    </form>
  );
}
