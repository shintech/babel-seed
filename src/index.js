export default function (options) {
  const queries = {}

  queries.index = (req, res) => {
    res.status(200)
    .json({
      body: 'success'
    })
  }

  return queries
}
