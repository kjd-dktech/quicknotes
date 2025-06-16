import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.NoteCreateInput[] = [
    {
        title: "Welcome to QuickNotes",
        content: "This is a sample note to get you started.",
    },
    {
        title: "Getting Started",
        content: "To create a new note, click on the 'New Note' button.",
    }
];

export async function main() {
  for (const u of userData) {
    await prisma.note.create({ data: u });
  }
}

main();