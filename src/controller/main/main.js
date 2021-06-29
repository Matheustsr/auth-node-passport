module.exports = (req, res) => {
    return res.render('main/index', {
        user: req.user || null
    })
}