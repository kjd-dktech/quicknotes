import prisma from '@/lib/prisma'
import Link from 'next/link'

type Note = {
  id: number
  title: string
  content: string
  createdAt: Date
}

export default async function NotesPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams

  const notes = await prisma.note.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: 'insensitive' } },
        { content: { contains: q, mode: 'insensitive' } },
      ],
    },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">🔍 Mes Notes</h2>
        <form className="flex items-center gap-2">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Rechercher..."
            className="border px-3 py-2 rounded w-60"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Rechercher
          </button>
        </form>
      </div>

      {notes.length === 0 ? (
        <p className="text-muted-foreground">Aucune note trouvée pour « {q} ».</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {notes.map((note: Note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="bg-white rounded-xl p-4 shadow hover:shadow-md border border-gray-100 transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 truncate">{note.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{note.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
