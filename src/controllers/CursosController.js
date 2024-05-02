import CursosRepository from "../repositories/CursosRepository.js";

class CursosController {

    async index(req, res) {
        const result = await CursosRepository.findAll()
        res.json(result);
    }

    async show(req, res) {
        const { id } = req.params
        const result = await CursosRepository.findById(id)
        res.json(result);
    }

    async store(req, res) {
        const curso = req.body;
        const result = await CursosRepository.create(curso)
        res.json(result);
    }

    async update(req, res) {
        const curso = req.body;
        const { id } = req.params;
        const result = await CursosRepository.update(curso, id)
        res.json(result);
    }

    async delete(req, res) {
        const { id } = req.params;
        const result = await CursosRepository.delete(id)
        res.json(result);
    }
}

//padrão singlenton
export default new CursosController();