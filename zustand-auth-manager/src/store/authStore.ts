import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}
//!so basically here we are getting the data from localStorage 

const savedUser = localStorage.getItem('user');
const savedToken = localStorage.getItem('token');

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: savedUser ?JSON.parse(savedUser):null ,
  token: savedToken,
  login: (user, token) => {
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token  )
    set({ isAuthenticated: true, user, token });
  },
  logout: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    set({ isAuthenticated: false, user: null, token: null });
  },
}));

export default useAuthStore;
