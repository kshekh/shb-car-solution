import React from "react";

export default function Angle({
  className, // or any color of your choice
}) {
  return (
    <svg
    viewBox="0 0 36 53"
      className={className}
      fill="currentColor" // added color here
    >  
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.1822 0.553631C31.4754 1.38809 33.1163 2.97476 34.1545 5.19931C34.5403 6.02574 34.1306 6.78397 33.2336 6.89229C33.0458 6.90802 32.8572 6.9127 32.6688 6.90633H4.03838C3.85065 6.91371 3.66265 6.90902 3.47552 6.89229C2.58051 6.77996 2.16681 6.00969 2.5646 5.18727C3.96877 2.28673 6.24607 0.559649 9.42833 0.080238C9.49186 0.0615356 9.55271 0.0345613 9.60932 0H27.064C27.2924 0.0590403 27.5233 0.111785 27.7542 0.164547C28.2373 0.274912 28.7207 0.38535 29.1822 0.553631ZM10.751 2.22455C8.66857 2.22455 6.91833 2.95269 5.48631 4.63163L31.193 4.6216C31.1536 4.55149 31.1091 4.48444 31.0598 4.42101C31.0018 4.36426 30.9456 4.30603 30.8896 4.24791L30.8895 4.2478L30.8894 4.24777C30.8148 4.17036 30.7403 4.09313 30.662 4.01983C29.3473 2.7842 27.782 2.22455 25.992 2.22455H10.751ZM33.919 50.5943V38.2153C35.6248 37.5368 35.9088 37.1226 35.9109 35.2711V34.0368C35.8794 32.5996 35.0506 31.6823 33.5972 31.7732C32.4803 31.845 31.9881 31.4012 31.5654 30.4353C31.0042 29.152 30.3704 27.8994 29.7369 26.6475C29.4752 26.1304 29.2136 25.6134 28.9572 25.0944C28.0212 23.1922 26.5468 22.239 24.3908 22.2601C20.1652 22.3024 15.9375 22.2918 11.7118 22.2601C9.64422 22.2474 8.20131 23.1922 7.29477 25.0077C6.27815 27.0198 5.28537 29.0432 4.31642 31.0778C4.07664 31.583 3.78638 31.7584 3.22688 31.7605C0.858507 31.7732 0.303223 32.365 0.303223 34.7596V35.1718C0.303223 37.1352 0.568245 37.5347 2.33086 38.2322V52.8833C3.59287 52.8833 4.82491 52.8801 6.05695 52.8769C7.28899 52.8737 8.52102 52.8706 9.78304 52.8706V48.6625H26.4143V49.8757V52.8706H33.9211L33.919 50.5943ZM33.776 35.939H31.5149V50.6049H28.6186V46.5891H7.63551V50.6049H4.69082V36.0003H2.47599V33.9142C2.6834 33.9142 2.89535 33.9096 3.10983 33.905H3.11002H3.1102H3.11038H3.11057H3.11075H3.11094H3.11112C3.54876 33.8955 3.9969 33.8858 4.43841 33.9142C5.09676 33.9565 5.40175 33.7028 5.67519 33.1258C6.26641 31.8831 6.87891 30.6502 7.49144 29.4172L7.49146 29.4172L7.49147 29.4171L7.49149 29.4171L7.4915 29.4171L7.49152 29.417L7.49153 29.417L7.49162 29.4168C8.01872 28.3558 8.54585 27.2947 9.05948 26.2272C9.65894 24.9781 10.5823 24.4011 11.9726 24.4117C16.063 24.4441 20.1533 24.4441 24.2436 24.4117C25.6297 24.4117 26.5573 24.9781 27.1567 26.2293C27.6285 27.2146 28.1141 28.1929 28.5995 29.1711L28.5997 29.1713L28.5997 29.1714L28.5998 29.1715L28.5998 29.1716L28.5999 29.1717L28.5999 29.1718L28.6 29.172L28.6 29.1721C29.2225 30.4263 29.8448 31.6803 30.438 32.9483C30.7745 33.6669 31.1678 34.022 31.9839 33.9142C32.5805 33.8737 33.1789 33.8695 33.776 33.9015V35.939ZM28.3178 34.0622C27.9699 33.255 27.6141 32.4514 27.2584 31.6478C26.6744 30.3286 26.0904 29.0096 25.5414 27.675C25.1901 26.8296 24.6832 26.4724 23.7662 26.4809C19.9801 26.5133 16.1941 26.5133 12.408 26.4809C11.5436 26.4809 11.0325 26.7852 10.6917 27.6053C10.1087 29.0145 9.4911 30.4091 8.87364 31.8034L8.87362 31.8035L8.8736 31.8035L8.87358 31.8036L8.87356 31.8036L8.87354 31.8037L8.87352 31.8037L8.87345 31.8039L8.8733 31.8042C8.55089 32.5323 8.22851 33.2603 7.91108 33.9903C7.31583 35.3641 7.73018 36.0087 9.21726 36.0109H18.1123H27.0074C28.4461 36.0087 28.8794 35.3662 28.3178 34.0622ZM10.8637 32.6063L10.8639 32.6058C11.3947 31.3759 11.9075 30.1878 12.4459 29.0108C12.516 28.905 12.6093 28.8168 12.7187 28.753C12.8282 28.6892 12.9507 28.6516 13.0769 28.643C16.417 28.6191 19.7579 28.6191 23.0994 28.643C23.2386 28.6544 23.3734 28.6974 23.4937 28.7688C23.6139 28.8402 23.7165 28.9381 23.7935 29.0552C24.3238 30.201 24.824 31.3601 25.3497 32.5784L25.3499 32.5789L25.3504 32.5799C25.5188 32.9702 25.6898 33.3666 25.8653 33.7705L10.3594 33.7726C10.5301 33.3791 10.6978 32.9907 10.8637 32.6063ZM8.53634 38.3246C8.92287 38.1678 9.33676 38.0904 9.75356 38.0969C10.5787 38.1034 11.3685 38.4346 11.9535 39.0193C12.5386 39.604 12.8724 40.3958 12.8834 41.2249C12.8981 42.9432 11.3984 44.4565 9.69888 44.4375C8.87433 44.4106 8.09152 44.0667 7.5119 43.4768C6.93228 42.8869 6.60008 42.096 6.58381 41.2672C6.57926 40.8483 6.65826 40.4328 6.81613 40.0451C6.974 39.6575 7.20755 39.3055 7.503 39.01C7.79844 38.7145 8.1498 38.4814 8.53634 38.3246ZM9.04869 42.2966C9.25173 42.433 9.49044 42.5057 9.73463 42.5057C10.0621 42.5057 10.3761 42.375 10.6077 42.1423C10.8392 41.9097 10.9693 41.5941 10.9693 41.2651C10.9693 41.0197 10.8969 40.7798 10.7612 40.5758C10.6256 40.3718 10.4327 40.2128 10.2071 40.1189C9.98151 40.0249 9.73326 40.0004 9.49376 40.0483C9.25426 40.0961 9.03426 40.2143 8.86159 40.3878C8.68892 40.5613 8.57133 40.7824 8.52369 41.023C8.47605 41.2637 8.5005 41.5131 8.59395 41.7398C8.6874 41.9665 8.84565 42.1603 9.04869 42.2966ZM26.4396 38.0969C25.6155 38.1085 24.8287 38.4436 24.2474 39.0305C23.666 39.6174 23.3363 40.4096 23.3287 41.2377C23.3287 42.9581 24.841 44.465 26.5321 44.4333C27.3567 44.4036 28.1383 44.0562 28.7151 43.4633C29.2918 42.8704 29.6195 42.0773 29.6303 41.2482C29.6327 40.8291 29.5514 40.4137 29.3912 40.0267C29.231 39.6397 28.9951 39.2889 28.6976 38.9951C28.4001 38.7012 28.047 38.4704 27.6591 38.3161C27.2713 38.1618 26.8566 38.0873 26.4396 38.0969ZM26.4795 42.5058C26.2353 42.5058 25.9966 42.433 25.7936 42.2967C25.5905 42.1604 25.4323 41.9666 25.3388 41.7399C25.2454 41.5132 25.2209 41.2637 25.2686 41.0231C25.3162 40.7824 25.4338 40.5614 25.6065 40.3878C25.7791 40.2143 25.9991 40.0962 26.2386 40.0483C26.4781 40.0004 26.7264 40.025 26.952 40.1189C27.1776 40.2128 27.3704 40.3718 27.5061 40.5759C27.6418 40.7799 27.7142 41.0197 27.7142 41.2651C27.7142 41.5942 27.5841 41.9097 27.3526 42.1424C27.121 42.3751 26.807 42.5058 26.4795 42.5058ZM25.2282 12.0013C24.6032 10.6812 23.9054 9.39737 23.1379 8.156C22.7003 7.41582 21.7138 7.4419 21.2723 8.19612L21.2049 8.31135L21.2049 8.31145C20.5171 9.48876 19.8272 10.6695 19.2456 11.901C18.2213 14.0714 19.8621 16.5708 22.2429 16.5547C24.5579 16.5387 26.1809 14.1336 25.2282 12.0013ZM22.8236 14.1175C22.634 14.2502 22.4068 14.3172 22.1762 14.3085C21.9456 14.2999 21.724 14.216 21.5448 14.0694C21.3619 13.9242 21.2337 13.7204 21.1812 13.4917C21.1288 13.263 21.1553 13.0231 21.2564 12.8117C21.4727 12.3533 21.7186 11.9111 21.9932 11.4173L21.9933 11.4171L21.9933 11.4171C22.0671 11.2844 22.143 11.1479 22.221 11.0064C22.3373 11.2256 22.452 11.4347 22.5635 11.6377L22.5636 11.638C22.8008 12.0703 23.0233 12.4757 23.2154 12.896C23.307 13.113 23.3178 13.3561 23.2458 13.5806C23.1739 13.805 23.0239 13.9957 22.8236 14.1175ZM30.841 8.13793C31.5987 9.42171 32.3048 10.7436 32.991 12.0715C33.1108 12.3049 33.1553 12.5787 33.1997 12.8523C33.2194 12.9737 33.2392 13.0951 33.2654 13.2129C33.2508 13.8757 33.0471 14.5202 32.6789 15.0695C32.3107 15.6187 31.7935 16.0493 31.189 16.31C30.5827 16.5569 29.9174 16.6172 29.2771 16.4833C28.6368 16.3495 28.0502 16.0274 27.5911 15.5578C27.1249 15.0938 26.8134 14.495 26.6997 13.8445C26.586 13.1939 26.6758 12.5238 26.9566 11.9271C27.5811 10.6473 28.2872 9.40366 29.0092 8.17604C29.0966 8.00947 29.2266 7.8695 29.3856 7.77062C29.5447 7.67174 29.7271 7.61756 29.9139 7.61367C30.1008 7.60978 30.2852 7.65634 30.4482 7.74851C30.6112 7.84069 30.7468 7.97514 30.841 8.13793ZM29.944 14.3047C30.1829 14.3047 30.4152 14.2248 30.6043 14.0774L30.6003 14.0814C30.8008 13.9289 30.9394 13.708 30.9903 13.46C31.0412 13.2119 31.0008 12.9537 30.8768 12.7335C30.6963 12.364 30.4951 12.0036 30.2769 11.6127C30.1705 11.422 30.06 11.2241 29.9459 11.0144C29.8376 11.212 29.733 11.399 29.6322 11.5791L29.6322 11.5791L29.6321 11.5792C29.4056 11.9841 29.1984 12.3545 29.0112 12.7335C28.8903 12.9535 28.8513 13.2098 28.9013 13.4562C28.9512 13.7026 29.0868 13.9229 29.2836 14.0774C29.4727 14.2248 29.705 14.3047 29.944 14.3047ZM9.73263 11.8709C9.10214 10.6312 8.43188 9.40965 7.73178 8.21012C7.26637 7.40775 6.27589 7.4238 5.8085 8.22817C5.12034 9.41566 4.44212 10.6132 3.81959 11.8388C3.52465 12.4378 3.42172 13.1144 3.52506 13.775C3.62841 14.4356 3.93291 15.0474 4.39637 15.5256C4.84777 16.0011 5.42871 16.3311 6.06586 16.4739C6.70301 16.6167 7.36784 16.5659 7.97642 16.328C9.19761 15.8546 10.015 14.637 10.1046 13.2449C10.0752 13.1207 10.05 12.9939 10.0248 12.867C9.95597 12.5208 9.8869 12.1733 9.73263 11.8709ZM7.46129 14.0654C7.26721 14.2206 7.02679 14.3051 6.77909 14.3051C6.53139 14.3051 6.29097 14.2206 6.09689 14.0654C5.68718 13.7344 5.58773 13.2189 5.86618 12.6733C6.0531 12.307 6.24809 11.9606 6.45716 11.5892C6.55953 11.4074 6.66528 11.2195 6.77511 11.0204C6.8876 11.2254 6.99685 11.42 7.10272 11.6085L7.10273 11.6085C7.30759 11.9733 7.49975 12.3155 7.67808 12.6672C7.94857 13.2008 7.86702 13.7243 7.46129 14.0654ZM16.1496 9.42547C16.5656 10.1604 16.9824 10.8969 17.364 11.6502C18.5116 13.9049 17.0379 16.4865 14.5935 16.5527C12.7219 16.6048 11.2203 15.1044 11.1308 13.1767C11.1876 13.0072 11.2387 12.8346 11.2899 12.6619C11.4033 12.2787 11.5168 11.8951 11.6937 11.5439C12.1681 10.6113 12.6924 9.68778 13.2047 8.78531C13.2808 8.65127 13.3566 8.5177 13.432 8.38463C14.0147 7.3556 14.9893 7.36362 15.574 8.40067C15.7633 8.74297 15.9563 9.08406 16.1496 9.42547ZM14.5325 14.3079C14.7628 14.3018 14.9851 14.2209 15.1663 14.0774C15.3521 13.9382 15.4839 13.7381 15.5391 13.5114C15.5942 13.2848 15.5693 13.0458 15.4686 12.8357C15.2756 12.4259 15.0566 12.0273 14.8262 11.6079C14.7194 11.4136 14.6102 11.2148 14.5 11.0083C14.3903 11.2123 14.2817 11.4079 14.1759 11.5985C13.9384 12.0265 13.7147 12.4294 13.5235 12.8458C13.417 13.0646 13.3953 13.3156 13.4626 13.5496C13.5299 13.7837 13.6814 13.9841 13.8874 14.1115C14.0759 14.2452 14.3021 14.3141 14.5325 14.3079Z" />
</svg>


  );
}
