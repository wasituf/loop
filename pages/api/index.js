// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../data.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(db.data)
  } else {
    res.status(403).end()
  }
}
