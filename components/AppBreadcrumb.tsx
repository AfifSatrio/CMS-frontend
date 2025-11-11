'use client';

import React from 'react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from './ui/breadcrumb'
import { usePathname } from 'next/navigation'
import { breadcrumbData } from '@/constants';

export function AppBreadcrumb() {
  const pathname = usePathname();

  const currentItem = breadcrumbData.find(item => item.href === pathname); 

  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                Pages
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          <BreadcrumbItem>
            {currentItem ? currentItem.title : 'unknown page'}
          </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
  )
}