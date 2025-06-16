import prisma from '@/lib/prisma'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { deleteNote } from '@/src/actions/deleteNote'
import { DeleteNoteButton } from '@/src/components/DeleteNoteButton'

export default async function NoteDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const note = await prisma.note.findUnique({ where: { id: Number(id) } })
  if (!note) return notFound()

  async function handleDelete() {
    'use server'
    await deleteNote(note!.id)
    redirect('/notes')
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-100 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">{note.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>

      <div className="flex gap-4 pt-4">
        <DeleteNoteButton id={note.id} />
        <Link
          href={`/notes/${note.id}/edit`}
          className="text-sm bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
        >
          Modifier
        </Link>
      </div>
    </div>
  )
}
