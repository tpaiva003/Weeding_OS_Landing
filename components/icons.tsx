import type { SVGProps } from "react";

/**
 * Thin, consistent line icons for the feature modules.
 * All share a 24-grid, 1.5 stroke, currentColor.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconGuests = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6.5a3 3 0 0 1 0 5.4" />
    <path d="M17.5 13.5A5.5 5.5 0 0 1 21 19" />
  </Base>
);

export const IconSeating = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="5.5" />
    <circle cx="12" cy="4.4" r="1.3" />
    <circle cx="12" cy="19.6" r="1.3" />
    <circle cx="4.4" cy="12" r="1.3" />
    <circle cx="19.6" cy="12" r="1.3" />
  </Base>
);

export const IconSuppliers = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 7.5h11v7H3z" />
    <path d="M14 10h3.5l2.5 2.5v2H14z" />
    <circle cx="7" cy="16.5" r="1.6" />
    <circle cx="16.5" cy="16.5" r="1.6" />
  </Base>
);

export const IconBudget = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="M8 15l3.5-4 3 2.5L20 7" />
  </Base>
);

export const IconCatering = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 3v6a2 2 0 0 0 4 0V3" />
    <path d="M8 9v12" />
    <path d="M16 3c-1.5 1-2 3-2 5s.5 3 2 3v10" />
  </Base>
);

export const IconInvite = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </Base>
);

export const IconTranslate = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 6h8" />
    <path d="M7 4v2c0 3-1.8 5.5-4 6.5" />
    <path d="M5 9c.7 1.8 2.4 3.2 4.5 3.8" />
    <path d="M12.5 20l3.5-9 3.5 9" />
    <path d="M13.7 17h4.6" />
  </Base>
);

export const IconPhotos = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M8 6l1.2-2h5.6L16 6" />
    <circle cx="12" cy="12.5" r="3" />
  </Base>
);

export const IconDay = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);

export const IconSpark = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8.5 13 11l2.5 1-2.5 1-1 2.5-1-2.5L8.5 12l2.5-1z" />
  </Base>
);

export const IconSound = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 9v6h3.5L13 19V5L7.5 9H4z" />
    <path d="M16.5 9a4 4 0 0 1 0 6" />
    <path d="M18.8 6.6a7 7 0 0 1 0 10.8" />
  </Base>
);

export const IconArrow = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12.5l4 4L19 7" />
  </Base>
);
