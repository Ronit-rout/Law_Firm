type Props = {
  label: string;
  className?: string;
  center?: boolean;
};

// Signature element: sections and practice areas are referenced the way a
// firm would reference its own case files — a docket-style index in the
// mono utility face beside a hairline rule. Only used where the numbering
// reflects something real (a defined set of practice areas), never as
// decoration.
export default function MatterIndex({ label, className = "", center = false }: Props) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""} ${className}`}>
      {center && <span className="h-px flex-1 max-w-[64px] bg-brass/40" />}
      <span className="font-mono text-[11px] tracking-widest2 uppercase text-brass">
        {label}
      </span>
      <span className="h-px flex-1 max-w-[64px] bg-brass/40" />
    </div>
  );
}
