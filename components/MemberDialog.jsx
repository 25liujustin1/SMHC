import React, { useEffect } from "react";

export default function MemberDialog({ open, member, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open || !member) return null;

  const { imageUrl, name, bio, email } = member;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="w-full max-w-md max-h-[90vh] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/10 flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={name ? `${name} details` : "Member details"}
      >
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="h-64 w-64 overflow-hidden rounded-lg bg-gray-100 ring-1 ring-black/10 aspect-square">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={name ? `${name} profile photo` : "Member profile photo"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                No photo
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold leading-tight text-gray-900">
              {name}
            </div>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy/10 px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/20"
                aria-label={`Email ${name || "member"}`}
              >
                <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            ) : null}
          </div>
        </div>

        {bio ? (
          <div className="mt-2 min-h-0 flex-1 overflow-y-auto rounded-md text-left whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
            {bio}
          </div>
        ) : null}
      </div>
    </div>
  );
}

