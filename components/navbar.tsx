"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 p-4 bg-gradient-to-b from-blue-500/30 to-transparent">
      <div className="max-w-[80vw] mx-auto flex items-center justify-between rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg text-foreground">
            <Link
              href="/"
              className="text-foreground hover:text-accent transition-colors"
            >
              Soar AI Labs
            </Link>
          </span>
        </div>

        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="!rounded-full">
                <Link
                  href="/products"
                  className="text-foreground hover:text-accent transition-all px-4 py-2 rounded-full"
                >
                  Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="!rounded-full">
                <Link
                  href="/pricing"
                  className="text-foreground hover:text-accent transition-all px-4 py-2 rounded-full"
                >
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="!rounded-full">
                <Link
                  href="/docs"
                  className="text-foreground hover:text-accent transition-all px-4 py-2 rounded-full"
                >
                  Docs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="!rounded-full">
                <Link
                  href="/blog"
                  className="text-foreground hover:text-accent transition-all px-4 py-2 rounded-full"
                >
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button
            size="sm"
            className="rounded-md hard-shadow hard-shadow-hover"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
