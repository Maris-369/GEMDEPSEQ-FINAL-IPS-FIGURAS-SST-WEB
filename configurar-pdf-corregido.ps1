# Script completo para renombrar PDF y actualizar cÃ³digo
# Ejecutar desde la raÃ­z del proyecto Gatsby

# 1. Detener el servidor Gatsby si estÃ¡ corriendo
Write-Host "Deteniendo servidor Gatsby si estÃ¡ corriendo..." -ForegroundColor Yellow
Get-Process | Where-Object {$_.ProcessName -eq "node" -and $_.CommandLine -like "*gatsby*"} | Stop-Process -Force -ErrorAction SilentlyContinue

# 2. Definir rutas y nombres
$archivoOriginal = "src/assets/documents/Estados Financieros 2024 2023 Supersalud y Policia 30MAYO - V2_copia.pdf"
$nuevoNombre = "estados-financieros-2024-2023.pdf"
$rutaDestino = "static/$nuevoNombre"

# 3. Verificar que existe el archivo original
if (Test-Path $archivoOriginal) {
    Write-Host "âœ“ Archivo original encontrado" -ForegroundColor Green
} else {
    Write-Host "âœ— No se encontrÃ³ el archivo original en: $archivoOriginal" -ForegroundColor Red
    Write-Host "Verificando otras ubicaciones posibles..." -ForegroundColor Yellow
    
    # Buscar el archivo en todo el proyecto
    $archivosEncontrados = Get-ChildItem -Recurse -Filter "*Estados Financieros*" -ErrorAction SilentlyContinue
    if ($archivosEncontrados) {
        Write-Host "Archivos encontrados:" -ForegroundColor Cyan
        $archivosEncontrados | ForEach-Object { Write-Host "  - $($_.FullName)" }
        $archivoOriginal = $archivosEncontrados[0].FullName
        Write-Host "Usando: $archivoOriginal" -ForegroundColor Green
    } else {
        Write-Host "No se encontrÃ³ ningÃºn archivo. Por favor, coloca el PDF en la carpeta del proyecto." -ForegroundColor Red
        exit 1
    }
}

# 4. Crear carpeta static si no existe
if (!(Test-Path "static")) {
    New-Item -ItemType Directory -Path "static" -Force
    Write-Host "âœ“ Carpeta static creada" -ForegroundColor Green
}

# 5. Copiar y renombrar el archivo
Copy-Item $archivoOriginal $rutaDestino -Force
Write-Host "âœ“ Archivo copiado a: $rutaDestino" -ForegroundColor Green

# 6. Buscar y actualizar archivos que referencien el PDF
Write-Host "Buscando archivos que referencien el PDF..." -ForegroundColor Yellow

# Patrones a buscar
$patronesABuscar = @(
    "Estados Financieros 2024 2023 Supersalud y Policia 30 MAYO-V2_copia.pdf",
    "estado-financiero.pdf",
    "/assets/documents/",
    "src/assets/documents/"
)

# Extensiones de archivos a revisar
$extensiones = @("*.js", "*.jsx", "*.ts", "*.tsx", "*.json", "*.md", "*.html")

foreach ($ext in $extensiones) {
    $archivos = Get-ChildItem -Recurse -Filter $ext -Exclude "node_modules" | Where-Object { $_.Directory.Name -ne "node_modules" }
    
    foreach ($archivo in $archivos) {
        $contenido = Get-Content $archivo.FullName -Raw -ErrorAction SilentlyContinue
        if ($contenido) {
            $contenidoOriginal = $contenido
            $modificado = $false
            
            # Reemplazar cada patrÃ³n
            foreach ($patron in $patronesABuscar) {
                if ($contenido -match [regex]::Escape($patron)) {
                    $contenido = $contenido -replace [regex]::Escape($patron), $nuevoNombre
                    $modificado = $true
                }
            }
            
            # Reemplazar rutas relativas comunes
            $contenido = $contenido -replace "src/assets/documents/[^""']*\.pdf", $nuevoNombre
            $contenido = $contenido -replace "/assets/documents/[^""']*\.pdf", "/$nuevoNombre"
            
            if ($contenido -ne $contenidoOriginal) {
                Set-Content -Path $archivo.FullName -Value $contenido -NoNewline
                Write-Host "âœ“ Actualizado: $($archivo.FullName)" -ForegroundColor Green
                $modificado = $true
            }
        }
    }
}

# 7. Crear/actualizar componente de descarga si existe
$componenteDescarga = @"
import React from 'react'
@

const DownloadPDF = ({ texto = "Descargar Estados Financieros", className = "" }) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/$nuevoNombre'
    link.download = '$nuevoNombre'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button 
      onClick={handleDownload}
      className={`download-btn `$className`}
      style={{
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
    >
      {texto}
    </button>
  )
}

export default DownloadPDF
"@

# Guardar componente
$rutaComponente = "src/components/DownloadPDF.js"
if (!(Test-Path "src/components")) {
    New-Item -ItemType Directory -Path "src/components" -Force
}
Set-Content -Path $rutaComponente -Value $componenteDescarga
Write-Host "âœ“ Componente DownloadPDF creado en: $rutaComponente" -ForegroundColor Green

# 8. Mostrar resumen
Write-Host "`n=== RESUMEN DE CAMBIOS ===" -ForegroundColor Cyan
Write-Host "âœ“ PDF renombrado a: $nuevoNombre" -ForegroundColor Green
Write-Host "âœ“ PDF movido a: static/$nuevoNombre" -ForegroundColor Green
Write-Host "âœ“ CÃ³digo actualizado automÃ¡ticamente" -ForegroundColor Green
Write-Host "âœ“ Componente DownloadPDF creado" -ForegroundColor Green

Write-Host "`n=== PRÃ“XIMOS PASOS ===" -ForegroundColor Cyan
Write-Host "1. Ejecutar: npx gatsby develop" -ForegroundColor Yellow
Write-Host "2. Verificar en: http://localhost:8000/$nuevoNombre" -ForegroundColor Yellow
Write-Host "3. Usar el componente DownloadPDF en tus pÃ¡ginas" -ForegroundColor Yellow
configurar-pdf.ps1
Write-Host "`n=== EJEMPLO DE USO ===" -ForegroundColor Cyan
Write-Host "import DownloadPDF from '../components/DownloadPDF'" -ForegroundColor White
Write-Host "<DownloadPDF texto='Descargar Estados Financieros' />" -ForegroundColor White

# 9. Comando para verificar
Write-Host "`n=== COMANDO DE VERIFICACIÃ“N ===" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri 'http://localhost:8000/$nuevoNombre -Method Head" -ForegroundColor White
