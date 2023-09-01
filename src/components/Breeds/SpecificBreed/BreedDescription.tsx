import React, { FC } from "react";
import styles from "./BreedDescription.module.scss";

interface Breed {
  name: string;
  weight: {
    imperial: string;
    metric: string;
  };
  temperament: string;
  origin: string;
  life_span: string;
}

interface Props {
  breed: Breed;
}

const BreedDescription: FC<Props> = ({ breed: { name, weight, life_span: lifeSpan, temperament, origin } }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.breedName}>{name}</h2>
      <div className={styles.breedInfoContainer}>
        <div style={{ maxWidth: "40%" }}>
          <h4>Temperament : </h4>
          <span>{temperament}</span>
        </div>
        <div>
          <div>
            <h4>
              Origin : <span>{origin}</span>
            </h4>
          </div>
          <div>
            <h4>
              Weight : <span>{weight?.metric}</span>
            </h4>
          </div>
          <div>
            <h4>
              Life span : <span>{lifeSpan}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDescription;
