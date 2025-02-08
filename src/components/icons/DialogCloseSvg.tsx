import { IconProps } from "./types";

export const DialogCloseSvg = ({
  size = 34,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <ellipse cx="17.6719" cy="18.2871" rx="17" ry="17.4096" fill="white" />
      <path
        d="M34.1719 18.2871C34.1719 27.6373 26.7734 35.1967 17.6719 35.1967C8.57033 35.1967 1.17188 27.6373 1.17188 18.2871C1.17188 8.93685 8.57033 1.37744 17.6719 1.37744C26.7734 1.37744 34.1719 8.93685 34.1719 18.2871Z"
        stroke="black"
        stroke-opacity="0.2"
      />
      <path
        d="M22.3942 13.4512L12.9497 23.1232"
        stroke="#1A1A1A"
        stroke-width="1.13333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9497 13.4512L22.3942 23.1232"
        stroke="#1A1A1A"
        stroke-width="1.13333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Dialog2CloseSvg = ({
  size = 32,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M24 8L8 24"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8L24 24"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
