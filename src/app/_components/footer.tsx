import Link from "next/link";

export function Footer() {
  return (
      <footer className="flex items-center justify-between gap-4 text-sm">
        <p className="text-gray-500">
            © 2015 - 2024 Mengqi | All rights reserved.</p>
        <div className="grid gap-2 md:flex md:gap-4">
          <Link className="text-gray-500 hover:underline" href="#">
            Terms
          </Link>
          <Link className="text-gray-500 hover:underline" href="#">
            Privacy
          </Link>
          <Link className="text-gray-500 hover:underline" href="#">
            Policy
          </Link>
        </div>
      </footer>
  );
}

export default Footer;
