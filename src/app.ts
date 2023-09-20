import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import { paymentRouter } from "./MyAppContext/routes/payments"

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.use('/payments', paymentRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})