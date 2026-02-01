import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react';

export default function Archivos({ archivos }) {
    const { data, setData, post, progress, reset, processing, errors } = useForm({
        archivo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('archivos.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de eliminar este archivo?')) {
            router.delete(route('archivos.destroy', id), { preserveScroll: true });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Gestión de Archivos" />
            <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Subir Archivo</h2>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        type="file"
                        accept=".pdf,.docx,image/*"
                        onChange={(e) => setData('archivo', e.target.files[0])}
                        className="mb-4 block w-full"
                    />
                    {errors.archivo && (
                        <p className="text-red-500 text-sm mb-2">{errors.archivo}</p>
                    )}
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                    >
                        {processing ? 'Subiendo...' : 'Subir'}
                    </button>
                    {progress && (
                        <div className="mt-2 text-sm text-gray-600">
                            Progreso: {progress.percentage}%
                        </div>
                    )}
                </form>

                <hr className="my-6" />

                <h2 className="text-xl font-bold mb-2 text-center">Archivos Subidos</h2>
                <table className="w-full border text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Tipo</th>
                            <th className="p-2">Fecha</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {archivos.map((archivo) => (
                            <tr key={archivo.id} className="text-center border-t">
                                <td className="p-2">{archivo.nombre}</td>
                                <td className="p-2">{archivo.tipo}</td>
                                <td className="p-2">{archivo.created_at}</td>
                                <td className="p-2">
                                    <a
                                        href={`/storage/${archivo.ruta}`}
                                        target="_blank"
                                        className="text-blue-600 underline mr-2"
                                    >
                                        Ver
                                    </a>
                                    <button
                                        onClick={() => handleDelete(archivo.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
