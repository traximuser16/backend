const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/routes");
const authRouter = require("./routes/auth-routes");
const productRouter = require("./routes/productsRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOption = { credential: true, origin: process.env.URL || "*" }

app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("<h1>Server is Running</h1>");
})

app.use("/api/v1/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/v1", productRouter);

// app.get("/users/:name/:userId", (req, res) => {
//     try {
//         if (Object.keys(req.params).length === 1) {
//             res.json(req.params.name)
//         }
//         res.json(req.params)
//     }
//     catch (error) {
//         throw new Error("Api Params Null")
//     }
// })

app.listen(PORT, () => console.log(`Server is Listening on ${PORT}`));