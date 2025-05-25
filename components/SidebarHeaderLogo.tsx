import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuSubButton } from "./ui/sidebar";

const SidebarHeaderLogo = () => (
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuSubButton asChild>
          <Link href="/">
            <Image src={Logo} alt="logo" width={20} height={20} />
            <span>Nayem Dev</span>
          </Link>
        </SidebarMenuSubButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
);

export default SidebarHeaderLogo;
