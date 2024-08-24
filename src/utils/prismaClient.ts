import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Usando la variable de entorno definida en .env
    },
  },
});

export default prisma;
