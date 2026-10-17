# Smart Chat Assistant

A full-stack, AI-powered chat application inspired by ChatGPT. Built with React, Node.js, Express.js, and a MySQL-compatible database, the application allows users to register, log in, interact with an AI assistant, manage conversation history, search previous chats, upload images, and generate images from text prompts.

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [How to Use](#how-to-use)
- [Deployment](#deployment)
- [Security](#security)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

##  Overview

Smart Chat Assistant provides a conversational interface where users can ask questions, receive AI-generated responses, continue previous discussions, and access additional AI-powered tools.

The application combines a React frontend, an Express.js REST API, database-backed user and message storage, and external AI services. Available functionality depends on the services and features configured in the application.

##  Features

###  1. User Authentication

- Create an account using the registration page.
- Log in using existing account credentials.
- Use JSON Web Tokens (JWT) for authenticated requests.
- Access protected functionality through the authentication system.

### 💬 2. AI-Powered Chat

- Send questions and prompts to an AI assistant.
- Receive AI-generated responses through the configured Google Gemini API.
- Ask follow-up questions to continue a conversation.
- Use a conversational interface inspired by ChatGPT.

###  3. Conversation History

- Store user messages and AI responses in the database.
- Retrieve previous conversations from saved chat data.
- Reopen earlier discussions when supported by the interface.
- Associate conversation data with the relevant user account.

###  4. Chat Search

- Search previous conversations or messages.
- Find relevant discussions more quickly.
- Access matching results through the application's search interface.

###  5. Image Upload

- Select and upload an image through the chat interface.
- Provide an image alongside a prompt when supported by the configured AI service.
- Use image input as part of a conversation where image processing is implemented.

###  6. AI Image Generation

- Enter a text prompt describing an image.
- Generate an image directly from a prompt without uploading a reference image.
- Display the generated image when the configured image-generation service returns a result.
- Integrate with the image-generation provider configured by the project, such as Pollinations.

###  7. Database Integration

- Store user accounts and chat messages in a MySQL-compatible database.
- Support the configured TiDB Cloud database connection.
- Retrieve saved data through backend API endpoints.

###  8. Responsive User Interface

- Use a React-based web interface.
- Navigate between the available chat tools and application panels.
- Interact with the application through a browser.

##  Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Axios
- CSS

### Backend

- Node.js
- Express.js
- REST API
- JSON Web Token (JWT) authentication

### Database and AI Services

- MySQL-compatible database
- TiDB Cloud
- Google Gemini API
- Pollinations image-generation service, if configured

##  Project Structure

```text
ChatgptCloen/
├── Backend/
│   ├── Config/
│   ├── Controllers/
│   ├── Routes/
│   ├── user-registration/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

*This is a simplified overview. The actual folder structure may differ depending on the implementation.*

##  Getting Started

Follow the instructions below to run the application locally.

### Prerequisites

Before starting, make sure you have:

- [Node.js](https://nodejs.org/) installed.
- npm installed.
- Access to a MySQL-compatible database.
- The required API credentials for the AI services used by the project.

### 1. Clone the Repository

```bash
git clone https://github.com/Rahel-zekiros/conversational-ai
cd smart-chat-assistant
```

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 3. Configure the Backend

Create a `.env` file inside the `Backend` directory.

Example configuration:

```env
PORT=3000

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

JWT_SECRET=your_long_random_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
POLLINATIONS_API_KEY=your_pollinations_api_key
```

Replace the example values with your own configuration.

**Important:** The variable names above are examples. Check your backend configuration files and source code for the exact environment variable names your application expects. Only configure credentials required by your implementation.

Start the backend using the script defined in `Backend/package.json`. Common commands include:

```bash
npm run dev
```

or:

```bash
npm start
```

Use the command available in your project's `package.json`.

### 4. Install Frontend Dependencies

Open a second terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

### 5. Configure the Frontend

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Ensure this URL matches your backend port and API route prefix.

### 6. Start the Frontend

```bash
npm run dev
```

Open the local URL printed in the terminal. With a standard Vite setup, it is commonly:

```text
http://localhost:5173
```

Keep the backend running while using the frontend.

##  Environment Variables

The following table describes example environment variables. Confirm their names and requirements in the actual source code.

| Variable | Purpose |
|---|---|
| `PORT` | Port on which the backend server listens |
| `DB_HOST` | Database host |
| `DB_USER` | Database username |
| `DB_PASSWORD` | Database password |
| `DB_NAME` | Database name |
| `JWT_SECRET` | Secret used to sign and verify authentication tokens |
| `GEMINI_API_KEY` | Gemini API credential, if required |
| `POLLINATIONS_API_KEY` | Image-service credential, if required |
| `VITE_API_BASE_URL` | Backend API base URL used by the frontend |

Do not commit real passwords, API keys, or `.env` files to a public repository.

##  How to Use

1. Open the application in your browser.
2. Register a new account or log in with an existing account.
3. Start a conversation by entering a question or prompt.
4. Ask follow-up questions to continue the discussion.
5. Open conversation history to revisit saved chats.
6. Use chat search to locate previous messages or conversations.
7. Upload an image when image input is supported by the current chat workflow.
8. To generate a new image, enter a descriptive text prompt in the image-generation feature and submit it.
9. Review the results returned by the AI services.

The exact workflow and available controls depend on the implemented frontend.

## Deployment

To make the application publicly accessible, deploy the frontend and backend and configure the production database and AI services.

- **Live Application:** https://smart-chat-app-2026.vercel.app/.
- **Backend API:** https://conversational-ai-vikm.onrender.com.
- **GitHub Repository:** [Smart Chat Assistant](https://github.com/Rahel-zekiros/conversational-ai)

### Deployment Checklist

- [ ] Deploy the frontend.
- [ ] Deploy the backend API.
- [ ] Configure production environment variables.
- [ ] Connect the backend to the production database.
- [ ] Set `VITE_API_BASE_URL` to the deployed backend API URL.
- [ ] Configure CORS for the deployed frontend domain.
- [ ] Verify user registration and login.
- [ ] Test AI chat responses and follow-up questions.
- [ ] Test conversation history and chat search.
- [ ] Test image uploads and image generation.
- [ ] Confirm that private credentials are not exposed in frontend code.

##  Security

- Never commit `.env` files, database passwords, JWT secrets, or private API keys.
- Keep private AI-service credentials on the backend.
- Avoid exposing secret credentials through frontend environment variables prefixed with `VITE_`.
- Validate uploaded file types and sizes on the backend.
- Protect user-specific conversations so users can access only their own data.
- Use HTTPS and production-appropriate CORS settings when deployed.
- Validate incoming API requests and return appropriate error messages.

##  Future Improvements

Potential enhancements include:

- Better conversation organization and history management.
- Improved chat-search filtering.
- Enhanced image upload and image understanding.
- More advanced AI image-generation controls.
- Improved loading indicators and error handling.
- Additional accessibility improvements.
- Expanded automated testing.

##  Author

**Rahel Zekiros**

- GitHub: [Rahel-zekiros](https://github.com/Rahel-zekiros)

##  License

No license has been specified yet. Add a `LICENSE` file if you intend to distribute the project under an open-source license.

