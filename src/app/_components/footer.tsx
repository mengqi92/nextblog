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
        <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
        <span id="busuanzi_container_site_uv">
          本站访客数<span id="busuanzi_value_site_uv"></span>人次
        </span>
      </div>
    </footer>
  );
}

export default Footer;
