import { prisma } from '../configs/database.js';
async function insert(email, password, username) {
    const result = await prisma.accounts.create({
        data: { email, password, username },
    });
    console.log(result);
    return result;
}
async function getByEmail(email) {
    return prisma.accounts.findUnique({ where: { email } });
}
async function getByUserId(userId) {
    return prisma.accounts.findUnique({ where: { id: userId } });
}
async function getAll() {
    const result = await prisma.accounts.findMany({
        select: {
            id: true,
            username: true,
        },
    });
    console.log(result);
    return result;
}
const authRepository = {
    insert,
    getByEmail,
    getByUserId,
    getAll,
};
export default authRepository;
