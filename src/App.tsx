import "./App.css";
import HomePage from "./component/template/home";
import { DataProvider } from "./context/data";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-dark-100 bg-white w-full h-screen p-4 sm:px-24 sm:py-8 font-sans">
        <DataProvider>
          <HomePage />
        </DataProvider>
      </div>
      <div className="text-dark-300 flex justify-center w-full absolute bottom-0 pb-4">
        Made with ❤️ by{" "}
        <a className="ml-1" href="https://github.com/abbinizar">
          abbinizar
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
