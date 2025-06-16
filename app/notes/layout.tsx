import Link from 'next/link'
import { ReactNode } from 'react'

export default function NotesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold text-gray-800">📝 QuickNotes</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-muted-foreground hover:underline">Accueil</Link>
            <Link href="/notes" className="text-muted-foreground hover:underline">Notes</Link>
            <Link href="/notes/new" className="text-blue-600 font-medium hover:underline">+ Nouvelle</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </div>
  )
}
