import { Router } from "express"
import CursosController from './controllers/cursoscontroller.js'

const router = Router()

//ROTAS
router.get('/cursos', CursosController.index)
router.get('/cursos/:id', CursosController.show)
router.post('/cursos', CursosController.store)
router.put('/cursos/:id', CursosController.update)
router.delete('/cursos/:id', CursosController.delete)

export default router