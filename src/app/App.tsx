import { Suspense } from "react";

function App() {
  return (
    <main className="app">
      <Suspense fallback={<div>loading..</div>}></Suspense>
    </main>
  );
}

export default App;
