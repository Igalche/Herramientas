import { useState } from 'react';
import { z } from 'zod';

const esquema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  edad: z.number({ invalid_type_error: 'Edad debe ser un número' })
          .int('Debe ser un número entero')
          .positive('Edad debe ser positiva'),
});

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [resultado, setResultado] = useState(null);

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Convertir edad a número
    const datos = { nombre, edad: Number(edad) };

    const validacion = esquema.safeParse(datos);

    setResultado(validacion);
  };

  return (
    <form onSubmit={manejarEnvio} className="space-y-4 p-4 max-w-sm">
        <p className="text-lg">Vamos a probar Zod con mini formulario react</p>
      <input
        type="text"
        placeholder="Nombre"
        className="input input-bordered w-full"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        className="input input-bordered w-full"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <button className="btn btn-primary w-full" type="submit">
        Validar
      </button>

      {resultado && (
        <div className="mt-4">
          {resultado.success ? (
            <p className="text-green-600">✅ Datos válidos</p>
          ) : (
            <div className="text-red-600">
              {resultado.error.errors.map((err, i) => (
                <p key={i}>❌ {err.message}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </form>
  );
}