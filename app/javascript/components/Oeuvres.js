import React from "react";

const Oeuvres = () => {
  return (
    <section>
      {oeuvres.map((oeuvre) => {
        <article key={oeuvre.id}>Hello</article>;
      })}
    </section>
  );
};

export default Oeuvres;
