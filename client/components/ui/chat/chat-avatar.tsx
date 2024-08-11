import { User2 } from "lucide-react";
import Image from "next/image";

export default function ChatAvatar({ role }: { role: string }) {
  if (role === "user") {
    return (
      <div className="flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        <User2 className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-md bg-black text-white shadow">
      <Image
        className="rounded-md"
        src="/Moti.png"
        alt="MNNIT Logo"
        width={55}
        height={55}
        priority
      />
    </div>
  );
}
