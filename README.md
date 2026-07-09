# Code Arena

> A modern, browser-based coding platform for writing, running, and
> testing code in multiple programming languages.

## 🚀 Overview

Code Arena is a full-stack online code execution platform built with a
modern web stack. It allows users to write code directly in the browser,
execute it securely through a self-hosted execution engine, and receive
instant results.

Unlike many online judges that rely on third-party execution services,
Code Arena is designed around a self-hosted infrastructure, giving
complete control over supported languages, execution limits, and
deployment.

> **Current Status:** Active development.

------------------------------------------------------------------------

## ✨ Features

-   💻 Browser-based code editor
-   ⚡ Real-time code execution
-   🌍 Multi-language support
    -   Python
    -   Java
    -   C++
    -   JavaScript
-   📥 Custom stdin input
-   📤 Standard output and error display
-   🔒 Isolated execution through Piston
-   📱 Responsive interface
-   🎨 Modern UI built with Tailwind CSS
-   🌙 Clean developer-focused experience

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui

### Backend

-   Next.js Server
-   Prisma ORM
-   PostgreSQL (Neon)
-   Docker

### Code Execution

-   Self-hosted Piston API
-   Docker containers for language runtimes

### Deployment

-   Vercel (Frontend)
-   Self-hosted execution server connected through Cloudflare Tunnel
-   Render (Socket.IO backend)

------------------------------------------------------------------------

## 🏗️ Architecture

``` text
Browser
   │
   ▼
Next.js Application ────────► Socket.IO server
   │                              |
   ▼                              ▼
API Routes  ────────► PostgreSQL (Neon)
   │
   |
   │
   └────────► Self-hosted Piston API
                    │
                    ▼
           Docker Language Containers
```

------------------------------------------------------------------------

## Supported Languages

  Language     Status
  ------------ --------
  Python       ✅
  Java         ✅
  C++          ✅
  JavaScript   ✅

More languages may be added in future releases.

------------------------------------------------------------------------

## Local Development

### 1. Clone the frontend repository

```bash
git clone <your-code-arena-repository-url>
cd code-arena
```

### 2. Clone the Socket Server

Code Arena uses a **separate Socket.IO server** for real-time communication. Which is uploaded as "code-arena-socket-server" on my github itself.

Clone it into a separate directory:

```bash
git clone <your-code-arena-socket-server-repository-url>
cd code-arena-socket-server
npm install
npm run dev
```

> **Important:** The Socket.IO server must be running alongside the frontend for all real-time features to work.

### 3. Install frontend dependencies

Return to the frontend project and install its dependencies:

```bash
cd ../code-arena
npm install
```

### 4. Configure environment variables

Create a `.env` file in the frontend project.

Example:

```env
DATABASE_URL=
DIRECT_URL=
PISTON_API=
NEXT_PUBLIC_SOCKET_URL=http://localhost:<socket-port>
```

The socket server may also require its own `.env` file depending on your configuration.

### 5. Start the frontend

```bash
npm run dev
```

At this point, you should have the following services running:

* ✅ Frontend (Next.js)
* ✅ Socket Server (`code-arena-socket-server`)
* ✅ PostgreSQL database
* ✅ Self-hosted Piston API

With all services running, Code Arena will be fully functional for local development.

------------------------------------------------------------------------

## Known Limitations

-   The public demo currently depends on the availability of the
    self-hosted execution server.
-   If the execution server is offline, code execution will not be
    available.
-   Documentation is still being expanded as development continues.

------------------------------------------------------------------------

## Contributing

Contributions, suggestions, and bug reports are welcome.

If you discover a bug or have an idea for a feature, feel free to open
an issue or submit a pull request.

------------------------------------------------------------------------

## Author

Built by **Minaal Khajuria**.

If you found this project interesting, consider giving the repository a
⭐.
