"use client";

import { useEffect, useState } from "react";
import { firm } from "@/data/firm";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasAccepted = localStorage.getItem("dkm_disclaimer_accepted");
    if (!hasAccepted) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("dkm_disclaimer_accepted", "true");
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md transition-opacity duration-300"
    >
      <div className="relative w-full max-w-2xl bg-parchment border border-brass/50 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        {/* Monogram Header */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="flex flex-col items-center">
              <span className="font-display text-xl font-bold tracking-wider text-navy leading-none">
                DKM
              </span>
              <span className="mt-0.5 h-[2px] w-full bg-brass" />
            </span>
            <span className="font-display text-base text-navy font-semibold">
              {firm.name}
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-widest2 uppercase text-brass bg-stone/80 px-2 py-1">
            BCI Rule 36
          </span>
        </div>

        <h2
          id="disclaimer-title"
          className="font-display text-2xl sm:text-3xl text-navy leading-tight"
        >
          Compliance & Entry Disclaimer
        </h2>

        <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-slate-muted">
          Bar Council of India Regulations
        </p>

        <div className="mt-6 space-y-4 font-body text-xs sm:text-sm text-ink/80 leading-relaxed">
          <p>
            As per the rules of the <strong>Bar Council of India</strong>, advocates and law firms are prohibited from soliciting work or advertising in any form or manner. By proceeding past this notice, you acknowledge and confirm that:
          </p>

          <ul className="space-y-2.5 pl-5 list-disc text-slate-muted">
            <li>
              You are seeking information regarding <strong>{firm.name}</strong> of your own accord and on your own initiative.
            </li>
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from the firm or any of its members.
            </li>
            <li>
              The information provided on this website is made available solely for informational and educational purposes upon your request.
            </li>
            <li>
              The contents of this website do not constitute legal advice or opinion, and no advocate-client relationship is created through your use of this site or any transmission of messages.
            </li>
          </ul>

          <p className="text-xs text-slate-muted pt-2 border-t border-ink/10">
            {firm.privacyNote}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-end gap-4">
          <button
            onClick={handleDecline}
            type="button"
            className="w-full sm:w-auto px-6 py-3 font-body text-xs uppercase tracking-widest2 text-slate-muted hover:text-navy border border-ink/20 hover:border-ink/40 transition-colors focus-ring text-center"
          >
            Decline & Exit
          </button>
          <button
            onClick={handleAgree}
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 bg-navy text-parchment font-body text-xs uppercase tracking-widest2 hover:bg-brass transition-colors shadow-md focus-ring flex items-center justify-center gap-2 group font-semibold"
          >
            I Agree & Continue
            <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
