import database from '@database/mongodb'

export async function getNotes(req, res) {
  const dbInstance = database()
  try {
    const client = await dbInstance.connect()
    const db = client.db('single-spa-app')
    const collection = db.collection('notes')

    const queryLimit = req.query && req.query.limit

    const result = await collection.find()
      .limit(parseInt(queryLimit, 10))
      .toArray()
    dbInstance.disconnect(client)

    return res.status(200).json({
      message: 'getting notes',
      result,
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong',
      error,
    })
  }
}

export async function postNotes(req, res) {
  const { items } = req.body

  if (!items) {
    return res.status(400).json({
      message: 'You do not have any items to store',
    })
  }

  const dbInstance = database()
  try {
    const client = await dbInstance.connect()
    const db = client.db('mern-shopping')
    const collection = db.collection('items')

    const result = await collection.insertMany(items)
    dbInstance.disconnect(client)

    return res.status(200).json({
      message: 'posting shopping items',
      result,
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong',
      error,
    })
  }
}
