"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  hrefLink: string;
  label: string;
}
export default function BackButton({ hrefLink, label }: BackButtonProps) {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link href={hrefLink}>{label}</Link>
    </Button>
  );
}
