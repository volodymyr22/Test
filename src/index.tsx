import App from "./App";
import { QueryClient, QueryClientProvider } from 'react-query'
import React from "react";

const queryClient = new QueryClient()

const RootApp: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

export default RootApp;
