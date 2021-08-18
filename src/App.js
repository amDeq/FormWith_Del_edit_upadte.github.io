import React from "react";
import FormSection from "./components/FormSection";
import Header from "./header";
const App = () => {
  return (
    <>
      <Header />
      <section className="mainSection">
        <FormSection />
      </section>
    </>
  );
};
export default App;
