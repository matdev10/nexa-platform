# Nexa Platform

# Domain Model

Versión: 1.0

Estado: Activo

---

# Dominio principal

Todo en Nexa gira alrededor de una Organización.

```

Usuario

↓

Organización

↓

Workspace

↓

Módulos

↓

Datos

```

---

# Organization

Representa una empresa registrada en Nexa.

Puede ser:

- Agencia
- Ecommerce
- Constructora
- Clínica
- Restaurante
- Empresa de servicios
- Startup

Cada organización posee:

- Usuarios
- Configuración
- Módulos
- Datos
- Suscripción

---

# User

Persona que utiliza Nexa.

Un usuario puede pertenecer a múltiples organizaciones.

Ejemplo

Matías

↓

Millwords

↓

Administrador

↓

Zeezton

↓

Supervisor

↓

Constructora XYZ

↓

Invitado

---

# Workspace

Es el contexto activo.

Todo lo que el usuario visualiza pertenece únicamente al Workspace seleccionado.

---

# Module

Cada módulo representa una funcionalidad.

Ejemplos

Dashboard

Clientes

Cotizaciones

Ventas

Inventario

Proyectos

RRHH

Pagos

Reportes

IA

---

# Subscription

Representa el plan contratado.

Ejemplo

Free

Starter

Business

Enterprise

---

# Role

Agrupa permisos.

Ejemplos

Administrador

Supervisor

Vendedor

Bodega

RRHH

Contabilidad

---

# Permission

Permiso específico.

Ejemplo

clientes.crear

clientes.editar

ventas.aprobar

inventario.eliminar

---

# Client

Cliente perteneciente a una organización.

Nunca pertenece a Nexa.

Pertenece exclusivamente a la organización.

---

# Quote

Cotización comercial.

Puede transformarse posteriormente en:

Venta

Factura

Pedido

---

# Product

Producto perteneciente a una organización.

No existe catálogo global.

Cada organización administra su propio inventario.

---

# Sale

Venta realizada por una organización.

---

# Dashboard

Vista principal de cada Workspace.

Sus métricas cambian según:

- Organización
- Módulos
- Permisos

---

# Configuración

Cada organización posee su propia configuración.

Ejemplo

Logo

Nombre

Colores

Idioma

Moneda

Zona horaria

Formato de fecha

---

# Regla principal

Nada existe fuera de una Organización.

Toda entidad pertenece a una Organización.