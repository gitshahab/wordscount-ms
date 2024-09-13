import { AllRoutes } from "./Routes/AllRoutes";
import { Footer, Header } from "./components";

function App() {
  return (
    <section className="bg-white dark:bg-bgone">
      <Header />
      <AllRoutes />
      <Footer />
    </section>
  );
}

export default App;
