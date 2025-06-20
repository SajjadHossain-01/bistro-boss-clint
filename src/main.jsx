import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import Authprovider from "./Providers/Authprovider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <div className="lg:max-w-screen-2xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </Authprovider>
  </StrictMode>
);
