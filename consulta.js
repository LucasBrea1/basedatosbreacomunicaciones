async function consultar () {
  try {
    await client.connect();
    console.log('Conectado a la base de datos');

    const studentName = 'Juan Pérez';
    const selectQuery = `
      SELECT * FROM students WHERE name = $1
    `;
    const values = [studentName];

    const res = await client.query(selectQuery, values);
    if (res.rows.length > 0) {
      console.log('Datos del estudiante:', res.rows[0]);
    } else {
      console.log('Estudiante no encontrado');
    }
  } catch (err) {
    console.error('Error al consultar el registro', err);
  } finally {
    await client.end();
    console.log('Conexión cerrada');
  }
};

consultar();