'use client';

import React from 'react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from './ui/breadcrumb'
import { usePathname } from 'next/navigation'

export function AppBreadcrumb() {
  let pathname = usePathname();
  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                Pages
            </BreadcrumbItem>
            <BreadcrumbSeparator />
        </BreadcrumbList>
    </Breadcrumb>
  )
}