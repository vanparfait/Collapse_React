import React from "react";
import Minicollapse from "./Minicollapse";

const Collapsible = () => {
  return (
    <div className="collapsible">
      <Minicollapse
        mot="Variable"
        definition="Association d’un nom à une valeur. Elle est déclarée via un mot-clé et 
peut prendre plusieurs formes : texte, nombre, booléen, etc.Association d’un nom à une valeur. Elle est déclarée via un mot-clé et 
peut prendre plusieurs formes : texte, nombre, booléen, etc.Association d’un nom à une valeur. Elle est déclarée via un mot-clé et 
peut prendre plusieurs formes : texte, nombre, booléen, etc."
      />
      <Minicollapse
        mot="Objet"
        definition="Représentation qui se rattache au monde physique : un livre, une page de 
livre, une lettre."
      />
      <Minicollapse
        mot="Operateur logique"
        definition="Caractères spéciaux qui permettent de lier plusieurs
conditions ou de comparer des valeurs."
      />
    </div>
  );
};

export default Collapsible;
