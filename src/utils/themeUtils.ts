// Helper function to get contrast color for labels
export const getContrastColor = (hexColor: string): string => {
    if (!hexColor) return 'black';

    // If hexColor is 3 characters, expand to 6
    const hex = hexColor.length === 3
        ? hexColor.split('').map(c => c + c).join('')
        : hexColor;

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
};

// Theme color mapping
export const themeColors = {
    light: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        text: '#111827',
        textSecondary: '#6b7280',
        border: '#e5e7eb'
    },
    dark: {
        primary: '#1f2937',
        secondary: '#111827',
        text: '#f3f4f6',
        textSecondary: '#9ca3af',
        border: '#374151'
    }
};