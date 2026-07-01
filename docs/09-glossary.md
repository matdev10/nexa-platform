# Nexa Platform

# Glossary

Versión: 1.0

Estado: Activo

---

# Objetivo

Este documento define el significado oficial de los conceptos utilizados en Nexa Platform.

Todo el equipo deberá utilizar esta terminología de manera consistente en el código, documentación y conversaciones.

---

# Organization

Una empresa, cliente o entidad que utiliza Nexa Platform.

Una organización posee:

- Usuarios
- Roles
- Permisos
- Módulos
- Configuración
- Datos

Ejemplo:

Organization

↓

Millwords

Organization

↓

Constructora XYZ

Organization

↓

Clínica San José

---

# Workspace

Entorno de trabajo activo de una organización.

Cuando un usuario selecciona una organización, comienza a trabajar dentro de su Workspace.

El Workspace determina:

- organización activa
- módulos disponibles
- configuración
- datos visibles

---

# User

Persona que inicia sesión en Nexa Platform.

Un usuario puede pertenecer a una o varias organizaciones.

---

# Role

Conjunto de responsabilidades asignadas a un usuario.

Ejemplos:

Administrador

Supervisor

Vendedor

Contador

Cliente

---

# Permission

Acción específica permitida dentro del sistema.

Ejemplos:

clients.read

clients.create

clients.update

clients.delete

---

# Module

Conjunto de funcionalidades relacionadas.

Ejemplos:

Clientes

Ventas

Inventario

Cotizaciones

Reportes

RRHH

Proyectos

Pagos

---

# Feature

Funcionalidad específica dentro de un módulo.

Ejemplo

Módulo:

Clientes

Features:

Crear cliente

Editar cliente

Eliminar cliente

Exportar clientes

---

# Dashboard

Pantalla principal del Workspace.

Muestra indicadores, actividad reciente y accesos rápidos.

---

# Client

Cliente perteneciente a una organización.

No debe confundirse con Organization.

Organization

↓

Empresa que usa Nexa

Client

↓

Cliente de esa empresa

---

# Quote

Documento comercial que representa una cotización.

Puede evolucionar posteriormente a:

Venta

Factura

Pedido

---

# Sale

Transacción comercial realizada por una organización.

---

# Inventory

Conjunto de productos y existencias pertenecientes a una organización.

---

# Project

Trabajo planificado dentro de una organización.

Especialmente útil para agencias y empresas de servicios.

---

# Payment

Registro de pagos recibidos o realizados.

---

# Report

Información analítica generada por uno o varios módulos.

---

# Authentication

Proceso mediante el cual un usuario demuestra su identidad.

---

# Authorization

Proceso mediante el cual Nexa determina qué acciones puede realizar un usuario.

---

# Core

Conjunto de componentes fundamentales de Nexa Platform.

Incluye:

Autenticación

Organizaciones

Usuarios

Roles

Permisos

Configuración

Layout

---

# Shared

Componentes reutilizables por toda la plataforma.

Ejemplos:

Botones

Tablas

Inputs

Cards

Modales

Alertas

---

# Feature Module

Módulo funcional independiente.

Ejemplos:

Clientes

Ventas

Inventario

Reportes

---

# SaaS

Software as a Service.

Modelo donde múltiples organizaciones utilizan la misma plataforma de forma segura e independiente.

---

# Multi-Tenant

Arquitectura donde una única plataforma atiende múltiples organizaciones, manteniendo completamente separados sus datos, configuraciones y usuarios.

Cada Organization representa un Tenant.

---

# API

Conjunto de servicios que permiten la comunicación entre el frontend y el backend.

---

# Sprint

Periodo de desarrollo con un objetivo específico.

Cada Sprint debe producir un incremento funcional de la plataforma.

---

# Definición de "Hecho"

Una funcionalidad se considera terminada cuando:

- Está implementada.
- Está documentada.
- Respeta la arquitectura.
- Fue probada.
- Está lista para integrarse con el resto de la plataforma.