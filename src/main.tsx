import { createRoot } from '@supabase/supabase-js';
import App from "./App.tsx";
import "./index.css";
const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);
createRoot(document.getElementById("root")!).render(<App />);
