import pg from "pg"
const { Client } = pg

const client = new Client ({
    connectionString: 'postgresql://base_tp_comunicaciones_user:wCAiChyhvZnibi7cpCLf5q7AwmPpGZG4@dpg-cqe5i41u0jms7395as90-a.oregon-postgres.render.com/base_tp_comunicaciones?ssl=true',
})