"use client";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Button } from "./ui/Button";

export default function Page2() {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <Link href={"/page1"}>go to page 1</Link>
      <Button intent={"primary"} size={"large"}>
        Click me
      </Button>
      <Dialog>
        <DialogTrigger>Open center dialog</DialogTrigger>
        <DialogContent position="center">
          <DialogTitle>center dialog</DialogTitle>
          <p>Dialog positioned at the top</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
