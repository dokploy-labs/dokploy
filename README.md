<div align="center">
  <a href="https://dokploy.com">
    <img src=".github/sponsors/logo.png" alt="Dokploy - Open Source Alternative to Vercel, Heroku and Netlify." width="100%"  />
  </a>
  </br>
  </br>
  <p>Join us on Discord for help, feedback, and discussions!</p>
  <a href="https://discord.gg/2tBnJ3jDJc">
    <img src="https://discordapp.com/api/guilds/1234073262418563112/widget.png?style=banner2" alt="Discord Shield"/>
  </a>
</div>
<br />


Dokploy is a free, self-hostable Platform as a Service (PaaS) that simplifies the deployment and management of applications and databases.

# Personalización UNAHUR

> Este repositorio corresponde a un **fork personalizado de Dokploy**, desarrollado como parte del Proyecto de Práctica Profesional Supervisada (PPS) de la **Licenciatura en Informática de la Universidad Nacional de Hurlingham (UNAHUR)**.

El objetivo de este fork es adaptar la plataforma Dokploy a la identidad institucional de la universidad.

---

## Repositorios

- **Proyecto original:** https://github.com/Dokploy/dokploy
- **Fork del proyecto:** https://github.com/dokploy-labs/dokploy

---

# Personalizaciones realizadas

Actualmente este fork incorpora las siguientes modificaciones respecto del proyecto original:

## Identidad institucional

- Incorporación del logotipo oficial de la Universidad Nacional de Hurlingham.
- Personalización de la pantalla de inicio de sesión.
- Actualización del título de la aplicación mostrado en el navegador.
- Reemplazo del favicon institucional.
- Rediseño del layout de bienvenida (Onboarding).
- Adaptación de colores y elementos gráficos para respetar la identidad visual institucional.

---

# Archivos modificados

```text
apps/
└── dokploy/
    ├── components/
    │   ├── layouts/
    │   │   └── onboarding-layout.tsx
    │   │
    │   └── shared/
    │       └── logo.tsx
    │
    ├── pages/
    │   ├── _app.tsx
    │   └── index.tsx
    │
    └── public/
        ├── icon.svg
        └── images/
            ├── logo-hurlingham.png
            └── unahur-iso.png
```

---

# Estado del proyecto

| Funcionalidad | Estado |
|--------------|:------:|
| Creación del fork | ✅ |
| Personalización institucional | ✅ |
| Generación de imagen Docker personalizada | ✅ |
| Despliegue en Docker Swarm | ✅ |
---


> A partir de este punto se mantiene el README original del proyecto Dokploy, con el objetivo de conservar la documentación oficial y facilitar la incorporación de futuras actualizaciones provenientes del repositorio principal.

---

## ✨ Features

Dokploy includes multiple features to make your life easier.

- **Applications**: Deploy any type of application (Node.js, PHP, Python, Go, Ruby, etc.).
- **Databases**: Create and manage databases with support for MySQL, PostgreSQL, MongoDB, MariaDB, libsql, and Redis.
- **Backups**: Automate backups for databases to an external storage destination.
- **Docker Compose**: Native support for Docker Compose to manage complex applications.
- **Multi Node**: Scale applications to multiple nodes using Docker Swarm to manage the cluster.
- **Templates**: Deploy open-source templates (Plausible, Pocketbase, Calcom, etc.) with a single click.
- **Traefik Integration**: Automatically integrates with Traefik for routing and load balancing.
- **Real-time Monitoring**: Monitor CPU, memory, storage, and network usage for every resource.
- **Docker Management**: Easily deploy and manage Docker containers.
- **CLI/API**: Manage your applications and databases using the command line or through the API.
- **Notifications**: Get notified when your deployments succeed or fail (via Slack, Discord, Telegram, Email, etc.).
- **Multi Server**: Deploy and manage your applications remotely to external servers.
- **Self-Hosted**: Self-host Dokploy on your VPS.

## 🚀 Getting Started

To get started, run the following command on a VPS:

Want to skip the installation process? [Try the Dokploy Cloud](https://app.dokploy.com).

```bash
curl -sSL https://dokploy.com/install.sh | bash
```

For detailed documentation, visit [docs.dokploy.com](https://docs.dokploy.com).


[Github Sponsors](https://github.com/sponsors/Siumauricio)

### Contributors 🤝

<a href="https://github.com/dokploy/dokploy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dokploy/dokploy" alt="Contributors" />
</a>

## 📺 Video Tutorial

<a href="https://youtu.be/mznYKPvhcfw">
  <img src="https://dokploy.com/banner.png" alt="Watch the video" width="400"/>
</a>

## 🤝 Contributing

Check out the [Contributing Guide](CONTRIBUTING.md) for more information.
