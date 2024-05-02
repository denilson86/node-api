import { query } from "../database/connection.js";

class CursosRepository {
    //CRUD
    create(curso) {
        const sql = 'INSERT INTO cursos SET ?'
        return query(sql, curso, 'Não foi possível incluir registro.')
    }

    findAll() {
        const sql = 'SELECT * FROM cursos'
        return query(sql, 'Não foi possível consultar todos.')
    }

    findById(id) {
        const sql = 'SELECT * FROM cursos WHERE id=?';
        return query(sql, id, 'Não foi possível consultar por id.')
    }

    update(curso, id) {
        const sql = 'UPDATE cursos SET ? WHERE id= ?';
        return query(sql, [curso, id], 'Não foi possível alterar.')
    }

    delete(id) {
        const sql = 'DELETE FROM cursos WHERE id=?';
        return query(sql, id, 'Não foi possível deletar.')
    }
}

export default new CursosRepository();