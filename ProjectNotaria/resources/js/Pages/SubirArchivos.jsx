import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function SubirArchivos({ archivos = [] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        archivo: null,
    });

    const { props } = usePage();
    const flash = props.flash || {};

    const [previewName, setPreviewName] = useState('');
    const [showSuccess, setShowSuccess] = useState(!!flash.success);
    const [showDeleted, setShowDeleted] = useState(!!flash.deleted);

    useEffect(() => {
        if (flash.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [flash.success]);

    useEffect(() => {
        if (flash.deleted) {
            setShowDeleted(true);
            const timer = setTimeout(() => setShowDeleted(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [flash.deleted]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/png'
            ];
            if (validTypes.includes(file.type)) {
                setData('archivo', file);
                setPreviewName(file.name);
            } else {
                alert('Tipo de archivo no permitido. Solo se permite PDF, DOC, DOCX, JPG o PNG.');
                e.target.value = null;
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('archivos.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setPreviewName('');
            },
        });
    };

    const eliminarArchivo = (id) => {
        if (confirm('¿Estás seguro que deseas eliminar este archivo?')) {
            post(route('archivos.delete', id), {
                _method: 'delete',
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Subir Archivos" />

            <div className="py-12 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Gestión de Archivos</h2>

                {/* Mensajes flash */}
                {showSuccess && (
                    <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
                        {flash.success}
                    </div>
                )}
                {showDeleted && (
                    <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
                        {flash.deleted}
                    </div>
                )}

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded shadow">
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">Selecciona un archivo</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                        {previewName && <p className="mt-2 text-sm text-gray-500">Archivo seleccionado: {previewName}</p>}
                        {errors.archivo && <p className="text-red-600 text-sm mt-1">{errors.archivo}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {processing ? 'Subiendo...' : 'Subir archivo'}
                    </button>
                </form>

                {/* Tabla de archivos */}
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Archivos Subidos</h3>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4">Nombre</th>
                                <th className="py-2 px-4">Tipo</th>
                                <th className="py-2 px-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archivos.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="text-center py-4">No hay archivos subidos.</td>
                                </tr>
                            ) : (
                                archivos.map((archivo) => (
                                    <tr key={archivo.id} className="border-t">
                                        <td className="py-2 px-4">{archivo.nombre}</td>
                                        <td className="py-2 px-4">{archivo.tipo}</td>
                                        <td className="py-2 px-4">
                                            <a
                                                href={archivo.url}
                                                target="_blank"
                                                className="text-blue-600 hover:underline mr-4"
                                            >
                                                Ver
                                            </a>
                                            <button
                                                onClick={() => eliminarArchivo(archivo.id)}
                                                className="text-red-600 hover:underline"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
