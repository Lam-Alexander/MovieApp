"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    console.log(pathname);
  const navItems = [
    { label: "Movie List", href: "/page" },
    { label: "About", href: "/about" },
  ];
  return (
    
    <div className="flex justify-center bg-gradient-to-r from-red-500 to-orange-500 py-3">

    <div className="absolute top-0 left-0">
        <img src="/Movie-Hub.png" alt="Logo" className=" rounded-full h-" />
    </div>

      <ul className="flex gap-5 p-10">
        {navItems.map((link, index) => (
            
          <li key={index}>
            <Link
              href={link.href}
              className={ 
                pathname === `${link.href}` ? "text-gray-700 bg-white hover:bg-gray-300 font-bold p-2 rounded-xl justify-center items-center"  : "text-white hover:bg-gray-300 hover:text-gray-700 font-bold p-2 rounded-xl"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
