import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

// Types for authentication
export interface User {
  id: number;
  email: string;
  // Add other user properties as needed
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  // Add other registration fields as needed
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: Error | null;
}

// Auth API functions
const authAPI = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Retrieve signup data from localStorage
    const authData = JSON.parse(localStorage.getItem('authData') || '{}');

    // Check if credentials match stored data (assuming email corresponds to username)
    if (
      authData.email === credentials.email &&
      authData.password === credentials.password &&
      authData.registrationComplete
    ) {
      // Mock successful login
      const user = { id: 1, email: credentials.email };
      const token = 'mock-token-' + Math.random().toString(36).substr(2);
      toast.success('Login successful!');
      return { user, token };
    } else {
      const error = new Error('Invalid email or password');
      toast.error('Invalid email or password');
      throw error;
    }
  },
  register: async (data: RegisterData): Promise<{ user: User; token: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = { id: 1, email: data.email };
    const token = 'mock-token-' + Math.random().toString(36).substr(2);
    return { user, token };
  },
  logout: async (): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  },
  getCurrentUser: async (): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // Check localStorage for auth token
    const token = localStorage.getItem('auth-token');
    if (token) {
      const authData = JSON.parse(localStorage.getItem('authData') || '{}');
      if (authData.username) {
        return { id: 1, email: authData.username };
      }
    }
    throw new Error('Not authenticated');
  }
};

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery<User, Error>({
    queryKey: ['auth', 'user'],
    queryFn: authAPI.getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const loginMutation = useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      localStorage.setItem('auth-token', data.token);
      queryClient.setQueryData(['auth', 'user'], data.user);
    },
    onError: () => {
      // Error toast is handled in authAPI.login
    },
  });

  const registerMutation = useMutation({
    mutationFn: authAPI.register,
    onSuccess: (data) => {
      localStorage.setItem('auth-token', data.token);
      queryClient.setQueryData(['auth', 'user'], data.user);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('authData'); // Clear authData on logout
      queryClient.removeQueries({ queryKey: ['auth'] });
      toast.success('Logged out successfully!');
    },
  });

  return {
    user: user || null,
    isAuthenticated: !!user,
    isLoading,
    error,
    login: (credentials: LoginCredentials, onSuccess?: () => void) => {
      loginMutation.mutate(credentials, {
        onSuccess: (data) => {
          // Default onSuccess behavior
          localStorage.setItem('auth-token', data.token);
          queryClient.setQueryData(['auth', 'user'], data.user);
          // Call custom onSuccess callback if provided
          onSuccess?.();
        },
      });
    },
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
  };
};