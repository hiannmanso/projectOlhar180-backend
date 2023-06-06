import { prisma } from '../configs/database.js'

async function insert(
	email: string,
	password: string,
	username: string,
) {
	return prisma.accounts.create({
		data: { email, password, username },
	})
}

async function getByEmail(email: string) {
	return prisma.accounts.findMany({ where: { email } })
}

async function getByUserId(userId: number) {
	return prisma.accounts.findUnique({ where: { id: userId } })
}



async function getAll() {
	const result = await prisma.accounts.findMany({
		select: {
			id: true,
			username: true,
		},
	})
	console.log(result)
	return result
}

const authRepository = {
	insert,
	getByEmail,

	getByUserId,
	getAll,
}

export default authRepository