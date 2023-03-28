import React from "react";

export default function TickMark({
  className, // or any color of your choice
}) {
  return (
    <svg
      viewBox="0 0 10 8"
      className={className}
      fill="currentColor" // added color here
    >
      <path d="M3.57994 7.57998C3.37994 7.57998 3.18994 7.49998 3.04994 7.35998L0.219941 4.52998C-0.0700586 4.23998 -0.0700586 3.75998 0.219941 3.46998C0.509941 3.17998 0.989941 3.17998 1.27994 3.46998L3.57994 5.76998L8.71994 0.629976C9.00994 0.339976 9.48994 0.339976 9.77994 0.629976C10.0699 0.919976 10.0699 1.39998 9.77994 1.68998L4.10994 7.35998C3.96994 7.49998 3.77994 7.57998 3.57994 7.57998Z" />
    </svg>
 
  );
}
