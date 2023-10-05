const queries = require("../queries/queries")
const pool = require("../db")
const bcrypt = require("bcryptjs")
const { jwtToken } = require("../utils/jwt-helpers")
const jwt = require("jsonwebtoken")


const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let emailIsValid = false;
        let passwordIsValid = false;
        if (email && password) {
            pool.query(queries.checkEmail, [email], (err, results) => {
                if (err) throw err
                if (results.rows.length === 0) res.status(401).json({ message: "Email is Incorrect" })

                else {
                    (async function () {
                        await bcrypt.compare(password, results.rows[0].user_password).then((passwordResponse) => {
                            if (!passwordResponse) {
                                passwordIsValid = false
                                res.status(201).json({ message: "Password is Incorrect" })
                            }
                            passwordIsValid = true
                            emailIsValid = true
                            if (emailIsValid === true && passwordIsValid === true) {
                                let token = jwtToken(results.rows[0])
                                res.cookie("refresh_token", token.refreshToken, { httpOnly: true })
                                res.status(201).json({
                                    token,
                                    name: results.rows[0].user_name,
                                    email: results.rows[0].user_email
                                })
                            }
                        }).catch((err) => console.log(err))
                    }())
                }
            })
        }
        else {
            res.status(400).json({
                "message": "Please Provide Both Email and Password"
            })
        }


    } catch (error) {
        console.log({ "error": error })
        throw error
    }
}

const refreshController = (req, res) => {
    try {
        const refresh_token = req.cookies.refresh_token;
        if (refresh_token === null) return res.status(401).json({ error: "Null Refresh Token" })
        jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, userData) => {
            if (err) return res.status(401).json({ "ErrorMessage": err.message })
            const token = jwtToken(userData)
            res.cookie("refresh_token", token.refreshToken, { httpOnly: true })
            res.status(201).json(token)
        })
    } catch (error) {
        console.log(error)
    }
}

const controller = {
    login,
    refreshController
}

module.exports = controller