import React from 'react'
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from './ui/sidebar'
import { ChevronRight, Folder } from 'lucide-react'
// import { sidebarMainData } from '@/constants'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import Link from 'next/link'

const NavOrganizational = () => {
  return (
    <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel className='font-semibold'>
                Organizational
            </SidebarGroupLabel>
            <SidebarMenu>
                <Collapsible defaultOpen asChild className='group/collapsible'>
                    <SidebarMenuItem>
                        <Link href={'/organizational'}>
                            <SidebarMenuButton>
                                <Folder className='fill-white'/>
                                Organizational
                            </SidebarMenuButton>
                        </Link>
                    {/* <CollapsibleContent>
                        <SidebarMenuSub>
                            {sidebarMainData.map((items) => (
                            <SidebarMenuSubItem key={items.title}>
                                <SidebarMenuButton>
                                    <Link href={items.href}>
                                        {items.title}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuSubItem>   
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent> */}
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        </SidebarGroup>   
    </SidebarContent>
  )
}

export default NavOrganizational