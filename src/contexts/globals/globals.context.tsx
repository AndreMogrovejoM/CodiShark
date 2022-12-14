import React, { createContext, useMemo, useRef, useState } from "react";

import { GlobalsProviderProps as Props } from "./globals.context.types";
import { OperationType } from "./globals.context.types";
import { PaymentStatus } from "./globals.context.types";
import { GlobalsProviderValue } from "./globals.context.types";

// @ts-ignore
export const GlobalsContext = createContext<GlobalsProviderValue>({});

const GlobalsProvider: React.FC<Props> = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("NONE");
  const [operationUserDebt, setOperationUserDebt] =
    useState<OperationType>(undefined);
  const selectedIndex = useRef(0);

  const value: GlobalsProviderValue = useMemo(() => {
    return {
      isLoading,
      setIsLoading,
      selectedIndex,
      paymentStatus,
      setPaymentStatus,
      operationUserDebt,
      setOperationUserDebt
    };
  }, [isLoading, operationUserDebt, paymentStatus]);

  return (
    <GlobalsContext.Provider value={value}>
      {props.children}
    </GlobalsContext.Provider>
  );
};

export default GlobalsProvider;
