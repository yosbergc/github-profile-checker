## Overview
The **GitHub User Analytics Dashboard** is a React-based project that enables users to provide their GitHub username and receive a detailed display of their profile. This includes their name, description, follower count, following count, location on GitHub, and a selection of 4 repositories with pertinent information such as licensing, forks, and stars. Additionally, there's a button to view all repositories.

## Technical Highlights
- **useContext**: For global state management without prop drilling.
- **useEffect**: To control the search input and make API calls with throttling for optimization.
- **API Integration**: Throttled API calls ensure efficient data retrieval.

## Features
- **Profile Information**: Display the user's GitHub name and bio.
- **Engagement Metrics**: Show the number of followers and following.
- **Location**: Indicate the user's location as listed on GitHub.
- **Repositories**: Highlight 4 repositories with details like licenses, forks, and stars.
- **View All Button**: A feature to navigate to all user repositories.

## How to Use
Enter a GitHub username in the search bar to retrieve and display the user's profile and repository information.

## Conclusion
This project showcases the use of React hooks and context for efficient API integration and state management, providing a user-friendly interface for GitHub analytics.
