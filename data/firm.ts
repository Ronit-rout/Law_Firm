// All values below are DEVELOPMENT PLACEHOLDERS.
// No real firm name, personnel, address, or contact details exist yet.
// Replace every bracketed value with confirmed, BCI-compliant content
// before this site is used outside of internal/client demo review.

export const firm = {
  name: "[Firm Name] & Associates",
  shortName: "[Firm Name]",
  tagline: "Advocates & Solicitors",
  descriptor:
    "A full-service Indian law firm advising on [core practice focus — e.g. corporate, commercial and dispute resolution] matters. Content on this page is placeholder demo copy pending confirmed firm information.",
  founded: "[Year]",
  registeredOffice: {
    line1: "[Office Address Line 1]",
    line2: "[Office Address Line 2]",
    city: "[City]",
    state: "[State]",
    pin: "[PIN Code]",
  },
  phone: "[+91 XXXXX XXXXX]",
  email: "[contact@firmname.example]",
  offices: [
    { city: "[City One]", note: "[Registered Office]" },
    { city: "[City Two]", note: "[Branch Office]" },
  ],
  disclaimer:
    "Under the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is intended solely to provide information about the firm to those who seek it out. By continuing past this notice, you acknowledge that you are seeking information of your own accord and that no advocate-client relationship is created through your use of this website.",
  privacyNote:
    "Information submitted through this site is not treated as privileged or confidential until an engagement has been formally accepted by the firm.",
};

export const socials: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "#" },
];
