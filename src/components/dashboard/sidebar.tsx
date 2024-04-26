import { cn } from '@/lib/utils'
import Link from 'next/link'

// type SidebarProps = {
//   paths: Array<{
//     label: string
//     href: string
//   }>
// }

// export default function Sidebar({ paths }: SidebarProps) {
//   return (
//     <div className="border-r border-border">
//       <nav>
//         {paths.map(paths => (
//           <a href="" key={paths.href}>{ paths.label }</a>
//         ))}
//       </nav>
//     </div>
//   )
// }

export type SidebarGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

export function Sidebar({ className, children }: SidebarGenericProps) {
  return (
    <aside className={cn(['border-r border-border flex flex-col', className])}>{children}</aside>
  )
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn(['p-6', className])}>{children}</header>
}

export function SidebarHeaderTitle({ className, children }: SidebarGenericProps) {
  return (
    <div className={cn(['text-xs uppercase text-muted-foreground ml-3', className])}>
      {children}
    </div>
  )
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
  return <aside className={cn(['p-6 mt-auto border-t border-border', className])}>{children}</aside>
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function SidebarNavHeaderTitle({ className, children }: SidebarGenericProps) {
  return <h4 className={cn(['', className])}>{children}</h4>
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

type SidebarNavLinkProps = {
  href: string
}

export function SidebarNavLink({
  className,
  children,
  href
}: SidebarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link href={href} className={cn(['text-sm px-3 py-2', className])}>
      {children}
    </Link>
  )
}
