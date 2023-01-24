// src/index.ts
import { PrismaClient } from "@prisma/client";
export * from "@prisma/client";
var prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;
export {
  prisma
};
//# sourceMappingURL=index.mjs.map