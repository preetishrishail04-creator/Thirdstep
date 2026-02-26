import Link from "next/link";
import { Button } from "./components/design-system";

/**
 * 404 Not Found Page
 * 
 * - Never show a blank screen
 * - Clear messaging
 * - Navigation back to home
 */

export default function NotFoundPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-24 py-64">
      <div className="max-w-[720px]">
        <h1 className="font-serif text-[2.5rem] leading-[1.2] text-[#111111] mb-16">
          Page Not Found
        </h1>
        <p className="text-base text-[#6B6B6B] leading-relaxed mb-24">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
