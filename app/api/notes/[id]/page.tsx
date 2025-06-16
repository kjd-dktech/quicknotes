import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const note = await prisma.note.findUnique({ where: { id: Number(params.id) } })
  if (!note) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(note)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { title, content } = await req.json()
  const updated = await prisma.note.update({
    where: { id: Number(params.id) },
    data: { title, content },
  })
  return NextResponse.json(updated)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.note.delete({ where: { id: Number(params.id) } })
  return NextResponse.json({ success: true })
}
