# Nexa Platform

# System Architecture

Versión: 1.0

Estado: Activo

---

# Objetivo

Este documento describe la arquitectura general de Nexa Platform.

La plataforma está compuesta por distintos bloques independientes que trabajan en conjunto.

---

# Arquitectura General

                    Internet
                         │
                         ▼
                 Nexa Frontend
                    (Angular)
                         │
                    REST API
                         │
                         ▼
                Nexa Backend
                 (.NET Web API)
                         │
─────────────────────────┼────────────────────────
                         │
         Authentication Services
         Organization Services
         User Services
         Module Services
         Audit Services
                         │
                         ▼
                   SQL Server
                         │
─────────────────────────┼────────────────────────
                         │
                 External Integrations

 Mercado Pago

 Stripe

 Google

 Microsoft

 WhatsApp

 Shopify

 OpenAI

 Dropbox

 APIs Externas

---

# Capas

## Frontend

Responsabilidades

- Mostrar información
- Validaciones básicas
- Navegación
- Consumo de APIs

Nunca contiene lógica de negocio.

---

## Backend

Responsabilidades

- Lógica de negocio
- Seguridad
- Validaciones
- Permisos
- Integraciones

---

## Base de datos

Responsabilidades

- Persistencia
- Relaciones
- Integridad

---

## Integraciones

Responsabilidades

Conectar Nexa con plataformas externas.

---

# Flujo de una petición

Usuario

↓

Angular

↓

API

↓

Servicio

↓

Base de datos

↓

Respuesta

↓

Angular

↓

Usuario

---

# Arquitectura SaaS

Una sola plataforma.

Múltiples organizaciones.

Cada organización mantiene completamente separados:

- usuarios
- clientes
- ventas
- inventario
- reportes
- configuración

---

# Principio

Todo pasa por el Core.

Nada accede directamente a la base de datos desde el Frontend.