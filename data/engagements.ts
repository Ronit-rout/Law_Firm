// DISABLED BY DEFAULT — DO NOT RENDER ON ANY PAGE
//
// This file scaffolds the shape for future "Notable Engagements" entries
// naming specific client companies. Per Roadmap §4 (compliance-flagged):
//
//   1. Naming specific clients functions as case-result/client marketing,
//      which BCI Rule 36 flags as high-risk.
//   2. A client's identity as your client is confidential unless they
//      have explicitly consented to being named.
//   3. "Recent tie-ups" (prospective/unconfirmed work) must NEVER be
//      published — confidentiality risk + solicitation risk.
//
// Only enable per-entry when BOTH conditions are met:
//   (a) consentConfirmed === true (client has consented in writing)
//   (b) Firm's compliance counsel has cleared the specific wording
//
// Until then, this file exists only as a schema reference.

export type Engagement = {
  clientName: string;
  sector: string;
  summary: string;
  consentConfirmed: boolean;
};

// Placeholder — no entries should be added without the conditions above.
export const engagements: Engagement[] = [];
