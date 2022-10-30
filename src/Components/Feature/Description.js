import React from "react";

const Description = (props) => {
  const description =
    "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen";

  return (
    <div className="description">
      <h4>Description</h4>
      <p>{description}</p>
    </div>
  );
};

export default Description;