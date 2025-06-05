import { useState } from 'react';
import { esquemaUsuario } from '../utils/validacion';

export default function Contador() {
  const [contador, setContador] = useState(0);

  function manejarClick() {
    const datos = { nombre: 'Juan', edad: contador };
    const resultado = esquemaUsuario.safeParse(datos);

    if (resultado.success) {
      console.log('✅ Datos válidos:', resultado.data);
    } else {
      console.log('❌ Datos inválidos:', resultado.error.errors);
    }

    setContador(contador + 1);
  }

  return (
    <div className="p-4 space-y-2">
      <p className="text-lg">Contador: {contador}</p>
      <button className="btn btn-primary" onClick={manejarClick}>
        Incrementar usando componente react
      </button>
    </div>
  );
}
