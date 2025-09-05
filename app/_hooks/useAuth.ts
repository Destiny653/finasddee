import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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

// Mock auth API functions - replace with real API calls
const authAPI = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock successful login
    return { user: { id: 1, email: credentials.email }, token: 'mock-token' };
  },
  register: async (data: RegisterData): Promise<{ user: User; token: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { user: { id: 1, email: data.email }, token: 'mock-token' };
  },
  logout: async (): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  },
  getCurrentUser: async (): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // Mock user data - in real app, check localStorage or cookies
    const token = localStorage.getItem('auth-token');
    if (token) {
      return { id: 1, email: 'user@example.com' };
    }
    throw new Error('Not authenticated');
  }
};

export const useAuth = (): AuthState & {
  login: (credentials: LoginCredentials) => void;
  register: (data: RegisterData) => void;
  logout: () => void;
  isLoginLoading: boolean;
  isRegisterLoading: boolean;
  isLogoutLoading: boolean;
} => {
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
      queryClient.removeQueries({ queryKey: ['auth'] });
    },
  });

  return {
    user: user || null,
    isAuthenticated: !!user,
    isLoading,
    error,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
  };
};
