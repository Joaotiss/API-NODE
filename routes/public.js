import express from 'express'

const router = express.Router()

// cadastro

router.post("/cadastro", (req, res) => {
  // lógica de cadastro
  const user = req.body

  res.status(201).json(user)
})



export default router