import React from "react";

export default function Clock
({
  className, // or any color of your choice
}) {
  return (
    <svg
    viewBox="0 0 33 33"
      className={className}
      fill="currentColor" // added color here
    > 
   <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4998 2.91667C8.99797 2.91667 2.9165 8.99813 2.9165 16.5C2.9165 24.0019 8.99797 30.0833 16.4998 30.0833C24.0017 30.0833 30.0832 24.0019 30.0832 16.5C30.0832 8.99813 24.0017 2.91667 16.4998 2.91667ZM0.916504 16.5C0.916504 7.89356 7.8934 0.916668 16.4998 0.916668C25.1063 0.916668 32.0832 7.89356 32.0832 16.5C32.0832 25.1064 25.1063 32.0833 16.4998 32.0833C7.8934 32.0833 0.916504 25.1064 0.916504 16.5Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 6.75C17.0523 6.75 17.5 7.19772 17.5 7.75V15.882L22.7805 18.5222C23.2745 18.7692 23.4747 19.3699 23.2278 19.8639C22.9808 20.3579 22.3801 20.5581 21.8861 20.3111L16.0528 17.3944C15.714 17.225 15.5 16.8788 15.5 16.5V7.75C15.5 7.19772 15.9477 6.75 16.5 6.75Z" />
</svg>

  );
}