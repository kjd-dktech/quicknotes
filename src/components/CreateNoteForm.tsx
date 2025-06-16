'use client'
import { useState } from 'react'

export function CreateNoteForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    await fetch('/api/note', {
      method: 'POST',
      body: formData,
    })
    setIsLoading(false)
  }

  return (
    <form action={handleSubmit} className="space-y-2">
      <input name="title" placeholder="Titre" className="border p-2 w-full" />
      <textarea name="content" placeholder="Contenu" className="border p-2 w-full" />
      <button disabled={isLoading} className="bg-neutral-900 text-white px-4 py-2 rounded">
        {isLoading ? 'Création...' : 'Créer'}
      </button>
    </form>
  )
}