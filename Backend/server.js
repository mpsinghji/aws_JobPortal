import app from './app.js';
import connectDB from './utils/db.js';
import dotenv from "dotenv";

dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});
