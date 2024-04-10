import Link from 'next/link'

export default function CTAButton({ children, active, linkto }) {
  return (
    <Link
      href={linkto}
      className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
        active ? "bg-purple-500 text-white " : "bg-primary text-white"
      } hover:shadow-none hover:scale-95 transition-all duration-200 `}
    >
      {children}
    </Link>
  );
}
