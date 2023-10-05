const getUsers = "SELECT * FROM users";

const createUser = "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *"

const checkEmail = "SELECT * FROM users WHERE user_email=$1"

// const checkPass = "SELECT * FROM users WHERE user_password=$1"

const queries = {
    getUsers,
    createUser,
    checkEmail,
    // checkPass
}

module.exports = queries