import prisma from '@/lib/prisma'
import { updateNote } from '@/src/actions/updateNote'
import { redirect } from 'next/navigation'


export default async function EditNotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const note = await prisma.note.findUnique({ where: { id: Number(id) } })

  if (!note) return <div>Note introuvable</div>

  async function handleUpdate(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    await updateNote(note!.id, { title, content })
    redirect(`/notes/${note!.id}`)
  }

  return (
    <div className="bg-white shadow rounded-xl border border-gray-100 p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">✏️ Modifier la note</h2>
      <form action={handleUpdate} className="space-y-4">
        <input
          name="title"
          defaultValue={note.title}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          rows={6}
          defaultValue={note.content}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  )
}
