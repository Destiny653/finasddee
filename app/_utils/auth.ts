import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Mock auth API functions - replace with real API calls
const authAPI = {
  login: async (credentials: { email: string; password: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock successful login
    return { user: { id: 1, email: credentials.email }, token: 'mock-token' };
  },
  register: async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { user: { id: 1, ...data }, token: 'mock-token' };
  },
  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  },
  getCurrentUser: async () => {
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

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery({
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
    user,
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
