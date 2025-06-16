'use server'
import prisma from '@/lib/prisma'

export async function updateNote(id: number, data: { title: string, content: string }) {
  return prisma.note.update({ where: { id }, data })
}