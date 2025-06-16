'use client'
import { useTransition } from 'react'
import { deleteNote } from '@/src/actions/deleteNote'

export function DeleteNoteButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await deleteNote(id)
          alert('Note supprimée avec succès')
          window.location.href = '/notes'
        })
      }
      className="text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      {isPending ? 'Suppression...' : 'Supprimer'}
    </button>
  )
}
