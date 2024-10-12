import React from 'react';

const Terminos: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
      <p>Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
      <h2 className="mt-6 text-xl font-semibold">1. Descripción del Servicio</h2>
      <p>
        Kaizen ofrece servicios de coaching de entrenamiento online, incluyendo planes de entrenamiento personalizados y asesoramiento nutricional.
      </p>
      <h2 className="mt-6 text-xl font-semibold">2. Uso del Servicio</h2>
      <p>
        Debes tener al menos 18 años para utilizar nuestros servicios.
        Te comprometes a proporcionar información veraz y actualizada al registrarte.
        Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
      </p>
      <h2 className="mt-6 text-xl font-semibold">3. Pagos y Cancelaciones</h2>
      <p>
        Los pagos se realizarán a través de los métodos habilitados en nuestro sitio web.
        Las cancelaciones de suscripciones deben hacerse al menos 24 horas antes de la próxima fecha de facturación.
      </p>
      <h2 className="mt-6 text-xl font-semibold">4. Responsabilidad del Usuario</h2>
      <p>
        Los resultados del entrenamiento pueden variar según el usuario.
        No somos responsables de lesiones o daños resultantes del uso de nuestros programas.
      </p>
      <h2 className="mt-6 text-xl font-semibold">5. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos, diseños y materiales en nuestro sitio web son propiedad de Kaizen y están protegidos por derechos de autor.
      </p>
      <h2 className="mt-6 text-xl font-semibold">6. Modificaciones de los Términos</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios importantes a través de nuestro sitio web.
      </p>
      <h2 className="mt-6 text-xl font-semibold">7. Ley Aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de Argentina.
      </p>
      <h2 className="mt-6 text-xl font-semibold">8. Contacto</h2>
      <p>
        Para consultas sobre estos términos, puedes contactarnos a través de: contacto@kaizen.com.
      </p>
    </div>
  );
};

export default Terminos;
