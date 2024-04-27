'use client'

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
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'

export function MainSidebar({ children }: PropsWithChildren) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo/>
        <SidebarHeaderTitle>Dashboard</SidebarHeaderTitle>
      </SidebarHeader>

      <SidebarMain className='flex flex-col flex-grow'>
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href='/app' active={isActive('/app')}>
              <HomeIcon className='w-3 h-3 mr-3' />
              Overview
            </SidebarNavLink>
            <SidebarNavLink href='/app/settings' active={isActive('/app/settings')}>
              <MixerVerticalIcon className='w-3 h-3 mr-3' />
              Settings
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className='mt-auto'>
          <SidebarNavHeader>
            <SidebarHeaderTitle>Extra Links</SidebarHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href='/'>Need Help?</SidebarNavLink>
            <SidebarNavLink href='/'>Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <UserDropdown />
      </SidebarFooter>
    </Sidebar>
  )
}
