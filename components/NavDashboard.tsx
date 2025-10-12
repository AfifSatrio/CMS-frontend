import React from 'react'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export function NavDashboard({
    dashboard,
}:{
    dashboard: {
        title: string
        url: string
        icon: LucideIcon
    }[]
}){
  return (
    <SidebarGroup>
        <SidebarMenu>
            {dashboard.map((dashboard) => (
                <SidebarMenuItem key={dashboard.title}>
                    <Link href={dashboard.url}>
                        <SidebarMenuButton tooltip={dashboard.title}>
                            {dashboard.icon && <dashboard.icon />}
                            <span>{dashboard.title}</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavDashboard