import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()

app.use(express.json()) // Middleware to parse JSON bodies

app.use('/', publicRoutes)





app.listen(3000, () => console.log('Server is running on port '))
