import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper flex-grow-1">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
