import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="bg-white shadow border border-gray-200 rounded-xl p-8 max-w-xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">📝 Bienvenue sur QuickNotes</h1>
        <p className="text-gray-600">
          Gérez vos notes de manière simple et rapide. Créez, modifiez et supprimez vos idées en un clic.
        </p>
        <Link
          href="/notes"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Voir mes notes
        </Link>
      </div>
    </main>
  )
}
