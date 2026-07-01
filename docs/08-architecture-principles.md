# Nexa Platform

# Architecture Principles

Versión: 1.0

---

# Objetivo

Este documento define las reglas arquitectónicas que deberán respetarse durante todo el desarrollo de Nexa Platform.

Estas reglas existen para mantener un sistema escalable, mantenible y preparado para crecer durante muchos años.

---

# Regla 1

Nexa nunca se desarrollará pensando en una empresa específica.

Toda funcionalidad deberá servir para cualquier organización.

---

# Regla 2

Cada organización tendrá sus propios datos.

Toda consulta deberá considerar siempre la organización activa.

Ejemplo

Usuario
↓

Organización

↓

Clientes

↓

Ventas

↓

Cotizaciones

Nunca podrán mezclarse datos entre organizaciones.

---

# Regla 3

Todo será modular.

Cada módulo podrá instalarse, deshabilitarse o eliminarse sin afectar al resto del sistema.

Ejemplo

Clientes

Ventas

Inventario

RRHH

CRM

Tickets

IA

Todos deberán funcionar como módulos independientes.

---

# Regla 4

No existirá lógica de negocio en los componentes visuales.

Los componentes únicamente mostrarán información.

Toda la lógica irá en:

- Services
- Use Cases (Backend)
- Domain

---

# Regla 5

Todo componente reutilizable deberá vivir en Shared.

Ejemplos

Botones

Inputs

Cards

Modales

Tablas

Alertas

Badges

---

# Regla 6

Todo servicio global deberá vivir en Core.

Ejemplos

Autenticación

Usuario

Organización

Permisos

Configuración

Tema

Idiomas

Layout

---

# Regla 7

Los módulos no podrán depender entre sí.

Incorrecto

Clientes
↓

Ventas

↓

Inventario

Correcto

Clientes

↓

Core

↓

Ventas

↓

Core

↓

Inventario

Core será el intermediario.

---

# Regla 8

Toda comunicación deberá realizarse mediante APIs.

Nunca acceder directamente a la base de datos desde el Frontend.

---

# Regla 9

Toda funcionalidad nueva deberá documentarse antes de desarrollarse.

Proceso

Idea

↓

Documento

↓

Diseño

↓

Implementación

↓

Pruebas

---

# Regla 10

Todo módulo deberá tener:

README.md

Roadmap

Modelos

Servicios

Pantallas

Permisos

Endpoints

---

# Regla 11

El nombre de una carpeta debe representar un dominio del negocio.

Ejemplo

features/

clientes/

ventas/

inventario/

crm/

rrhh/

reportes/

Nunca

pantalla1/

pagina2/

nuevo/

prueba/

---

# Regla 12

No habrá código duplicado.

Si una lógica se repite dos veces deberá convertirse en un servicio reutilizable.

---

# Regla 13

Las organizaciones serán el centro de la plataforma.

Todo pertenece a una organización.

Usuario

↓

Organización

↓

Workspace

↓

Módulos

↓

Datos

---

# Regla 14

Toda funcionalidad deberá ser escalable.

Antes de escribir código debemos preguntarnos:

¿Funcionará igual cuando existan 10.000 organizaciones?

Si la respuesta es no, debemos replantear el diseño.

---

# Regla 15

Nexa será una plataforma SaaS.

No un ERP tradicional.

La diferencia es que una organización crea su cuenta y construye su propio sistema.

No existen instalaciones individuales para cada cliente.

Todos utilizan la misma plataforma.

---

# Nuestro principio más importante

Es mejor dedicar una hora a diseñar una arquitectura correcta que una semana corrigiendo una arquitectura incorrecta.

La calidad de Nexa dependerá más de sus decisiones de diseño que de la cantidad de código escrito.