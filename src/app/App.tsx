import { Users } from "@/pages/Users";
import { Suspense } from "react";

function App() {
  return (
    <main className="app">
      <Suspense fallback={<div>loading..</div>}>
        <Users />
      </Suspense>
    </main>
  );
}

export default App;
