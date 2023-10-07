"use client";
import { UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "../modeToggle";

const Nav = () => {
  return (
    <div className='flex justify-between items-center px-4 bg-white dark:bg-black w-full h-14'>
      <p className='text-4xl font-bold'>Free<span className='dark:text-slate-600 text-slate-300'>Write.</span></p>
      <div className="flex">
        <ModeToggle {...{ className: "mr-4" }} />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Nav;
