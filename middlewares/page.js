export default (req, res, next) => {
  req.page = req.query.query ? 'search' : 'index'

  next()
}
