import { z } from 'zod';

//Aqui definimos un esquema de validación para un objeto de usuario utilizando Zod.
// Zod es una biblioteca de validación de esquemas para JavaScript y TypeScript.  
// Este esquema valida que un objeto de usuario tenga ciertas propiedades con tipos y restricciones específicas.
// El esquema incluye validaciones para nombre, email, edad, teléfono y dirección.  
// Cada propiedad tiene sus propias reglas de validación, como longitud mínima, formato de email, y si es opcional o no.
// También se incluye una validación adicional para asegurar que la edad sea al menos 18 años por ejemplo.
export const esquemaUsuario = z.object({
  nombre: z.string().min(1),// Nombre debe ser una cadena no vacía
  email: z.string().email(), // Email debe ser una cadena con formato de email válido
  edad: z.number().int().positive(),// Edad debe ser un número entero positivo
  telefono: z.string().optional(), // Teléfono es opcional, si se proporciona debe ser una cadena
  direccion: z.object({
    calle: z.string().min(1), // Calle debe ser una cadena no vacía
    ciudad: z.string().min(1), // Ciudad debe ser una cadena no vacía
    codigoPostal: z.string().regex(/^\d{5}(-\d{4})?$/) // Código postal debe ser una cadena con formato válido (5 dígitos o 5+4)
  }).optional() // Dirección es opcional, si se proporciona debe cumplir las validaciones internas
}).refine(data => data.edad >= 18, {
  message: "La edad debe ser al menos 18 años", // Mensaje de error si la edad es menor a 18  
  
});
