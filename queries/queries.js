const getUsers = "SELECT * FROM users";

const createUser = "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *";

const checkEmail = "SELECT * FROM users WHERE user_email=$1";

// const checkPass = "SELECT * FROM users WHERE user_password=$1"

const getAllProducts = "SELECT * FROM products";

const createProduct = "INSERT INTO products (p_name, quantity, price, p_description, p_image) VALUES ($1, $2, $3, $4, $5) RETURNING *";

const queries = {
    getUsers,
    createUser,
    checkEmail,
    getAllProducts,
    createProduct
    // checkPass
}

module.exports = queries