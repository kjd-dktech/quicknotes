'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error)

  return (
    <div className="text-center py-16 space-y-4">
      <h2 className="text-xl font-bold text-red-600">Une erreur est survenue</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Réessayer
      </button>
    </div>
  )
}
