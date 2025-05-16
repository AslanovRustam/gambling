"use client";
import { Button } from "@heroui/button";
import Arrow from "../../../public/icons/arrow.svg";

function DropDownCmp() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        className="text-[var(--colors-common-zinc-500)]"
        color="default"
        variant="light"
        endContent={<Arrow />}
      >
        Eng
      </Button>
    </div>
  );
}

export default DropDownCmp;
