// context/AuthContext.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    role: string;
};

type AuthContextType = {
    user: User | null;
    login: (id: number) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (id: number) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/users/${id}`);
            const userData = response.data.data;
            console.log(response);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('isLoggedIn', 'true');
        } catch (err) {
            console.error('Failed to fetch user:', err);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
