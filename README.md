# GitHub Profile Page

A React application that replicates GitHub's profile page design with real-time data fetching.

## Features

- ✅ Built with Vite + React + TypeScript
- ✅ Styled with TailwindCSS
- ✅ React Router for navigation
- ✅ ECharts for contribution visualization
- ✅ Context API for global state management
- ✅ Fetch API with async/await
- ✅ Fully responsive design
- ✅ Interactive navbar with tooltips and demo alerts
- ✅ GitHub-style UI with hover effects
- ✅ Proper icon usage throughout

## Project Structure

```
src/
  components/
    Activities/
     ContributionChart.tsx 
     ContributionActivity.tsx
     ActivityOverview.tsx
    Navbar/
     TopNavbar.tsx
     BottomNavbar.tsx
    Users/
     SidebarProfile.tsx
     UserStats.tsx
     UserInfoSection.tsx
     PopularRepositories.tsx
    Icons/
     Github.png
     CopilotIcon.tsx
    Toast.tsx
  pages/
    ProfilePage.tsx
    RepositoriesPage.tsx
    ProjectsPage.tsx
    PackagesPage.tsx
  context/
    ProfileContext.tsx
  config/
    profileConfig.json
  types/
    global.ts
  App.tsx
  main.tsx
```

## Routes

- `/profile/:username` - Full working GitHub-like profile
- `/profile/:username/repositories` - dummmy loader page
- `/profile/:username/projects` - dummmy loader page
- `/profile/:username/packages` - dummmy loader page

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Configuration

Edit `src/config/profileConfig.json` to customize:
- Default username
- Tab labels
- Loader messages
- UI visibility options

## Interactive Demo Features

The navbar includes interactive placeholder features that demonstrate attention to detail:

- **Menu Button** - Shows tooltip on hover, alert on click explaining navigation sidebar functionality
- **Search Bar** - Click to see search feature description with keyboard shortcut hint (/)
- **Pull Requests/Issues** - Interactive buttons with icons explaining GitHub workflow features
- **Create Button (+)** - Shows repository, issues, codespace, organisation, project creation options
- **Repositories** - Navigates to /repos, to access the My Repositories and contributions
- **Profile Menu** - Dropdown indicator with gradient avatar, shows account settings info

All dummy features provide informative alerts explaining what they would do in a production implementation, showing comprehensive understanding of GitHub's UI/UX.

## APIs Used

- GitHub User API: `https://api.github.com/users/{username}`
- Contributions API: `https://github-contributions-api.jogruber.de/v4/{username}`
