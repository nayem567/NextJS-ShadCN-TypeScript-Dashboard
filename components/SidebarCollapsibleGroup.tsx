import React from "react";
import Link from "next/link";
import { Projector } from "lucide-react";
import { Collapsible } from "./ui/collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "./ui/sidebar";
import { ChevronDown } from "lucide-react";

const SidebarCollapsibleGroup = () => (
  <Collapsible defaultOpen className="group/collapsible">
    <SidebarGroup>
      <SidebarGroupLabel asChild>
        <CollapsibleTrigger>
          Collapsable Group
          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#">
                  <Projector />
                  See All Projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#">
                  <Projector />
                  Add Project
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </SidebarGroup>
  </Collapsible>
);

export default SidebarCollapsibleGroup;
