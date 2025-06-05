import { useStore } from '@nanostores/react';
import { contador, incrementar, decrementar} from '../stores/contador';
import { esquemaUsuario } from '../utils/validacion';

export default function Contador() {
  const valor = useStore(contador);

  function manejarClick() {
    const datos = { nombre: 'Juan', edad: valor };
    const resultado = esquemaUsuario.safeParse(datos);

    if (resultado.success) {
      console.log('✅ Datos válidos:', resultado.data);
    } else {
      console.log('❌ Datos inválidos:', resultado.error.errors);
    }

    incrementar(); // actualiza el contador global
  }
    function restarClick() {

    decrementar(); // si necesitas decrementar, puedes llamar a esta función 
  }

  return (
    <><div className="p-4 space-y-2">
      <p className="text-lg">Contador global: {valor}</p>
      <button className="btn btn-primary" onClick={manejarClick}>
        Incrementar con validación
      </button>
    </div><div className="p-4 space-y-2">
        <p className="text-lg">Contador global: {valor}</p>
        <button className="btn btn-secondary" onClick={restarClick}>
          decrementar con validación
        </button>
      </div></>
  );
}
