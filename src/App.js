import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import "./App.css";

function App() {
  return (
    <div>
      <header className="container bg-gray">
        <Header />
      </header>
      <main className="container">
        <Content />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
