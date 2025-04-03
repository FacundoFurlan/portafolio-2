"use client"
import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { useState } from "react";

export default function NavBarPerso(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems: string[] = [
      "This is me",
      "Proyects",
      "CV"
    ];
    return(
        <div className="block xl:hidden bg-zinc-1000">
            <Navbar onMenuOpenChange={setIsMenuOpen} disableAnimation isBordered>
                <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="xl:hidden"
                />
                </NavbarContent>

                <NavbarContent className="hidden xl:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/">
                    This is me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyects">
                    Proyects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/cv">
                    CV
                    </Link>
                </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="justify-between">
                    <div>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`} className="my-2">
                            <Link
                                color = "foreground"
                                className ="w-full"
                                href ={item === "This is me" ? "/" : item === "Proyects" ? "/proyects" : "/cv"}
                                size="lg"
                            >
                                {item}
                            </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                    <NavbarMenuItem>
                        <div className="flex flex-col self-end m-6">
                            <div className="flex flex-col ml-3 mr-2 justify-evenly rounded bg-zinc-800 p-1">
                                <div className="flex flex-row justify-evenly py-4 border-zinc-700">
                                    <a href="https://www.linkedin.com/in/facundo-furlan/" target="_blanc"><img className="w-8" src="/linkedin.svg" alt="" /></a>
                                    <a href="https://github.com/FacundoFurlan" target="_blanc"><img className="w-8" src="/github.svg" alt="" /></a>
                                    <a href="https://t.me/FurlanFacundo" target="_blanc"><img className="w-8" src="/telegram.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </div>
    )
}