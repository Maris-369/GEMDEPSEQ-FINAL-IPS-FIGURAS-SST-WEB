# Configurador de PDF - Versión Corregida y Funcional
param(
    [string]$nombrePDF = "estados-financieros-2024.pdf"
)

Write-Host "=== CONFIGURADOR DE PDF PARA WEB ===" -ForegroundColor Cyan
Write-Host "Archivo objetivo: $nombrePDF" -ForegroundColor White

# 1. Verificar que el PDF existe
if (!(Test-Path $nombrePDF)) {
    Write-Host "`nError: El archivo '$nombrePDF' no existe en el directorio actual" -ForegroundColor Red
    Write-Host "Archivos PDF encontrados:" -ForegroundColor Yellow
    
    $pdfFiles = Get-ChildItem -Filter "*.pdf" | Select-Object -ExpandProperty Name
    if ($pdfFiles.Count -gt 0) {
        foreach ($pdf in $pdfFiles) {
            Write-Host "  - $pdf" -ForegroundColor White
        }
        Write-Host "`nEjecuta el script con uno de estos archivos:" -ForegroundColor Yellow
        Write-Host "  .\configurar-pdf.ps1 -nombrePDF 'nombre-del-archivo.pdf'" -ForegroundColor White
    } else {
        Write-Host "  No se encontraron archivos PDF en este directorio" -ForegroundColor Red
    }
    exit 1
}

# 2. Definir el nuevo nombre (sanitizado para web)
$nuevoNombre = $nombrePDF -replace '[^a-zA-Z0-9.-]', '-'
Write-Host "Nombre web: $nuevoNombre" -ForegroundColor Green

# 3. Crear directorio public si no existe
if (!(Test-Path "public")) {
    New-Item -ItemType Directory -Path "public" -Force | Out-Null
    Write-Host "Directorio 'public' creado" -ForegroundColor Green
}

# 4. Copiar PDF al directorio public
try {
    Copy-Item $nombrePDF "public/$nuevoNombre" -Force
    Write-Host "PDF copiado exitosamente a: public/$nuevoNombre" -ForegroundColor Green
} catch {
    Write-Host "Error al copiar el PDF: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# 5. Verificar/crear package.json
$packageJsonPath = "package.json"
if (Test-Path $packageJsonPath) {
    try {
        $packageContent = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
        
        # Asegurar que existe la sección scripts
        if (-not $packageContent.scripts) {
            $packageContent | Add-Member -Name "scripts" -Value @{} -MemberType NoteProperty
        }
        
        # Agregar script de desarrollo si no existe
        if (-not $packageContent.scripts.dev) {
            $packageContent.scripts | Add-Member -Name "dev" -Value "next dev" -MemberType NoteProperty
        }
        
        # Agregar script de servidor estático si no existe
        if (-not $packageContent.scripts.serve) {
            $packageContent.scripts | Add-Member -Name "serve" -Value "python -m http.server 8000" -MemberType NoteProperty
        }
        
        $packageContent | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath -Encoding UTF8
        Write-Host "package.json actualizado" -ForegroundColor Green
    } catch {
        Write-Host "Advertencia: No se pudo actualizar package.json: $($_.Exception.Message)" -ForegroundColor Yellow
    }
} else {
    Write-Host "package.json no encontrado - creando uno básico" -ForegroundColor Yellow
    $basicPackage = @{
        name = "pdf-web-server"
        version = "1.0.0"
        scripts = @{
            dev = "next dev"
            serve = "python -m http.server 8000"
        }
    }
    $basicPackage | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath -Encoding UTF8
    Write-Host "package.json creado" -ForegroundColor Green
}

# 6. Crear directorio de componentes
$dirComponentes = "src/components"
if (!(Test-Path $dirComponentes)) {
    New-Item -ItemType Directory -Path $dirComponentes -Force | Out-Null
    Write-Host "Directorio '$dirComponentes' creado" -ForegroundColor Green
}

# 7. Crear componente de descarga React
$componenteDescarga = @'
import React from 'react';

const DownloadPDF = ({ 
  texto = "Descargar Estados Financieros", 
  className = "",
  pdfName = "estados-financieros-2024.pdf"
}) => {
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = `/${pdfName}`;
      link.download = pdfName;
      link.target = '_blank';
      
      // Agregar al DOM temporalmente para Firefox
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`Descarga iniciada: ${pdfName}`);
    } catch (error) {
      console.error('Error al descargar:', error);
      // Fallback: abrir en nueva ventana
      window.open(`/${pdfName}`, '_blank');
    }
  };

  const handleView = () => {
    window.open(`/${pdfName}`, '_blank');
  };

  return (
    <div className={`pdf-download-component ${className}`}>
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-200"
        title={`Descargar ${pdfName}`}
      >
        📥 {texto}
      </button>
      <button
        onClick={handleView}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        title={`Ver ${pdfName}`}
      >
        👁️ Ver PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
'@

# 8. Guardar componente
$rutaComponente = "$dirComponentes/DownloadPDF.js"
try {
    Set-Content -Path $rutaComponente -Value $componenteDescarga -Encoding UTF8
    Write-Host "Componente React creado en: $rutaComponente" -ForegroundColor Green
} catch {
    Write-Host "Error al crear el componente: $($_.Exception.Message)" -ForegroundColor Red
}

# 9. Crear página de ejemplo
$paginaEjemplo = @"
import React from 'react';
import DownloadPDF from '../components/DownloadPDF';

const HomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Estados Financieros - IPS Figuras SST
      </h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Documentos Disponibles</h2>
        
        <div className="space-y-4">
          <DownloadPDF 
            texto="Descargar Estados Financieros 2024"
            pdfName="$nuevoNombre"
            className="w-full"
          />
          
          <div className="text-sm text-gray-600">
            <p>📄 Archivo: $nuevoNombre</p>
            <p>🌐 URL: <code>http://localhost:8000/$nuevoNombre</code></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
"@

# 10. Guardar página de ejemplo
$rutaPagina = "src/pages/index.js"
if (!(Test-Path "src/pages")) {
    New-Item -ItemType Directory -Path "src/pages" -Force | Out-Null
}

try {
    Set-Content -Path $rutaPagina -Value $paginaEjemplo -Encoding UTF8
    Write-Host "Página de ejemplo creada en: $rutaPagina" -ForegroundColor Green
} catch {
    Write-Host "Advertencia: No se pudo crear la página de ejemplo" -ForegroundColor Yellow
}

# 11. Crear script de servidor simple
$scriptServidor = @'
#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000
os.chdir('public')

Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor iniciado en http://localhost:{PORT}")
    print("Presiona Ctrl+C para detener")
    httpd.serve_forever()
'@

Set-Content -Path "servidor.py" -Value $scriptServidor -Encoding UTF8
Write-Host "Script de servidor creado: servidor.py" -ForegroundColor Green

# 12. Mostrar resumen final
Write-Host "`n=== CONFIGURACIÓN COMPLETADA EXITOSAMENTE ===" -ForegroundColor Cyan
Write-Host "✅ PDF copiado a: public/$nuevoNombre" -ForegroundColor Green
Write-Host "✅ Componente React: $rutaComponente" -ForegroundColor Green
Write-Host "✅ Página de ejemplo: $rutaPagina" -ForegroundColor Green

Write-Host "`n=== INSTRUCCIONES DE USO ===" -ForegroundColor Yellow
Write-Host "1. Iniciar servidor:" -ForegroundColor White
Write-Host "   python servidor.py" -ForegroundColor Gray
Write-Host "   # O alternativamente:" -ForegroundColor Gray
Write-Host "   cd public && python -m http.server 8000" -ForegroundColor Gray

Write-Host "`n2. Acceder al PDF:" -ForegroundColor White
Write-Host "   URL: http://localhost:8000/$nuevoNombre" -ForegroundColor Gray

Write-Host "`n3. Usar en React:" -ForegroundColor White
Write-Host "   import DownloadPDF from '../components/DownloadPDF';" -ForegroundColor Gray
Write-Host "   <DownloadPDF texto='Descargar PDF' pdfName='$nuevoNombre' />" -ForegroundColor Gray

Write-Host "`n=== COMANDOS DE VERIFICACIÓN ===" -ForegroundColor Cyan
Write-Host "# Verificar que el archivo existe:" -ForegroundColor White
Write-Host "Test-Path 'public/$nuevoNombre'" -ForegroundColor Gray

Write-Host "`n# Probar acceso HTTP:" -ForegroundColor White
Write-Host "Invoke-WebRequest -Uri 'http://localhost:8000/$nuevoNombre' -Method Head" -ForegroundColor Gray

Write-Host "`n# Ver información del archivo:" -ForegroundColor White
Write-Host "Get-Item 'public/$nuevoNombre' | Format-List Name,Length,LastWriteTime" -ForegroundColor Gray

Write-Host "`n🎉 ¡Configuración completa!" -ForegroundColor Green
# Script de Diagnóstico para Errores de PowerShell
# Analiza y corrige problemas comunes en scripts de PowerShell

param(
    [string]$ArchivoScript = "configurar-pdf.ps1"
)

Write-Host "=== DIAGNÓSTICO DE SCRIPT POWERSHELL ===" -ForegroundColor Cyan
Write-Host "Analizando: $ArchivoScript" -ForegroundColor White

# 1. Verificar que el archivo existe
if (!(Test-Path $ArchivoScript)) {
    Write-Host "❌ Error: El archivo '$ArchivoScript' no existe" -ForegroundColor Red
    Write-Host "Archivos .ps1 disponibles:" -ForegroundColor Yellow
    Get-ChildItem -Filter "*.ps1" | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }
    exit 1
}

Write-Host "✅ Archivo encontrado" -ForegroundColor Green

# 2. Leer contenido del archivo
try {
    $contenido = Get-Content $ArchivoScript -Raw -Encoding UTF8
    Write-Host "✅ Contenido leído correctamente" -ForegroundColor Green
} catch {
    Write-Host "❌ Error al leer el archivo: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# 3. Verificar sintaxis básica con PSParser
Write-Host "`n=== VERIFICACIÓN DE SINTAXIS ===" -ForegroundColor Cyan
try {
    $tokens = $null
    $errors = $null
    $ast = [System.Management.Automation.Language.Parser]::ParseInput($contenido, [ref]$tokens, [ref]$errors)
    
    if ($errors.Count -eq 0) {
        Write-Host "✅ Sintaxis correcta" -ForegroundColor Green
    } else {
        Write-Host "❌ Errores de sintaxis encontrados:" -ForegroundColor Red
        foreach ($error in $errors) {
            Write-Host "  Línea $($error.Extent.StartLineNumber): $($error.Message)" -ForegroundColor Yellow
        }
    }
} catch {
    Write-Host "❌ Error en análisis de sintaxis: $($_.Exception.Message)" -ForegroundColor Red
}

# 4. Verificar balance de llaves
Write-Host "`n=== VERIFICACIÓN DE LLAVES ===" -ForegroundColor Cyan
$llaves_apertura = ($contenido.ToCharArray() | Where-Object {$_ -eq '{'}).Count
$llaves_cierre = ($contenido.ToCharArray() | Where-Object {$_ -eq '}'}).Count

Write-Host "Llaves de apertura: $llaves_apertura" -ForegroundColor White
Write-Host "Llaves de cierre: $llaves_cierre" -ForegroundColor White

if ($llaves_apertura -eq $llaves_cierre) {
    Write-Host "✅ Llaves balanceadas" -ForegroundColor Green
} else {
    Write-Host "❌ Llaves desbalanceadas" -ForegroundColor Red
}

# 5. Verificar balance de comillas
Write-Host "`n=== VERIFICACIÓN DE COMILLAS ===" -ForegroundColor Cyan
$lineas = Get-Content $ArchivoScript
$lineasProblematicas = @()

for ($i = 0; $i -lt $lineas.Count; $i++) {
    $linea = $lineas[$i]
    
    # Contar comillas dobles (excluyendo here-strings)
    if ($linea -notmatch '^\s*@"' -and $linea -notmatch '^\s*"@\s*$') {
        $comillasDobles = ($linea.ToCharArray() | Where-Object {$_ -eq '"'}).Count
        if ($comillasDobles % 2 -ne 0) {
            $lineasProblematicas += @{
                Numero = $i + 1
                Contenido = $linea
                Tipo = "Comillas dobles desbalanceadas"
            }
        }
    }
    
    # Contar comillas simples
    $comillasSimples = ($linea.ToCharArray() | Where-Object {$_ -eq "'"}).Count
    if ($comillasSimples % 2 -ne 0) {
        $lineasProblematicas += @{
            Numero = $i + 1
            Contenido = $linea
            Tipo = "Comillas simples desbalanceadas"
        }
    }
}

if ($lineasProblematicas.Count -eq 0) {
    Write-Host "✅ Comillas balanceadas" -ForegroundColor Green
} else {
    Write-Host "❌ Problemas con comillas encontrados:" -ForegroundColor Red
    foreach ($problema in $lineasProblematicas) {
        Write-Host "  Línea $($problema.Numero): $($problema.Tipo)" -ForegroundColor Yellow
        Write-Host "    $($problema.Contenido)" -ForegroundColor Gray
    }
}

# 6. Verificar here-strings
Write-Host "`n=== VERIFICACIÓN DE HERE-STRINGS ===" -ForegroundColor Cyan
$enHereString = $false
$inicioHereString = 0

for ($i = 0; $i -lt $lineas.Count; $i++) {
    $linea = $lineas[$i]
    
    if ($linea -match '^\s*@"') {
        if ($enHereString) {
            Write-Host "❌ Here-string anidado en línea $($i + 1)" -ForegroundColor Red
        } else {
            $enHereString = $true
            $inicioHereString = $i + 1
        }
    }
    
    if ($linea -match '^\s*"@\s*$') {
        if ($enHereString) {
            $enHereString = $false
            Write-Host "✅ Here-string válido: líneas $inicioHereString-$($i + 1)" -ForegroundColor Green
        } else {
            Write-Host "❌ Cierre de here-string sin apertura en línea $($i + 1)" -ForegroundColor Red
        }
    }
}

if ($enHereString) {
    Write-Host "❌ Here-string sin cerrar iniciado en línea $inicioHereString" -ForegroundColor Red
}

# 7. Verificar caracteres problemáticos
Write-Host "`n=== VERIFICACIÓN DE CARACTERES ===" -ForegroundColor Cyan
$caracteresProblematicos = @()

for ($i = 0; $i -lt $lineas.Count; $i++) {
    $linea = $lineas[$i]
    
    # Buscar caracteres no ASCII que pueden causar problemas
    if ($linea -match '[^\x00-\x7F]') {
        $caracteresProblematicos += @{
            Numero = $i + 1
            Contenido = $linea
        }
    }
}

if ($caracteresProblematicos.Count -eq 0) {
    Write-Host "✅ No se encontraron caracteres problemáticos" -ForegroundColor Green
} else {
    Write-Host "⚠️ Caracteres no ASCII encontrados:" -ForegroundColor Yellow
    foreach ($problema in $caracteresProblematicos) {
        Write-Host "  Línea $($problema.Numero): $($problema.Contenido)" -ForegroundColor Gray
    }
}

# 8. Generar reporte de resumen
Write-Host "`n=== RESUMEN DEL DIAGNÓSTICO ===" -ForegroundColor Cyan
$totalErrores = 0

if ($errors.Count -gt 0) { $totalErrores += $errors.Count }
if ($llaves_apertura -ne $llaves_cierre) { $totalErrores += 1 }
if ($lineasProblematicas.Count -gt 0) { $totalErrores += $lineasProblematicas.Count }

Write-Host "Total de problemas encontrados: $totalErrores" -ForegroundColor White

if ($totalErrores -eq 0) {
    Write-Host "🎉 ¡El script parece estar correcto!" -ForegroundColor Green
} else {
    Write-Host "🔧 Se requieren correcciones" -ForegroundColor Yellow
    
    # Ofrecer crear una versión corregida
    Write-Host "`n¿Deseas crear una versión corregida automáticamente? (S/N)" -ForegroundColor Cyan
    $respuesta = Read-Host
    
    if ($respuesta -eq 'S' -or $respuesta -eq 's' -or $respuesta -eq 'Y' -or $respuesta -eq 'y') {
        Write-Host "Creando versión corregida..." -ForegroundColor Yellow
        
        # Crear backup
        $backupFile = "$ArchivoScript.backup"
        Copy-Item $ArchivoScript $backupFile
        Write-Host "✅ Backup creado: $backupFile" -ForegroundColor Green
        
        # Aplicar correcciones básicas
        $contenidoCorregido = $contenido
        
        # Corregir codificación
        $contenidoCorregido = $contenidoCorregido -replace '[^\x00-\x7F]', ''
        
        # Guardar versión corregida
        $archivoCorregido = $ArchivoScript -replace '\.ps1$', '-corregido.ps1'
        Set-Content -Path $archivoCorregido -Value $contenidoCorregido -Encoding UTF8
        Write-Host "✅ Versión corregida guardada: $archivoCorregido" -ForegroundColor Green
    }
}

Write-Host "`n=== COMANDOS ÚTILES ===" -ForegroundColor Cyan
Write-Host "# Verificar sintaxis manualmente:" -ForegroundColor White
Write-Host "Get-Command -Syntax $ArchivoScript" -ForegroundColor Gray

Write-Host "`n# Ejecutar con depuración:" -ForegroundColor White
Write-Host "PowerShell -File $ArchivoScript -Verbose" -ForegroundColor Gray

Write-Host "`n# Ver encoding del archivo:" -ForegroundColor White
Write-Host "Get-Content $ArchivoScript -Encoding UTF8 | Out-String" -ForegroundColor Gray