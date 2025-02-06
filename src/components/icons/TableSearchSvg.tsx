import { IconProps } from "./types";

export const TableSearchSvg = ({ size = 17, className, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.33101 14.5594C11.8288 14.5594 14.6643 11.7239 14.6643 8.22605C14.6643 4.72825 11.8288 1.89272 8.33101 1.89272C4.83321 1.89272 1.99768 4.72825 1.99768 8.22605C1.99768 11.7239 4.83321 14.5594 8.33101 14.5594Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.331 15.226L13.9977 13.8927"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};