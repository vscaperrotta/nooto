# Nōto

Nōto - ノートは、テキストエディターです (Nōto is a text editor) based on Redux Persist to memorize your notes.

This website is inspired by the work of Riccardo Palombo with Scrivi.la. It is an exercise to create a memo archive with Redux Persist. Additional features include customizable font and theme settings via a modal.

---

## Features

- Save and persist notes locally using Redux Persist.
- Customize fonts and themes via a settings modal.
- Clean and responsive design for an optimal user experience.

---

## Project Structure

The repository is structured as follows:

```
nooto-develop/
├── src/                 # Main source code directory
│   ├── api/             # API services
│   ├── assets/          # Icons and reusable SVGs
│   ├── components/      # Reusable React components
│   ├── containers/      # Stateful components
│   ├── routes/          # Application routes
│   ├── store/           # Redux store configuration
│   │   ├── actions/     # Redux actions
│   │   ├── reducers/    # Redux reducers
│   │   ├── sagas/       # Redux sagas
│   │   ├── selectors/   # Redux selectors
│   ├── styles/          # SCSS styles
│   ├── translations/    # Localization files
│   ├── utils/           # Utility functions and helpers
├── public/              # Static files
├── config/              # Configuration files
├── generators/          # Code generators
├── scripts/             # Custom scripts
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (>= 16.x recommended)
- **Yarn** (preferred package manager)
- A modern web browser

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nooto-develop.git
   cd nooto-develop
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   yarn dev
   ```

   This will launch the application at `http://localhost:3000` by default.

4. **Build for production:**

   ```bash
   yarn build
   ```

5. **Preview production build:**

   ```bash
   yarn preview
   ```

---

## Configuration

- **Vite Configuration:** Located in `vite.config.js`, this file manages the build and development server settings.
- **Environment Variables:**

  - Environment variables are loaded from `public/env_config.js` and are accessible in the application.

---

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

