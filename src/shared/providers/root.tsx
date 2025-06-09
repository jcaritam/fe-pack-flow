import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import GlobalModal from "../components/global-modal";
import { SidePanel } from "../components/side-panel";

const client = new QueryClient();

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={client}>
        {children}
        <GlobalModal />
        <SidePanel/>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
