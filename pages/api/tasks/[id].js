import query from '/database/db'

export default async function handler(req, res) {
   const { id } = req.query

   if (req.method === 'GET') {
      const result = await query("SELECT * FROM tasks WHERE id = ?", [id])

      res.status(200).json(result[0])
   }
   else if (req.method === 'PUT') {
      const { task } = req.body
      const result = await query("UPDATE tasks SET task = ?, updated_at = CURRENT_TIMESTAMP() WHERE id = ?", [task, id])
      const getResult = await query("SELECT * FROM tasks ORDER BY id DESC")

      res.status(200).json(getResult)
   }
   else if (req.method === 'DELETE') {
      const result = await query("DELETE FROM tasks WHERE id = ?", [id])
      const getResult = await query("SELECT * FROM tasks ORDER BY id DESC")

      res.status(200).json(getResult)
   }
}
