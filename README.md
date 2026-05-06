# 🔐 Sistema de Registro y Login

Aplicación web básica para **registro, autenticación y gestión de usuarios** utilizando **JavaScript puro** y **localStorage** como almacenamiento.

## 🚀 Características

* ✔️ Registro de usuarios con ID automático
* ✔️ Inicio de sesión con validación de credenciales
* ✔️ Límite de intentos de login
* ✔️ Persistencia de datos en el navegador
* ✔️ Visualización de usuarios registrados
* ✔️ Edición y eliminación de usuarios

## 🖥️ Demo

> Proyecto ejecutado directamente en el navegador (sin backend)

## 📂 Archivos principales

* `login.js` → Manejo de autenticación
* `register.js` → Registro de usuarios
* `successful_registration.js` → Gestión de usuarios

## 💾 Almacenamiento

Los datos se guardan en el navegador usando:

* `localStorage`

  * `usuarios`
  * `ultimoIdRegistrado`

## ⚠️ Limitaciones

* ❌ Contraseñas sin encriptar
* ❌ Login no conectado a usuarios registrados
* ❌ Sin backend ni base de datos real
* ❌ Validaciones básicas

## 🛠️ Mejoras futuras

* 🔒 Encriptación de contraseñas
* 🔗 Integración completa del login con `localStorage`
* 🎨 Mejora de interfaz
* 🌐 Implementación de backend
* 🔐 Manejo de sesiones

## 📚 Tecnologías

* JavaScript (Vanilla)
* HTML5
* Web Storage API

## 📄 Licencia

Este proyecto está bajo la licencia MIT