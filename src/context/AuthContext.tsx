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
  accessToken: string | null;
  login: (id: number, token: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  accessToken: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('accessToken');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const login = async (id: number, token: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.data;

      setUser(userData);
      setAccessToken(token);

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('accessToken', token);
      localStorage.setItem('isLoggedIn', 'true');
    } catch (err) {
      console.error('Failed to fetch user:', err);
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
