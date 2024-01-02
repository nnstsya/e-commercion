'use client';

import React from 'react';
import '../app/page.sass';
import MainPage from '@/pages/MainPage';
import { ThemeProvider } from '@/hooks/HandleChangeMode';

export default function Home(): React.JSX.Element {
    return (
        <ThemeProvider>
            <MainPage />
        </ThemeProvider>
    );
}
