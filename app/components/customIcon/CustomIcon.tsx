import { Suspense, useMemo } from "react";
import clsx from "clsx";
import { ICONS } from "@/app/utils/constants";

type Props = {
  name: keyof typeof ICONS;
  width?: number;
  color?: string;
  className?: string;
  rotate?: number;
};

function CustomIcon({
  name,
  width,
  color = "#FFFFFF",
  className = "",
  rotate = 0,
}: Props) {
  const SvgIcon = useMemo(
    () => ICONS[name] as React.FC<React.SVGProps<SVGSVGElement>>,
    [name]
  );

  if (!SvgIcon) return null;

  return (
    <Suspense fallback={null}>
      <div
        className={clsx(className)}
        style={{
          width: width,
          transform: `rotate(${rotate}deg)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgIcon fill={color} />
      </div>
    </Suspense>
  );
}

export default CustomIcon;
