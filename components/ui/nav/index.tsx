import { ModeToggle } from "../modeToggle";

const Nav = () => {
  return (
    <div className="flex items-center justify-end px-2 bg-white dark:bg-black w-full h-14">
      <ModeToggle />
    </div>
  );
};

export default Nav;
