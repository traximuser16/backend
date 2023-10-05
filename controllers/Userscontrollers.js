
const queries = require("../queries/queries")
const pool = require("../db")
const bcrypt = require("bcryptjs")

const usersController = async (req, res) => {
    try {
        await pool.query(queries.getUsers, (err, results) => {
            if (err) throw err
            res.status(200).json({ users: results.rows })
            console.log("Endpoint Hit SuccessFully")
        })
    }
    catch (err) {
        res.status(500).json({
            "controllerError": err.message
        })
    }
}

const createController = async (req, res) => {
    try{
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8)
        if (name, email, password) {
            pool.query(queries.createUser, [name, email, hashedPassword], (err, results) => {
                if (err) throw err
                res.status(200).json({
                    "user": results.rows,
                    "Message": "User Created Successfully"
                })
            })
        }
        else {
            return res.status(401).json({ "ErrorMessage" : "Please provide Name Email Password" })
        }
    }
    catch(err){
        console.log({
            error: err.message
        })
    }
}

const controller = {
    usersController,
    createController
}

module.exports = controller