import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const FormContact: React.FC = () => {
  
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (form.current) {
      emailjs.sendForm(
        'service_03b1l1k',
        'template_hvjahtl',
        form.current,
        'yyQtjOBFcG__WMWY6'
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.',
          confirmButtonColor: '#d33',
          showCloseButton: true,
          timer: 3000,
        });
        form.current!.reset(); 
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '¡Oops!',
          text: 'Hubo un error al enviar el mensaje. Intenta de nuevo.',
          confirmButtonText: 'Aceptar',
          showCloseButton: true,
        });
        console.error('EmailJS error:', error);
      });
    } else {
      console.error('Form is not defined');
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-lg p-8 max-w-md mx-auto mt-10 transition transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contacto</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 transform hover:border-red-400"
            placeholder="tuemail@ejemplo.com"
          />
        </div>
        <div>
          <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-1">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="from_name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 transform hover:border-red-400"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="opcion" className="block text-gray-700 font-semibold mb-1"> Hace cuanto entrenas?</label>
          <div className="relative">
            <select
              id="opcion"
              name="opcion"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 transform hover:border-red-400 appearance-none bg-white"
            >
              <option value="" disabled selected className="text-gray-400">Selecciona una opción</option>
              <option value="Opción 1">Quiero arrancar de 0</option>
              <option value="Opción 2">Ya tengo algo de experiencia</option>
              <option value="Opción 3">Hace varios años</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-1">Mensaje</label>
          <textarea
            id="mensaje"
            name="message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 transform hover:border-red-400"
            placeholder="Escribe tu mensaje"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default FormContact;

