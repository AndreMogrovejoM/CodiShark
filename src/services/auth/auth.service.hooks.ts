import { useMutation, useQueryClient } from "react-query";
import { LoginResponse, User, TemporalAdminUser } from "types/user.types";

import { logoutService, signInAdmin, signInUserStep1 } from "./auth.service";
import { signInUserStep2, signInUserStep3 } from "./auth.service";
import { signInAdminStep2 } from "./auth.service";
import { Login, VerifyMethod } from "./auth.service.types";
import { RegisterUserConfig } from "./auth.service.types";

export const useSignInAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, Login>(signInAdmin, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["signInAdmin", "user"]);
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries(["signInAdmin", "user"]);
    }
  });
};

export const useSignInAdminStep2 = () => {
  const queryClient = useQueryClient();

  return useMutation<TemporalAdminUser, unknown, Login>(signInAdminStep2, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["signInAdmin", "user"]);
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries(["signInAdmin", "user"]);
    }
  });
};

export const useSignInUserStep1 = () => {
  const queryClient = useQueryClient();

  return useMutation<User, unknown, RegisterUserConfig>(signInUserStep1, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["signInUser", "user"]);
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries(["signInUser", "user"]);
    }
  });
};

export const useSignInUserStep2 = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, VerifyMethod>(signInUserStep2, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["signInUser", "user"]);
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries(["signInUser", "user"]);
    }
  });
};

export const useSignInUserStep3 = () => {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, unknown, Login>(signInUserStep3, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["signInUser", "user"]);
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries(["signInUser", "user"]);
    }
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, void>(logoutService, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("user");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("user");
    }
  });
};
