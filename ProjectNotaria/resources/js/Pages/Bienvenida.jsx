import React, { useEffect } from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Bienvenida() {
    useEffect(() => {
        document.title = 'Bienvenida - Notaría Digital';
    }, []);

    return (
        <AuthenticatedLayout>
            <Head title="Bienvenida" />

            {/* Contenedor principal centrado */}
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                
                {/* Primer bloque */}
                <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
                    {/* Columna de texto */}
                    <div className="w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra Notaría Digital</h1>
                        <p className="text-gray-600 mb-6">
                            Descubre la forma más sencilla y eficiente de gestionar tus trámites notariales.
                            Accede rápidamente a reportes, pagos y documentos importantes desde un solo lugar.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-150">
                                Explorar
                            </button>
                            <button className="bg-white border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition duration-150">
                                Iniciar
                            </button>
                        </div>
                    </div>

                    {/* Columna de imagen */}
                    <div className="w-1/2 bg-gray-200 flex justify-center items-center">
                        
                    </div>
                </div>

                {/* Segundo bloque */}
                <div className="flex w-full max-w-5xl mt-12 border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
                    {/* Columna con título en mayúsculas */}
                    <div className="w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4 uppercase">Bienvenido a Notaría</h1>
                    </div>

                    {/* Columna con texto general */}
                    <div className="w-1/2 bg-gray-200 flex justify-center items-center p-8">
                        <p className="text-gray-600 text-center">
                        Aquí encontrarás un resumen de reportes, notificaciones y actualizaciones importantes adaptadas a tus necesidades. 
                        Mantente informado sobre las actividades recientes y accede fácilmente a las funciones más relevantes.
                        </p>
                    </div>
                </div>

                {/* tercer bloque */}
                <div className="flex w-full max-w-5xl mt-12 border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
                    {/* Columna de texto */}
                    <div className="w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4 uppercase">Bienvenido a nuestra plataforma notarial</h1>
                        <p className="text-gray-600 text-center">
                            Aqui podrias genstionar todos tus tramites 
                            notariales de manera fácil y rapida. Mantente al
                            tanto de tus documentos y pagos con nuestras 
                            actualizaciones en tiempo real.
                            
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-150">
                                Explorar
                            </button>
                            <button className="bg-white border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition duration-150">
                                Iniciar
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        {/* Ícono */}
                        

                        {/* Título */}
                        <h2 className="text-2xl font-bold">Características destacadas de nuestra notaría</h2>

                        {/* Descripción */}
                        <p className="text-gray-600">
                            Accede a reportes detallados y gestión de pagos.
                        </p>

                        {/* Ícono */}
                        

                        {/* Título */}
                        <h2 className="text-2xl font-bold">Inventario y Suministros Siempre Actualizados</h2>

                        {/* Descripción */}
                        <p className="text-gray-600">
                            Recibe notificaciones sobre el estado de tu
                            inventario.
                        </p>
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                        {/* Ícono */}
                        
                        {/* Título */}
                        <h2 className="text-2xl font-bold">Gestion de usuarios y roles simplificada.</h2>

                        {/* Descripción */}
                        <p className="text-gray-600">
                            Controla los permisos de cada usuario facilmente.
                        </p>

                        {/* Ícono */}
                        
                        {/* Título */}
                        <h2 className="text-2xl font-bold">Documentacion y expedientes al alcance de tu mano.</h2>

                        {/* Descripción */}
                        <p className="text-gray-600">
                            Mantente informado sobre cada cambio en tus documentos.
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto py-12 px-6">

</div>
    <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="max-w-6xl mx-auto py-12 px-6">
    {/* Título y descripción */}
    <div className="mb-8">
        <h2 className="text-3xl font-bold">
            Accesos directos a las funciones más relevantes para tu gestión diaria
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
            Nuestra plataforma te ofrece accesos rápidos a funciones esenciales como reportes, pagos y gestión de usuarios. Explora las herramientas que tenemos para ti y optimiza tu experiencia.
        </p>
    </div>

    {/* Contenedor de las tarjetas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta 1 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
                
            </div>
            <h3 className="text-xl font-bold mt-4">Acceso inmediato a reportes y análisis de datos</h3>
            <p className="text-gray-600 mt-2">Genera reportes personalizados con solo unos clics.</p>
            <a href="#" className="text-black font-bold mt-4 inline-block">
                Ver &gt;
            </a>
        </div>

        {/* Tarjeta 2 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
                
            </div>
            <h3 className="text-xl font-bold mt-4">Gestión de pagos de manera sencilla y rápida</h3>
            <p className="text-gray-600 mt-2">Consulta el estado de tus pagos en tiempo real.</p>
            <a href="#" className="text-black font-bold mt-4 inline-block">
                Pagar &gt;
            </a>
        </div>

        {/* Tarjeta 3 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
                
            </div>
            <h3 className="text-xl font-bold mt-4">Control total sobre usuarios y sus permisos</h3>
            <p className="text-gray-600 mt-2">Administra roles y permisos de manera efectiva.</p>
            <a href="#" className="text-black font-bold mt-4 inline-block">
                Configurar &gt;
            </a>
        </div>
    </div>
</div>

    </div>

    <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="max-w-6xl mx-auto py-12 px-6">
    {/* Título y descripción */}
    <div className="mb-8">
        <h2 className="text-3xl font-bold">
            Actualizaciones para cada tipo de usuario
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
            Mantente informado con notificaciones personalizadas que se adaptan a tus necesidades. Recibe
            actualizaciones relevantes sobre pagos, documentos y expedientes al instante.
        </p>
    </div>

    {/* Contenedor de las tarjetas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta 1 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
                
            </div>
            <h3 className="text-xl font-bold mt-4">Alertas personalizadas para una mejor gestion</h3>
            <p className="text-gray-600 mt-2">No te pierdas ninguna novedad importante.</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
            </div>
            <h3 className="text-xl font-bold mt-4">Filtros para gestionar tus notificaciones fácilmente</h3>
            <p className="text-gray-600 mt-2">Ordenas tus alertas por tipo y prioridad.</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <div className="w-full h-40 bg-gray-200 flex justify-center items-center">
                
            </div>
            <h3 className="text-xl font-bold mt-4">Centro de notificaciones accecible y eficiente</h3>
            <p className="text-gray-600 mt-2">Accede a un resumen de todas tus alertas.</p>
        </div>
        <div className="flex space-x-4">
                            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-150">
                                Ver
                            </button>
                            <button className="bg-white border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition duration-150">
                                Actualizar
                            </button>
                        </div>
    </div>
</div>

    </div>
    <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="max-w-6xl mx-auto py-12 px-6">
    {/* Título y descripción */}
    <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Testimonios de Clientes</h2>
        <p className="text-gray-600 mt-2">Nuestros clientes comparten sus experiencias positivas.</p>
    </div>

    {/* Contenedor de testimonios */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonio 1 */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
            <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 text-xl">
                    ★★★★★
                </div>
            </div>
            <p className="text-lg font-semibold">"El servicio fue excepcional y superó mis expectativas."</p>
            <div className="flex items-center mt-4">
                <div className="ml-4">
                    <p className="font-bold">Juan Pérez</p>
                    <p className="text-gray-500 text-sm">Gerente, Empresa XYZ</p>
                </div>
                
            </div>
        </div>

        {/* Testimonio 2 */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
            <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 text-xl">
                    ★★★★★
                </div>
            </div>
            <p className="text-lg font-semibold">"La atención al cliente es insuperable, siempre están disponibles."</p>
            <div className="flex items-center mt-4">
                
                <div className="ml-4">
                    <p className="font-bold">María López</p>
                    <p className="text-gray-500 text-sm">Directora, Compañía ABC</p>
                </div>
                
            </div>
        </div>
    </div>

    {/* Controles del slider */}
    <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
        <div className="flex space-x-4">
            <button className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                ←
            </button>
            <button className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                →
            </button>
        </div>
    </div>
</div>

    </div>

    <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="max-w-5xl mx-auto py-12 px-6 border border-black rounded-lg text-center bg-white shadow-lg">
    <h2 className="text-3xl font-bold mb-4">¡Contáctanos para más información!</h2>
    <p className="text-gray-600 mb-6">
        Estamos aquí para ayudarte con todos tus trámites notariales. Regístrate y descubre más.
    </p>
    <div className="flex justify-center space-x-4">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Registrarse
        </button>
        <button className="border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition">
            Contactar
        </button>
    </div>
</div>

    </div>

    <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="max-w-5xl mx-auto py-12 px-6 flex items-center justify-between">
    {/* Sección izquierda: título */}
    <h2 className="text-3xl font-bold">Suscríbete a nuestro boletín</h2>

    {/* Sección derecha: formulario */}
    <div className="w-1/2">
        <p className="text-gray-600 mb-4">
            Recibe las últimas noticias y actualizaciones directamente en tu correo.  
            Mantente informado sobre nuestros servicios y novedades.
        </p>
        <div className="flex space-x-2">
            <input 
                type="email" 
                placeholder="Ingresa tu correo" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Suscribirse
            </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
            Al hacer clic en Suscribirse, confirmas que aceptas nuestros <span className="underline">Términos y Condiciones</span>.
        </p>
    </div>
</div>

    </div>

    <div className="mt-8 flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="bg-gray-100 p-6">
    {/* Sección del boletín */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
            <h4 className="text-lg font-bold">Únete a nuestro boletín</h4>
            <p className="text-gray-600">Recibe las últimas noticias y actualizaciones importantes.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <input 
                type="email" 
                placeholder="Ingresa tu correo" 
                className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Suscribirse
            </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Al suscribirte, aceptas nuestra <span className="underline">Política de Privacidad</span>.
        </p>
    </div>

    {/* Sección de enlaces */}
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-gray-700 text-sm mb-6">
        <div>
            <h4 className="font-bold">Logo</h4>
        </div>
        <div>
            <h4 className="font-bold">Columna Uno</h4>
            <ul>
                <li>Enlace Uno</li>
                <li>Enlace Dos</li>
                <li>Enlace Tres</li>
                <li>Enlace Cuatro</li>
                <li>Enlace Cinco</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold">Columna Dos</h4>
            <ul>
                <li>Enlace Seis</li>
                <li>Enlace Siete</li>
                <li>Enlace Ocho</li>
                <li>Enlace Nueve</li>
                <li>Enlace Diez</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold">Columna Tres</h4>
            <ul>
                <li>Enlace Once</li>
                <li>Enlace Doce</li>
                <li>Enlace Trece</li>
                <li>Enlace Catorce</li>
                <li>Enlace Quince</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold">Columna Cuatro</h4>
            <ul>
                <li>Enlace Dieciséis</li>
                <li>Enlace Diecisiete</li>
                <li>Enlace Dieciocho</li>
                <li>Enlace Diecinueve</li>
                <li>Enlace Veinte</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold">Columna Cinco</h4>
            <ul>
                <li>Enlace Veintiuno</li>
                <li>Enlace Veintidós</li>
                <li>Enlace Veintitrés</li>
                <li>Enlace Veinticuatro</li>
                <li>Enlace Veinticinco</li>
            </ul>
        </div>
    </div>

    {/* Sección de derechos reservados */}
    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 Relume. Todos los derechos reservados.  
            <span className="underline"> Política de Privacidad</span>  
            <span className="underline"> Términos de Servicio</span>  
            <span className="underline"> Configuración de Cookies</span>
        </p>
        {/* Aquí puedes agregar íconos de redes sociales */}
    </div>
</div>

    </div>

</div>
</AuthenticatedLayout>
    );
}
