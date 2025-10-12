import { Bell, FileCode2, Folder, Frame } from "lucide-react";

export const sidebarData = {
    navDashboard: [
        {
        title: "Dashboard",
        url: "/dashboard",
        icon: FileCode2,
        },
    ],

    navMain: [
    {
      title: "Organizational",
      url: "#",
      icon: Folder,
      items: [
        {
          title: "Projects",
          url: "/projects",
        },
        {
          title: "Collaborator",
          url: "/collaborator",
        },
        {
          title: "Setting",
          url: "/setting",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Personal Project",
      url: "/personalproject",
      icon: FileCode2,
    },
    {
        name: "Notification",
        url: "/notification",
        icon: Bell,
    }
  ],
  teams: [
    {
        name: "CMLabs #20",
        url: "#",
        logo: Frame,
    }
  ]
}

