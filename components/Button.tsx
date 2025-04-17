// components/Button.tsx
import Link from 'next/link';

export default function Button({ children, href, className = '' }) {
    return (
        <Link
            href={href}
            className={`flex justify-center w-full md:w-3/5 mt-5 py-2 bg-[#FC004E] text-white text-center  rounded-md hover:opacity-90 transition-opacity ${className} shadow-[2px_2px_10px_0px_rgba(0,231,249,1)]`}
        >
            {children}
        </Link>
    );
}