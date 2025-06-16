import { createNote } from '@/src/actions/createNote'
import { redirect } from 'next/navigation'

export default function NewNotePage() {
  async function handleCreate(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const content = formData.get('content') as string

    if (!title || !content) return
    await createNote({ title, content })
    redirect('/notes')
  }

  return (
    <div className="bg-white shadow border border-gray-100 p-6 rounded-xl max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">✍️ Nouvelle note</h2>
      <form action={handleCreate} className="space-y-4">
        <input
          name="title"
          placeholder="Titre"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Contenu"
          rows={6}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enregistrer
        </button>
      </form>
    </div>
  )
}
