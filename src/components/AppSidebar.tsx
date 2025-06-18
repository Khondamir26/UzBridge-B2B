import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import Image from "next/image";


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];


const AppSidebar = () => {
  return <Sidebar collapsible="icon">
    <SidebarHeader className="py-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="#">
              {/* <Image alt="logo" width={20} height={20} /> */}
              <span>Khonda Dev</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarSeparator />

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.title === "Inbox" && (
                  <SidebarMenuBadge>
                    24
                  </SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel> Projects  </SidebarGroupLabel>
        <SidebarGroupAction>
          <Plus /> <span className="sr-only">Add Project</span>
        </SidebarGroupAction>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Projector /> See All Projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Plus /> Add Project
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              Help
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Projector /> See All Projects
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Plus /> Add Project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>

        </SidebarGroup>
      </Collapsible>
      {/* NESTED */}
      <SidebarGroup>
        <SidebarGroupLabel> Nested Items  </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Projector /> See All Projects
                </Link>
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="">
                      <Plus /> Add Project
                    </Link>

                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href="">
                      <Plus /> Edit Project
                    </Link>

                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      {/* Collapsible Nested Items */}
      <Collapsible className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              Collapsible Nested Items
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenuSub>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Projector /> See All Projects
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Plus /> Add Project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenuSub>
            </SidebarGroupContent>
          </CollapsibleContent>

        </SidebarGroup>
      </Collapsible>


    </SidebarContent>

    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> John Doe <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>;
};

export default AppSidebar;