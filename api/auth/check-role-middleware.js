module.exports = role => {
    return (req, res, next) => {
        if (role === req.jwt.role) {
            next();
        } else {
            res.status(403).json({ you: "have no power here" })
        }

    }

}