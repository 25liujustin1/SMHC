import React from "react";

export default function MemberCard({
  imageUrl,
  name,
  bio,
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type="button"
      className={`inline-flex flex-col items-center gap-2 ${disabled ? "pointer-events-none opacity-60" : "cursor-pointer"} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={name ? `Open ${name}` : "Open member"}
    >
      <div
        className={`h-56 w-56 overflow-hidden rounded-lg bg-gray-100 ring-1 ring-black/10 aspect-square transition-all duration-300 ease-out ${disabled ? "" : "hover:-translate-y-2 hover:shadow-[0_14px_24px_-2px_color-mix(in_srgb,var(--color-royal)_45%,transparent)]"}`}
      >
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name ? `${name} profile photo` : "Member profile photo"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
            No photo
          </div>
        )}
      </div>

      <div className="max-w-56 text-center text-lg font-semibold leading-tight text-gray-900">
        {name}
      </div>
      <span className="sr-only">{bio}</span>
    </button>
  );
}
