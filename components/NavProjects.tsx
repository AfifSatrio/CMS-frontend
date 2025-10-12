"use client"

import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Personal Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((projects) => (
          <SidebarMenuItem key={projects.name}>
            <SidebarMenuButton tooltip={projects.name}>
                  {projects.icon && <projects.icon />}
                  <span>{projects.name}</span>
                </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
