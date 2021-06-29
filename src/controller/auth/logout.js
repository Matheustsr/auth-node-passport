module.exports = (req, res) => {
    req.logout() // simples, não ?! rsrs

    return res.redirect('/auth')
}