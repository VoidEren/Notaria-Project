import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Recuperar Contraseña" />

            <div className="flex w-full max-w-4xl mt-12 border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white mx-4 sm:mx-auto">
                {/* Columna de contenido */}
                <div className="w-full p-8">
                    {/* Título */}
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                        ¿Olvidaste tu contraseña?
                    </h2>

                    {/* Descripción */}
                    <p className="text-gray-600 mb-6">
                        No hay problema. Solo indícanos tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                    </p>

                    {/* Estado (si existe) */}
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    {/* Formulario */}
                    <form onSubmit={submit}>
                        {/* Correo electrónico */}
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* Botón de envío */}
                        <div className="flex items-center justify-end mt-6">
                            <PrimaryButton
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-150"
                                disabled={processing}
                            >
                                {processing ? 'Enviando enlace...' : 'Enviar enlace de recuperación'}
                            </PrimaryButton>
                        </div>

                        {/* Enlace para volver al inicio de sesión */}
                        <div className="mt-4 text-center">
                            <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Volver al inicio de sesión
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
