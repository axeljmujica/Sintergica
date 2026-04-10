---
description: Pasos y consideraciones para el despliegue de la plataforma SaaS
---

# Flujo de Despliegue (SaaS)

Este flujo describe los pasos y consideraciones para desplegar la plataforma SaaS. El sistema está diseñado para soportar múltiples modelos (incluyendo planes multi-tenant y single-tenant).

## 1. Preparación del Entorno
- Verificar todas las variables de entorno necesarias para producción (ej. en Vercel, AWS, etc.).
- Asegurar que la configuración de la base de datos es compatible con el modelo de tenencia (manejo adecuado de `tenant_id` o instancias dedicadas).

## 2. Validaciones Locales
Asegúrate de que el código compila correctamente y pasa las reglas de linting:
```bash
npm run lint
npm run build
```

## 3. Construcción (Build)
Generar la versión de producción optimizada:
// turbo
npm run build

## 4. Despliegue
- Empujar los cambios a la rama de producción (ej. `main` o `production`) para desencadenar el pipeline de CI/CD.
- Ejecutar migraciones de base de datos de manera segura si hay cambios en el esquema.

## 5. Verificación Post-Despliegue
- Validar el enrutamiento y acceso correcto según el tenant.
- Verificar el funcionamiento general de la plataforma SaaS y los límites de cada plan.