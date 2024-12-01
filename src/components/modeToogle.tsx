"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-transparent px-2 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-neutral-700 hover:bg-gray-50">
                    <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.0rem] w-[1.0rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white dark:bg-grey-back shadow-lg ring-1 ring-black/5 dark:ring-neutral-700 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="p-1">
                    <MenuItem>
                        <button
                            onClick={() => setTheme("light")}
                            className="block w-full text-left rounded-sm px-2 py-1 text-sm text-gray-700 dark:text-white data-[focus]:bg-black dark:data-[focus]:bg-white data-[focus]:bg-opacity-5 dark:data-[focus]:bg-opacity-20 data-[focus]:outline-none"
                        >
                        Light
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => setTheme("dark")}
                            className="block w-full text-left rounded-sm px-2 py-1 text-sm text-gray-700 dark:text-white data-[focus]:bg-black dark:data-[focus]:bg-white data-[focus]:bg-opacity-5 dark:data-[focus]:bg-opacity-20 data-[focus]:outline-none"
                        >
                        Dark
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => setTheme("system")}
                            className="block w-full text-left rounded-sm px-2 py-1 text-sm text-gray-700 dark:text-white data-[focus]:bg-black dark:data-[focus]:bg-white data-[focus]:bg-opacity-5 dark:data-[focus]:bg-opacity-20 data-[focus]:outline-none"
                        >
                        System
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}
