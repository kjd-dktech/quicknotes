'use server'
import prisma from '@/lib/prisma'

export async function createNote({ title, content }: { title: string, content: string }) {
  return prisma.note.create({ data: { title, content } })
}