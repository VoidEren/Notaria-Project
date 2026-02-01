import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Registro" />

            <div className="w-full max-w-3xl bg-[#1a1a1a]/60 backdrop-blur-md rounded-2xl px-10 py-8 shadow-2xl border border-gray-700 mx-4 sm:mx-auto mt-10 text-white">
                <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400">
                    Crea tu cuenta
                </h2>
                <p className="text-gray-400 text-center mb-6">
                    Únete a nuestra plataforma y gestiona tus trámites fácilmente.
                </p>

                <form onSubmit={submit} className="space-y-5">
                    {/* Nombre */}
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" className="text-gray-300" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full bg-gray-900 border-gray-600 text-white"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2 text-red-400" />
                    </div>

                    {/* Correo electrónico */}
                    <div>
                        <InputLabel htmlFor="email" value="Correo electrónico" className="text-gray-300" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full bg-gray-900 border-gray-600 text-white"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2 text-red-400" />
                    </div>

                    {/* Contraseña */}
                    <div>
                        <InputLabel htmlFor="password" value="Contraseña" className="text-gray-300" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full bg-gray-900 border-gray-600 text-white"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2 text-red-400" />
                    </div>

                    {/* Confirmar contraseña */}
                    <div>
                        <InputLabel htmlFor="password_confirmation" value="Confirmar contraseña" className="text-gray-300" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full bg-gray-900 border-gray-600 text-white"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2 text-red-400" />
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center justify-between mt-6">
                        <Link
                            href={route('login')}
                            className="text-sm text-cyan-400 hover:underline"
                        >
                            ¿Ya tienes cuenta?
                        </Link>

                        <PrimaryButton
                            className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition duration-150"
                            disabled={processing}
                        >
                            {processing ? 'Registrando...' : 'Registrar'}
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        href={route('home')}
                        className="text-sm text-gray-400 hover:text-white hover:underline"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
