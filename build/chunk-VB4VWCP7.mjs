import {
  prisma
} from "./chunk-ZZAEURF7.mjs";

// src/repositories/auth.repository.ts
async function insert(email, password, username) {
  return prisma.accounts.create({
    data: { email, password, username }
  });
}
async function getByEmail(email) {
  return prisma.accounts.findUnique({ where: { email } });
}
async function getByUsername(username) {
  return prisma.accounts.findUnique({ where: { username } });
}
async function getByUserId(userId) {
  return prisma.accounts.findUnique({ where: { id: userId } });
}
async function getAll() {
  const result = await prisma.accounts.findMany({
    select: {
      id: true,
      username: true
    }
  });
  console.log(result);
  return result;
}
var authRepository = {
  insert,
  getByEmail,
  getByUsername,
  getByUserId,
  getAll
};
var auth_repository_default = authRepository;

export {
  auth_repository_default
};
