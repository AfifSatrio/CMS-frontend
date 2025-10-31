import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppBreadcrumb } from "./AppBreadcrumb"
import { DarkModeButton } from "./DarkModeButton"
import FilterDataButton from "./FilterDataButton"

export function SiteHeader() {
  return (
    <div className="flex w-full h-[50px] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[50px] justify-between">
      <div className="flex items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">
            <AppBreadcrumb />
        </h1>
      </div>
      <div className="flex p-4 gap-4 items-center">
        <FilterDataButton />
        <DarkModeButton />
      </div>
    </div>
  )
}