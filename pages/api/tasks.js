import query from '/database/db'

export default async function handler(req, res) {

	if (req.method === 'GET') {
		const result = await query("SELECT * FROM tasks ORDER BY id DESC")

		res.status(200).json(result)
	}
	else if (req.method === 'POST') {
		const { task } = req.body
		const postResult = await query("INSERT INTO tasks(task, created_at, updated_at) VALUES (?, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())", [task])
		const getResult = await query("SELECT * FROM tasks ORDER BY id DESC")

		res.status(200).json(getResult)
	}
}
