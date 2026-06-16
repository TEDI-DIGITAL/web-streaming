# 🚀 Web Streaming - TEDI DIGITAL

Sitio web desarrollado para promocionar y mostrar servicios digitales de streaming.

## 🌐 Sitio Web

https://tedi-digital.github.io/web-streaming/

---

# 📁 Estructura del Proyecto

```txt
web-streaming/
│
├── assets/
│   └── img/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

# 🛠 Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* GitHub Pages

---

# 🔗 Repositorio

```bash
https://github.com/TEDI-DIGITAL/web-streaming.git
```

---

# 📥 Clonar el Proyecto

```bash
git clone https://github.com/TEDI-DIGITAL/web-streaming.git
```

Entrar a la carpeta:

```bash
cd web-streaming
```

---

# 🚀 Flujo de Trabajo con Git

## Ver el estado del proyecto

```bash
git status
```

Este comando muestra:

* Archivos modificados
* Archivos nuevos
* Archivos listos para subir
* Si el proyecto está sincronizado con GitHub

---

## Caso 1: Todo está actualizado

```bash
git status
```

Resultado:

```txt
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Significa:

✅ No hay cambios pendientes.

✅ Todo está sincronizado con GitHub.

---

## Caso 2: Hay archivos modificados

Ejemplo:

```txt
modified: index.html
modified: styles.css
```

Significa:

🟡 Detectó cambios en esos archivos.

🟡 Aún no están listos para subir.

---

## Preparar archivos para el commit

```bash
git add .
```

Este comando agrega todos los cambios al área de preparación (staging).

---

## Verificar nuevamente

```bash
git status
```

Resultado:

```txt
Changes to be committed:

modified: index.html
modified: styles.css
```

Significa:

🟢 Los cambios están listos para guardarse.

---

## Crear un Commit

```bash
git commit -m "Actualización del diseño"
```

Ejemplos:

```bash
git commit -m "Cambié colores"
git commit -m "Corregí errores"
git commit -m "Agregué nuevas tarjetas"
git commit -m "Mejoré el responsive"
```

Un commit es una versión guardada del proyecto.

---

## Subir cambios a GitHub

```bash
git push
```

Este comando envía los commits al repositorio remoto.

---

## Flujo Completo

Cada vez que hagas cambios:

```bash
git status
git add .
git commit -m "Descripción de los cambios"
git push
```

Ejemplo:

```bash
git status
git add .
git commit -m "Actualización de precios"
git push
```

---

# 📌 Comandos Útiles

### Ver repositorio conectado

```bash
git remote -v
```

Resultado esperado:

```txt
origin  https://github.com/TEDI-DIGITAL/web-streaming.git (fetch)
origin  https://github.com/TEDI-DIGITAL/web-streaming.git (push)
```

---

### Ver historial de commits

```bash
git log --oneline
```

---

### Ver rama actual

```bash
git branch
```

Resultado:

```txt
* main
```

---

### Descargar cambios desde GitHub

```bash
git pull
```

---

# 🌎 Publicación

El proyecto está publicado mediante GitHub Pages.

URL:

https://tedi-digital.github.io/web-streaming/

Cada vez que se ejecuta:

```bash
git push
```

GitHub Pages actualiza automáticamente el sitio web en pocos minutos.

---

# 👨‍💻 Autor

TEDI DIGITAL

Repositorio Oficial:

https://github.com/TEDI-DIGITAL/web-streaming
