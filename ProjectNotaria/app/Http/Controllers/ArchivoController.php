<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Archivo;
use Illuminate\Support\Facades\Storage;

class ArchivoController extends Controller
{
    // Almacenar archivo
    public function store(Request $request)
    {
        $request->validate([
            'archivo' => 'required|mimes:pdf,doc,docx,jpg,jpeg,png|max:20480', // 20 MB máx
        ]);
        

        $archivo = $request->file('archivo');
        $path = $archivo->store('archivos', 'public'); // Guardamos el archivo en 'storage/app/public/archivos'

        $archivoGuardado = new Archivo();
        $archivoGuardado->nombre = $archivo->getClientOriginalName();
        $archivoGuardado->tipo = $archivo->getClientMimeType();
        $archivoGuardado->url = asset('storage/' . $path); // El URL del archivo
        $archivoGuardado->save();

        return redirect()->back()->with('success', 'Archivo subido correctamente.');
    }

    // Eliminar archivo
    public function delete($id)
    {
        $archivo = Archivo::findOrFail($id);
        $archivoPath = str_replace(asset('storage/'), '', $archivo->url);
        
        // Eliminar el archivo físico
        Storage::disk('public')->delete($archivoPath);
        
        // Eliminar el registro de la base de datos
        $archivo->delete();

        return redirect()->back()->with('success', 'Archivo eliminado correctamente.');
    }
}