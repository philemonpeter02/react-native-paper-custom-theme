// customTheme.js
import { DefaultTheme } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme, // Extend the DefaultTheme

  // Customize the colors
  colors: {
    primary: Color.primary,
    onPrimaryContainer: Color.light,
    primaryContainer: Color.primary,
    secondaryContainer: Color.primary,
    outline: Color.primary,
    onPrimary: Color.light,
    accent: Color.tertiary,
    backdrop: Color.tertiary,
    background: Color.tertiary,
    text: Color.light,
    placeholder: Color.light,
    onSurface: Color.light,
    onSurfaceVariant: Color.light,
    disabled: Color.light,
    surface: Color.tertiary,
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
