"use client";

import type * as React from "react";
import {
  Package,
  ShoppingCart,
  Users,
  Settings,
  Home,
  MoreHorizontal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NavLink } from "react-router";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      // isActive: true,
    },
    {
      title: "Productos",
      url: "/products",
      icon: Package,
      items: [
        {
          title: "Ver Todos",
          url: "#",
        },
        {
          title: "Agregar Producto",
          url: "#",
        },
        {
          title: "Categorías",
          url: "#",
        },
        {
          title: "Inventario",
          url: "#",
        },
      ],
    },
    {
      title: "Solicitudes",
      url: "/requests",
      icon: ShoppingCart,
      items: [
        {
          title: "Todas las Órdenes",
          url: "#",
        },
        {
          title: "Nueva Orden",
          url: "#",
        },
        {
          title: "Pendientes",
          url: "#",
        },
        {
          title: "Completadas",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Proveedores",
    //   url: "#",
    //   icon: Users,
    //   items: [
    //     {
    //       title: "Lista de Clientes",
    //       url: "#",
    //     },
    //     {
    //       title: "Agregar Cliente",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Reportes",
    //   url: "#",
    //   icon: BarChart3,
    //   items: [
    //     {
    //       title: "Ventas",
    //       url: "#",
    //     },
    //     {
    //       title: "Productos",
    //       url: "#",
    //     },
    //     {
    //       title: "Clientes",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Electrónicos",
      url: "#",
      icon: Package,
    },
    {
      name: "Ropa",
      url: "#",
      icon: Package,
    },
    {
      name: "Hogar",
      url: "#",
      icon: Package,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Package className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Mi Negocio</span>
                  <span className="truncate text-xs">Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú Principal</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                
                <NavLink to={item.url}>
                 {({ isActive }) => (
                   <SidebarMenuButton asChild isActive={isActive}>
                    <span>
                    <item.icon />
                    <span>{item.title}</span>
                    </span>
                  </SidebarMenuButton>
                 )}
                </NavLink>
                {item.items?.length ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction showOnHover>
                        <MoreHorizontal />
                        <span className="sr-only">Más</span>
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-48 rounded-lg"
                      side="bottom"
                      align="end"
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        {/* <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Categorías</SidebarGroupLabel>
          <SidebarGroupAction title="Agregar Categoría">
            <Plus /> <span className="sr-only">Agregar Categoría</span>
          </SidebarGroupAction>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover>
                      <MoreHorizontal />
                      <span className="sr-only">Más</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48" side="bottom" align="end">
                    <DropdownMenuItem>
                      <span>Ver Productos</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Editar Categoría</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Eliminar</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Settings className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Admin</span>
                    <span className="truncate text-xs">admin@negocio.com</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <Settings />
                  Configuración
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users />
                  Mi Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
