![](https://res.cloudinary.com/dknw3mf6e/image/upload/v1751181804/Screenshot_2025-06-29_124141_nrybt1.png)
![](https://res.cloudinary.com/dknw3mf6e/image/upload/v1751181810/Screenshot_350_x3zohy.png)
![](https://res.cloudinary.com/dknw3mf6e/image/upload/v1751181817/Screenshot_351_tdkkbp.png)
![](https://res.cloudinary.com/dknw3mf6e/image/upload/v1751181824/Screenshot_2025-06-29_124526_hgslj6.png)

# 💬 ChatSphere – Real-Time 1:1 Chat Application

**ChatSphere** is a seamless real-time 1:1 chat application built with **React** and **TypeScript** on the frontend and **Node.js** with **WebSockets** on the backend. Styled with **Tailwind CSS**, it offers a clean, responsive UI, enabling two users to connect and exchange messages instantly. The app handles dynamic message updates without page reloads, delivering a smooth and efficient chatting experience.

---

## 🚀 Features

- 💬 **Real-Time Messaging** – Instant 1:1 chat using WebSockets for low-latency communication.
- ✅ **TypeScript-Powered** – Type-safe code for enhanced maintainability and scalability.
- 🎨 **Responsive UI** – Modern, intuitive interface built with Tailwind CSS for cross-device compatibility.
- 🔄 **Dynamic Updates** – Messages update in real-time without requiring page reloads.
- 🔐 **Secure Connections** – WebSocket-based communication with secure backend handling.
- 🧹 **Code Quality** – Enforced with ESLint and Prettier for consistent, clean code.

---

## 🛠️ Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| **Frontend** | React, TypeScript, Tailwind CSS |
| **Backend**  | Node.js, WebSockets (ws) |
| **Tooling**  | ESLint, Prettier, Nodemon     |
| **Deployment** | Vercel (Frontend) , Render (Backend)      |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chatsphere.git
cd chatsphere
```

### 2. Install dependencies

For a monorepo structure:

```bash
# Root (if using concurrently setup)
npm install

# Or install separately:
cd client && npm install
cd ../server && npm install
```

### ⚙️ Configuration

Create the following `.env` files:

**server/.env**
```
PORT=5000
WEBSOCKET_URL=ws://localhost:5000
```

**client/.env**
```
VITE_BACKEND_URL=http://localhost:5000
VITE_WEBSOCKET_URL=ws://localhost:5000
```

### 🏃 Run the App

**Option 1:** Run both frontend and backend together (if using a proxy or concurrently)

```bash
npm run dev
```

**Option 2:** Run backend and frontend separately

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd client
npm run dev
```

---

## 🔐 Security

- **WebSocket Security**: Ensures reliable and secure real-time communication.
- **Environment Variables**: Stored securely using `dotenv` to protect sensitive configurations.
- **Input Sanitization**: Prevents malicious inputs through frontend and backend validation.
- **TypeScript**: Reduces runtime errors with strict type checking.

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make changes and commit:
   ```bash
   git commit -m 'Added a new feature'
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a Pull Request.

Ensure your code follows the **ESLint** and **Prettier** configurations in the project.

---

## 🧭 Future Improvements

- 🔔 Push notifications for new messages.
- 📱 PWA support for offline access and mobile app-like experience.
- 👥 Group chat functionality.
- 🔍 Message search and history export.
- 🌐 Multilingual support for broader accessibility.
