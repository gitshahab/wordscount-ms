import { AllRoutes } from "./Routes/AllRoutes";
import { Footer, Header } from "./components";

function App() {
  return (
    <section className="bg-white dark:bg-bgH min-h-screen">
      <Header />
      <AllRoutes />
      <Footer />
    </section>
  );
}

export default App;
