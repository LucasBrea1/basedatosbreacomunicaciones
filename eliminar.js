async function eliminarRegistro() {
    try {
      await client.connect();
      console.log('Conectado a la base de datos');
  
      const studentId = 1; // Cambia este ID al que quieras eliminar
      const deleteQuery = `
        DELETE FROM students WHERE id = $1
        RETURNING *
      `;
      const values = [studentId];
  
      const res = await client.query(deleteQuery, values);
      if (res.rows.length > 0) {
        console.log('Registro eliminado:', res.rows[0]);
      } else {
        console.log('Estudiante no encontrado');
      }
    } catch (err) {
      console.error('Error al eliminar el registro', err);
    } finally {
      await client.end();
      console.log('Conexión cerrada');
    }
  };

  eliminarRegistro();