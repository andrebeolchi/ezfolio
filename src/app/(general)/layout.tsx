import { getUser } from '@/components/get-user'
import { Navigator } from '@/components/navigator'
import { DownloadCurriculumButton, LogoutButton } from '@/components/navigator/actions'
import { ModeToggle } from '@/components/theme-mode-toggle'

export default async function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getUser()

  return (
    <div className="w-full space-y-6 flex flex-col flex-1">
      <div className="w-full flex flex-col">
        <div className="container p-6 max-w-screen-xl flex items-center gap-6 justify-between">
          <ModeToggle />

          <Navigator />

          {user ? <LogoutButton /> : <DownloadCurriculumButton />}
        </div>
        {/* Sidebar */}
      </div>

      <div className="container max-w-screen-xl flex flex-1 flex-col py-6">{children}</div>

      {/* TODO -- Footer */}
    </div>
  )
}
