import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
console.log("MONGO_URI:", process.env.MONGO_URI);
const mongoConnect = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        // console.log(response)
        console.log("Mongodb is connected successfuly")
    } catch (error) {
        console.error("Error connection mongodb server: ", error)
        process.exit()
    }
}

export default mongoConnect