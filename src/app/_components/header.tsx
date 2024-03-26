import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 text-center">
      <Link href="/" className="hover:underline decoration-indigo-500 hover:text-indigo-500 transition-colors duration-300">
        Mengqi's Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
