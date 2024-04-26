export function getUrl(path?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
  return `${baseUrl}${normalizedPath}`
}
