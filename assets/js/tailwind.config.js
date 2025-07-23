// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe', 
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    800: '#1f2937',
                    900: '#111827',
                },
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
        }
    }
};