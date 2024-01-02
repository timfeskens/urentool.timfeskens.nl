import Link from "next/link";
import { ReactNode, Suspense } from "react";
import { ClockIcon } from "@heroicons/react/24/solid";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-gray-900 h-screen w-screen">
      <div className="sticky top-0 z-40 backdrop-blur-lg">
        <div className="max-w-8xl mx-auto py-4 px-6">
          <div className="relative flex items-center justify-between tracking-wide text-neutral-200">
            <Link href="/" className="flex">
              <ClockIcon className="w-8 h-8 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-8xl bg-gray-900">
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      </main>
    </div>
  );
}
