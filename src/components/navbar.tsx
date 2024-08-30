import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-secondary py-2">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img src="/logo.png" alt="logo" height="64px" width="64px" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
