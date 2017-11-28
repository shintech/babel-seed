export default function (options) {
  const queries = {}

  queries.getUser = (req, res) => {
    res.status(200)
    .json({
      body: req.user
    })
  }

  return queries
}
