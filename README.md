# Counter App

A simple iOS counter application built with React Native and Expo SDK 52.0.0.

## Features

- Display a counter value
- Increment the counter by 1
- Decrement the counter by 1
- Reset the counter to 0

## Tech Stack

- React 19.0.0
- React Native 0.73.2
- Expo SDK 52.0.0
- Expo Updates ~0.24.8

## Prerequisites

- Node.js (v18+)
- npm or Yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator or Expo Go app on your iOS device

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/counter-app.git
   cd counter-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run on iOS:
   - Press `i` in the terminal to open in iOS Simulator
   - Or scan the QR code using the Camera app on your iOS device (with Expo Go installed)

## Project Structure

```
counter-app/
├── .github/           # GitHub Actions workflows
├── assets/            # App assets like icons and splash screen
├── src/
│   ├── components/    # Reusable components
│   └── screens/       # App screens
├── App.js             # Main app component
├── app.json           # Expo configuration
└── ...                # Other configuration files
```

## Deployment

This project is configured with GitHub Actions for automatic deployment to Expo. When you push to the main branch, your app will be published to Expo's servers.

You'll need to add your `EXPO_TOKEN` to your GitHub repository secrets to enable this feature.

## License

MIT