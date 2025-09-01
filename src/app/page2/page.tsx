"use client";
import { Button } from "@/components/ui/button";

import "./styles.css";

export default function Page2() {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <Button intent={"primary"} size={"small"}>
        Click me
      </Button>
    </div>
  );
}
