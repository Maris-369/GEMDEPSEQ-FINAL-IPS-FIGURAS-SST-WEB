# Script para corregir here-strings mal formateados
$contenido = Get-Content ".\configurar-pdf.ps1" -Raw

# Buscar y corregir here-strings problemáticos
$contenido = $contenido -replace '@"([^"@]*)"@', '`"$1`"'

# Guardar corrección
Set-Content -Path ".\configurar-pdf-corregido.ps1" -Value $contenido -Encoding UTF8

Write-Host "Archivo corregido guardado como: configurar-pdf-corregido.ps1" -ForegroundColor Green
