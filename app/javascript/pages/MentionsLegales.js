import React from "react";

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Anna Mérimée | Mentions Légales";
    document.getElementsByTagName("meta").description.content =
      "Copyright Anna Mérimée";
  }, []);
  return (
    <main className="text-center">
      <div className="container">
        <h1>Mentions Légales</h1>

        <h2>Site internet</h2>
        <p>https://www.annamerimee.com</p>

        <h2>Hébérgement</h2>
        <p>
          Heroku, Inc. <br />
          650 7th Street San Francisco, CA 94103. <br />
          https://www.heroku.com/contact.
        </p>

        <h2>Droits d'auteur</h2>
        <p>
          L’ensemble de https://www.annamerimee.com relève de la législation
          française et internationale sur le droit d’auteur et la propriété
          intellectuelle. Toute représentation, reproduction, modification,
          utilisation commerciale, ainsi que tout transfert vers un autre site
          sont interdits, sauf autorisation à demander par courrier à l’adresse
          indiquée plus haut. Seule une utilisation à des fins strictement
          personnelle est autorisée.
        </p>

        <h2>Développement</h2>
        <p>
          Jonathan Santurbano <br />
          jonathan.santurbano@gmail.com
        </p>
      </div>
    </main>
  );
};

export default MentionsLegales;
