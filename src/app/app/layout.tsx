import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavLink,
  SidebarNavMain
} from '@/components/dashboard/sidebar'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='grid grid-cols-[16rem_1fr] gap-4'>
      <Sidebar>
        <SidebarHeader>
          <SidebarHeaderTitle>Dashboard</SidebarHeaderTitle>
        </SidebarHeader>

        <SidebarMain>
          <SidebarNav>
            <SidebarNavMain>
              <SidebarNavLink href='/app'>Overview</SidebarNavLink>
              <SidebarNavLink href='/app/settings'>Settings</SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>

          <SidebarNav>
            <SidebarNavHeader>
              <SidebarHeaderTitle>Extra Links</SidebarHeaderTitle>
            </SidebarNavHeader>
            <SidebarNavMain>
              <SidebarNavLink href='/'>Help</SidebarNavLink>
              <SidebarNavLink href='/'>Site</SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>
        </SidebarMain>
        <SidebarFooter>
          <h1>fofo</h1>
        </SidebarFooter>
      </Sidebar>
      <main>{children}</main>
    </div>
  )
}
