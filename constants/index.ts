import { Bell, FileCode2, Folder, Frame } from "lucide-react";

export const sidebarData = {
    navHeader: [
        {
        title: "Dashboard",
        url: "#",
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
          url: "#",
        },
        {
          title: "Collaborator",
          url: "#",
        },
        {
          title: "Setting",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Personal Project",
      url: "#",
      icon: FileCode2,
    },
    {
        name: "Notification",
        url: "#",
        icon: Bell,
    }
  ],
  teams: [
    {
        name: "CMLabs #20",
        url: "#",
        plan: "Professional",
        logo: Frame,
    }
  ]
}

