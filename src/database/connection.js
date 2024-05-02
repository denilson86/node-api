import mysql from 'mysql';

const connection = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'a1b2c3d4',
    database: 'bdcursos'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL', err);
    } else {
      console.log('Connected to MySQL database');
    }
});

/**
 * Executa codigo SQL com ou sem parametros
 * @param {string} sql  intrução SQL
 * @param {string=id | [curso, id]} params parametros setados no SQL
 * @param {string} mensagemReject mensagem de retorno
 * @returns objeto da Promise
 */
export const query = (sql, params = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, result) => {
            if (error){
                return reject('Não foi possível incluir.')
            } else {
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            }
        })
    })
}

export default connection;