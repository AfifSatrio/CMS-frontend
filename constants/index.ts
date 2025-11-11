import { Bell, File, LayoutDashboard } from "lucide-react"

// Dashboard Data
export const dashboardSidebarData = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
]

// export const sidebarMainData = [
//   { title: "Projects", href: "/projects"},
//   { title: "Collaborators", href: "/collaborator"},
//   { title: "Setting", href: "/setting" },
// ]

export const sidebarPersonalData = [
  { title: "Personal Project", href: "/personal", icon: File },
  { title: "Notifications", href: "/notification", icon: Bell },
]

export const breadcrumbData = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Organizational", href: "/organizational"},
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
export interface organizationRole {
  name: string;
  color: string;
}

export interface organization {
  id: number;
  name: string;
  members: number;
  project: number;
  role: organizationRole;
}

export const listOrganizationData = [
  { 
    id: 1, name: "CMLabs - 20", members: 12, project: 4, 
      role: {
        name: "Owner",
        color: "#59D7CB"
      }
  },
  { id: 2, name: "CMS Pegadaian", members: 5, project: 3, 
      role: {
        name: "Collaborator",
        color: "#FEC842"
      }
  },
  { id: 3, name: "DIGIRAYA", members: 7, project: 10, 
      role: {
        name: "Collaborator",
        color: "#FEC842"
      } 
  },
]

// Notification
export const notifications = [

]

// Project Card Data
export const projectDetailData = [
  { title: "Total Personal Project", enum: "193"},
  { title: "Total Organization Project", enum: "193"},
  { title: "Total Organization", enum: "193"},
  { title: "Total Collaborator", enum: "193"},
]

// Personal Projects Data Dummy
export interface statusProject {
  status: 'completed' | 'on-going' | 'overdue';
  color: string;
}

export interface personalProjects {
  id: number;
  title: string;
  lastUpdate: string;
  status: statusProject;
}

export const personalProjectsData = [
  { 
    id: "1",title: "CMS CMLabs", lastUpdate: "03 Hours Ago", 
    status: {
      status: "completed",
      color: "#38C0A8"
    }
  },
  { id: "2",title: "CMS Pegadaian", lastUpdate: "20 Hours Ago",
    status: {
      status: "on-going",
      color: "#FFD016"
    }
  },
  { id: "3",title: "CMS Polinema", lastUpdate: "21 Mar 2025, 10:00",
    status: {
      status: "overdue",
      color: "#F93232"
    }
  },
]


