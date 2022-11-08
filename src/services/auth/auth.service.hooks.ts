import { useMutation, useQueryClient } from "react-query";

import { signInAdmin, signInUserStep1 } from "./auth.service";
import { signInUserStep2, signInUserStep3 } from "./auth.service";
import { Auth, RegisterAdminConfig, VerifyMethod } from "./auth.service.types";
import { RegisterUserConfig } from "./auth.service.types";

export const useSignInAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation<Auth, unknown, RegisterAdminConfig>(signInAdmin, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("signInAdmin");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("signInAdmin");
    }
  });
};

export const useSignInUserStep1 = () => {
  const queryClient = useQueryClient();

  return useMutation<Auth, unknown, RegisterUserConfig>(signInUserStep1, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("signInUser");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("signInUser");
    }
  });
};

export const useSignInUserStep2 = () => {
  const queryClient = useQueryClient();

  return useMutation<Auth, unknown, VerifyMethod>(signInUserStep2, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("signInUser");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("signInUser");
    }
  });
};

export const useSignInUserStep3 = () => {
  const queryClient = useQueryClient();

  return useMutation<Auth, unknown, string>(signInUserStep3, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("signInUser");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("signInUser");
    }
  });
};
