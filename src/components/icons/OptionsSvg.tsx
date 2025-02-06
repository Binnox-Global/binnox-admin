import { IconProps } from "./types";

export const OptionsSvg = ({ size = 15, className, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_5450_1524)">
        <path
          d="M7.58379 2.81769C8.26012 2.81769 8.80839 2.26942 8.80839 1.5931C8.80839 0.91677 8.26012 0.3685 7.58379 0.3685C6.90746 0.3685 6.35919 0.91677 6.35919 1.5931C6.35919 2.26942 6.90746 2.81769 7.58379 2.81769Z"
          fill="currentColor"
        />
        <path
          d="M7.58379 8.94061C8.26012 8.94061 8.80839 8.39234 8.80839 7.71601C8.80839 7.03968 8.26012 6.49141 7.58379 6.49141C6.90746 6.49141 6.35919 7.03968 6.35919 7.71601C6.35919 8.39234 6.90746 8.94061 7.58379 8.94061Z"
          fill="currentColor"
        />
        <path
          d="M7.58379 15.0635C8.26012 15.0635 8.80839 14.5153 8.80839 13.8389C8.80839 13.1626 8.26012 12.6143 7.58379 12.6143C6.90746 12.6143 6.35919 13.1626 6.35919 13.8389C6.35919 14.5153 6.90746 15.0635 7.58379 15.0635Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_5450_1524">
          <rect width="14.695" height="14.695" fill="white" transform="translate(0.236328 0.3685)" />
        </clipPath>
      </defs>
    </svg>
  );
};