const jwt = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    if (token == null) return res.status(401).json({ error: "Null Token" })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userdata) => {
        if (err) return res.status(401).json({ error: err.message });
        console.log("Middleware Passed Successfully!")
        req.user = userdata;
        next();
    })
}

module.exports = authenticateToken