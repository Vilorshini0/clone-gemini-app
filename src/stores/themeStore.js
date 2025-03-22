import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
    persist(
        (set) => ({
        theme: 'original',
        updateThemeDark: () => set({theme: 'dark'}),
        updateThemeLight: () => set({theme: 'light'}),
        updateThemeOriginal: () => set({theme: 'original'})
        }),
        {
        name: 'theme-storage', // Name of the key in localStorage
        }
    )
);

export default useThemeStore;
