"use client"

import * as React from "react"

import { NavOrganizatonal } from "@/components/NavOrganizatonal"
import { NavProjects } from "@/components/NavProjects"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"

import { sidebarData as data } from "@/constants"
// Update the import path to match the actual file name and location
import { NavHeader } from "./NavHeader"
import { NavDashboard } from "./NavDashboard"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard dashboard={data.navDashboard} />
        <NavOrganizatonal items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
    </Sidebar>
  )
}
