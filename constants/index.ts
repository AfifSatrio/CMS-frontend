import { Bell, File, LayoutDashboard } from "lucide-react"
import { ChartConfig } from "@/components/ui/chart"

// Dashboard Data
export const dashboardSidebarData = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
]

export const sidebarMainData = [
  { title: "Projects", href: "/projects"},
  { title: "Collaborators", href: "/collaborator"},
  { title: "Setting", href: "/setting" },
]

export const sidebarPersonalData = [
  { title: "Personal Project", href: "/personal", icon: File },
  { title: "Notifications", href: "/notification", icon: Bell },
]

export const breadcrumbData = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Projects", href: "/projects"},
  { title: "Collaborators", href: "/collaborator"},
  { title: "Setting", href: "/setting" },
  { title: "Personal Project", href: "/personal" },
  { title: "Notifications", href: "/notification" },
]

// Pie Chart Data
export interface PieChartDataItem{
  title: string;
  value: number;
  fill: string;
}

export const pieChartData: PieChartDataItem[] = [
  {title: "completed", value: 192, fill: "var(--chart-1)"},
  {title: "overdue", value: 123, fill: "var(--chart-2)"},
  {title: "pending", value: 90, fill: "var(--chart-3)"},
]

// Bar Chart Data
export interface BarChartDataItem{
  month: string;
  organizational: number;
  personal: number;
}

export const barChartData: BarChartDataItem[] = [
  { month: "January", organizational: 186, personal: 80 },
  { month: "February", organizational: 305, personal: 200 },
  { month: "March", organizational: 237, personal: 120 },
  { month: "April", organizational: 73, personal: 190 },
  { month: "May", organizational: 209, personal: 130 },
  { month: "June", organizational: 214, personal: 150 },
]

// Dropdown Data Menu
export const dropdownData = [
  { title: "Data 1" },
  { title: "Data 2" },
  { title: "Data 3" },
]

// Recent Activity Data Dummy
export const recentActivityData = [
  { id: 1, action: "Project Created", desc: "New Personal Project 'CMS Project'", time: "2 Hours Ago"},
  { id: 2, action: "Task Completed", desc: "Finished dashboard design in 'CMS Project'", time: "5 Hours Ago"},
  { id: 3, action: "New Collaborator", desc: "Irsyad Hifdhil joined 'CMS Project'", time: "10 Hours Ago"},
  { id: 4, action: "Project Deadline Update", desc: "'CMS Project' deadline was updated by Irsyad Hifdhil", time: "2 Days Ago"},
]

// List Organization Data Dummy
export const listOrganizationData = [
  { id: 1, name: "CMLabs - 20", members: 12, project: 4, role: "Admin" },
  { id: 2, name: "CMS Pegadaian", members: 5, project: 3, role: "Member" },
  { id: 3, name: "DIGIRAYA", members: 7, project: 10, role: "Collaborator" },
]

// Notification
export const notifications = [

]


