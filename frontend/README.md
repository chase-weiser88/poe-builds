# POE Builds Frontend

A comprehensive React-based frontend web application for Path of Exile build planning, showcasing, and comparison.

## Features

### Core Features
- **Build Calculator/Planner** - Interactive build creation interface with character class selection, skill gem setup, and real-time stat calculations
- **Build Showcase/Browser** - Browse and search thousands of community builds with advanced filtering
- **Build Comparison Tool** - Side-by-side comparison of multiple builds with visual charts
- **User Authentication** - JWT-based authentication with user profiles
- **Rating & Comments** - Community engagement with ratings and threaded comments
- **Import/Export** - POB code import/export and JSON export functionality

## Tech Stack

### Frontend Framework
- **React 19** with functional components and hooks
- **React Router v6** for routing
- **Vite** for fast development and building

### UI & Styling
- **Tailwind CSS** for styling
- **Headless UI** for accessible components
- **React Icons** for icons
- **Framer Motion** for animations

### State Management
- **React Context API** for global state (auth, theme)
- **Custom hooks** for data fetching and state management

### Additional Libraries
- **React Hook Form** for form management
- **Zod** for form validation
- **date-fns** for date formatting
- **recharts** for comparison visualizations
- **react-hot-toast** for notifications
- **axios** for HTTP requests

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your API URLs (optional, defaults provided):
   ```
   VITE_API_URL=http://localhost:3000/api
   VITE_MCP_OPTIMIZER_URL=http://localhost:3001
   VITE_MCP_SCOUT_URL=http://localhost:3002
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable UI components
│   │   ├── layout/      # Layout components
│   │   ├── auth/        # Authentication components
│   │   ├── builds/      # Build-related components
│   │   ├── calculator/  # Build calculator components (coming soon)
│   │   ├── comparison/  # Build comparison components (coming soon)
│   │   └── ratings/     # Rating and comment components (coming soon)
│   ├── pages/           # Page components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API service layer
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Current Implementation Status

### ✅ Completed
- Project setup with Vite and React
- Tailwind CSS configuration
- Responsive layout with Header and Footer
- Authentication system (login/signup with mock API)
- Build browser with search and filters
- Build detail pages
- Mock data and API service layer
- Protected routes
- Utility functions for formatting and calculations

### 🚧 In Progress / Coming Soon
- Build Calculator with interactive planning
- Build Comparison tool with charts
- Rating and comments system
- POB import/export functionality
- User profile pages with build management
- Real API integration
- More comprehensive build statistics

## Mock API

The application currently uses a mock API service that simulates backend functionality. This allows for:
- Full frontend development without backend dependency
- Easy testing of all features
- Quick prototyping

To switch to a real API, update the `USE_MOCK_API` flag in the service files (`authService.js`, `buildService.js`).

## Available Routes

- `/` - Home page with features overview
- `/login` - User login
- `/signup` - User registration
- `/builds` - Browse all builds with filters
- `/builds/:id` - Build detail page
- `/calculator` - Build calculator (coming soon)
- `/comparison` - Build comparison (coming soon)
- `/my-builds` - User's own builds (protected)
- `/profile/:id` - User profile

## Key Components

### Common Components
- `Button` - Styled button with variants
- `Input` - Form input with validation
- `Card` - Container component
- `Loader` - Loading spinner
- `Modal` - Modal dialog

### Build Components
- `BuildCard` - Build preview card
- `BuildGrid` - Grid of build cards
- `BuildFilters` - Filter sidebar for builds

### Layout Components
- `Header` - Navigation header with auth
- `Footer` - Site footer with links
- `Layout` - Main layout wrapper

## Customization

### Theme Colors
The application uses a Path of Exile-inspired color scheme defined in `tailwind.config.js`:
- Primary: `#af6025` (POE orange)
- Secondary: `#1e1e1e` (dark grey)
- Accent: `#c59a6d` (light gold)
- Dark: `#0a0a0a` (near black)
- Light: `#f5f5f5` (off-white)

### Adding New Features
1. Create components in appropriate directories
2. Add routes in `App.jsx`
3. Create service methods in service files
4. Add mock data in `utils/mockData.js`

## Backend Integration

When the backend is ready:
1. Update `USE_MOCK_API` to `false` in service files
2. Implement real API calls using axios
3. Update `API_BASE_URL` in `.env`
4. Handle real authentication tokens
5. Add error handling for API failures

Required backend endpoints are documented in the main project README.

## Performance Considerations

- Code splitting with React.lazy() (ready for implementation)
- Image optimization
- Memoization for expensive calculations
- Debounced search inputs
- Efficient re-rendering with React hooks

## Accessibility

- Semantic HTML throughout
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management for modals
- Color contrast compliance (WCAG AA)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - See repository for details

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Path of Exile](https://www.pathofexile.com/)
- [Path of Building](https://github.com/PathOfBuildingCommunity/PathOfBuilding)

## Support

For issues and questions, please use the GitHub issue tracker.
