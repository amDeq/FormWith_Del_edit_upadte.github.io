import React from "react";
import Formsection from "./components/forms";
import Header from "./header";
const App = () => {
  return (
    <>
      <Header />
      <section className="mainSection">
        <Formsection />
      </section>
    </>
  );
};
export default App;
