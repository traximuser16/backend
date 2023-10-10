
const jwt = require("jsonwebtoken")

function jwtToken({
    user_id, user_email, user_password
}) {
    const user = { user_id, user_email, user_password }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m"
    })
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "10m"
    })

    return {
        accessToken, refreshToken
    }
}

module.exports = { jwtToken }