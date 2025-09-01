"use client";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/Dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
export default function Page1() {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <Link href={"/page2"}>go to page 2</Link>
      <Button intent={"primary"} size={"large"}>
        Click me
      </Button>
      <Dialog>
        <DialogTrigger>Open top dialog</DialogTrigger>
        <DialogContent position="top">
          <DialogTitle>title</DialogTitle>
          <p>Dialog positioned at the top</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
