const queries = require("../queries/queries")
const pool = require("../db")

const createProductController = async (req, res) => {
    try {
        const { name, quantity, price, description, image } = req.body;
        if (name && quantity && price && description && image) {
            await pool.query(queries.createProduct, [name, quantity, price, description, image], (err, results) => {
                if (err) throw err
                res.status(200).json({
                    product: results.rows,
                    message: "Product added SuccessFully"
                })
            })
        }
        else {
            res.status(400).json({
                "ErrorMessage": "Please provide name quantity price description and image of Product"
            })
        }
    }
    catch (error) {
        if (error) console.log(error)
    }

}

const getAllProductController = async (req, res) => {
    try {
        await pool.query(queries.getAllProducts, (err, results) => {
            if (err) throw err.message
            // console.log(results.rows)
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createProductController,
    getAllProductController
}



