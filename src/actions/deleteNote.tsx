'use server'
import prisma from '@/lib/prisma'

export async function deleteNote(id: number) {
  return prisma.note.delete({ where: { id } })
}