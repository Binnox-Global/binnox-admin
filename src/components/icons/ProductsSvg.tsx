import { IconProps } from "./types";

export const ProductsSvg = ({ size = 17, className, ...props }: IconProps) => {
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
        d="M11.0319 0.546875L16.5319 3.29688V9.42969L15.5319 8.92969V4.41406L11.5319 6.41406V8.42969L10.5319 8.92969V6.41406L6.53192 4.41406V6.1875L5.53192 5.6875V3.29688L11.0319 0.546875ZM11.0319 5.54688L12.4147 4.85156L8.79755 2.78125L7.14911 3.60938L11.0319 5.54688Z"
        fill="currentColor"
      />
    </svg>
  );
};