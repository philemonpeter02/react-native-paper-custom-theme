# react-native-paper-custom-theme
// customTheme.js
import { DefaultTheme } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme, // Extend the DefaultTheme

  // Customize the colors
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF', // Primary color
    accent: '#FF5722', // Accent color
    background: '#F5F5F5', // Background color
    surface: '#FFFFFF', // Surface color
    text: '#333333', // Text color
    error: '#FF0000', // Error color
    // Customize other colors as needed
  },

  // Typography
  fonts: {
    regular: 'YourRegularFont', // Custom regular font
    medium: 'YourMediumFont', // Custom medium font
    light: 'YourLightFont', // Custom light font
    thin: 'YourThinFont', // Custom thin font
  },

  // Roundness of components
  roundness: 8, // Border radius for components

  // Shadows for elevation
  elevation: {
    1: 2, // Elevation for components with elevation level 1
    2: 4, // Elevation for components with elevation level 2
    // Customize other elevation levels as needed
  },

  // Spacing
  spacing: {
    unit: 8, // Base unit for spacing
  },

  // Sizes
  sizes: {
    iconSize: 24, // Default icon size
    textSize: 16, // Default text size
    // Customize other sizes as needed
  },
};

export default customTheme;
