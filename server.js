const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db.js");

dotenv.config({ path: "./config/config.env" });
connectDB();

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
