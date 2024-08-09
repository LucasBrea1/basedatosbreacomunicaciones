async function createTableWithClient() {
    try {
      await client.connect();
      console.log('Conectado a la base de datos');
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS students (
          id SERIAL PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          age INTEGER NOT NULL,
          grade INTEGER NOT NULL
        )
      `;
  
      await client.query(createTableQuery);
      console.log('Tabla "students" creada exitosamente');
    } catch (err) {
      console.error('Error al crear la tabla', err);
    } finally {
      await client.end();
      console.log('Conexión cerrada');
    }
  };

  createTableWithClient();