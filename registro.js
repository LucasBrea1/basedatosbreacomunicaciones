async function crearRegistro () {
    try {
      await client.connect();
      console.log('Conectado a la base de datos');
  
      const insertQuery = `
        INSERT INTO students (name, age, grade)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      const values = ['Juan Pérez', 20, 85];
  
      const res = await client.query(insertQuery, values);
      console.log('Registro insertado:', res.rows[0]);
    } catch (err) {
      console.error('Error al insertar el registro', err);
    } finally {
      await client.end();
      console.log('Conexión cerrada');
    }
  };
  
  crearRegistro();