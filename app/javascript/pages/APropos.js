import React from "react";
import Image from "../images/about.jpg";

const APropos = () => {
  return (
    <div className="container">
      <main>
        <div className="about-photo-container">
          <img src={Image} alt="about" className="about-photo" />
        </div>
        <p className="text-justify">
          Anna Mérimée aime les paysages ou plutôt, les vues (ces vedute des
          peintres vénitiens) : une terrasse, en Provence peut-être, sur
          laquelle est dressée une table avec sa nappe blanche, un jardin en
          Toscane ou ailleurs, une crique en Méditerranée, une colline en
          Sicile, où je l’ai observée, attachée à fixer sur son carnet de
          croquis les colonnes frontales du temple de Ségeste.
        </p>
        <p className="text-justify">
           Anna dessine d’abord avec précision avant de mettre la couleur, et ce
          de façon plus spontanée. Le peintre - quoi de plus naturel ? - aime
          les couleurs : celles des fleurs, des arbres, des terres cuites, des
          ciels. Mais ce peintre-là donne à ses couleurs un chatoiement
          singulier, même s’il n’oublie pas - mais pourquoi le ferait-il ? - les
          arbres rouges et bleus d’un Vlaminck, d’un Braque ou d’un Gauguin, les
          cyprès émeraudes et les blés fauves d’un Van Gogh, les fleurs
          écarlates d’un Matisse et certains “paysages” tunisiens ou marocains
          d’un Paul Klee.
        </p>
        <p className="text-justify">
          La peinture d’Anna Mérimée est à la fois instinctive et réfléchie. Le
          paradoxe n’est qu’apparent. Il traduit le tempérament passionné de
          l’artiste, passion que module une réflexion permanente sur le monde et
          ses environs. L’oeil écoute et entend : les tableaux d’Anna Mérimée
          ont leur propre musique.
        </p>
        <p className="text-justify">
          Jean Orizet de l’Académie Mallarmé mars 2015
        </p>
      </main>
    </div>
  );
};

export default APropos;
