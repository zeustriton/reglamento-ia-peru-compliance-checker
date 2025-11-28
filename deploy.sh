#!/bin/bash

# Script de deploy para Vercel
# RIA Compliance Checker - Reglamento de Inteligencia Artificial del Perú

echo "🚀 Iniciando deploy de RIA Compliance Checker a Vercel..."

# Verificar que no haya variables de entorno innecesarias
echo "📋 Verificando configuración..."

# Limpiar cache de Next.js
echo "🧹 Limpiando cache..."
rm -rf .next

# Build para producción
echo "🔨 Construyendo para producción..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
    echo "🌐 Desplegando a Vercel..."
    vercel --prod
else
    echo "❌ Error en el build"
    exit 1
fi