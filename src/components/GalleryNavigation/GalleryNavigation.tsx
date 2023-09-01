import React, { useState } from "react";
import Select, { Variant } from "@/components/ui/Select/Select";
import { getVariantProperty } from "@/components/ui/Select/utils/getVariantProperty";
import { useAppSelector } from "@/hooks/useAppSelector";
import Button from "@/components/ui/Button/Button";
import SendRequestIcon from "@/assets/icons/reload.svg";
import styles from "./GalleryNavigation.module.scss";

const orderVariants: Variant[] = [
  { text: "Random", value: `${Math.random() * (1 + 1) ? "DESC" : "ASC"}` },
  { text: "Desc", value: "DESC" },
  { text: "Asc", value: "ASC" },
];

const typeVariants: Variant[] = [
  { text: "All", value: `${Math.random() * (1 + 1) ? "DESC" : "ASC"}` },
  { text: "Static", value: "DESC" },
  { text: "Animated", value: "ASC" },
];

const limitVariants: Variant[] = [
  { text: "5 items per page", value: "5" },
  { text: "10 items per page", value: "10" },
  { text: "15 items per page", value: "15" },
  { text: "20 items per page", value: "20" },
];

const GalleryNavigation = () => {
  const { breedsNames } = useAppSelector(state => state.breedsSliceReducer);
  const breedsVariants: Variant[] = [{ text: "None", value: " " }, ...breedsNames];

  const [currentOrderState, setCurrentOrderState] = useState(getVariantProperty(orderVariants[0], "value"));
  const [currentBreedState, setCurrentBreedState] = useState(getVariantProperty(breedsVariants[0], "value"));
  const [currentTypeState, setCurrentTypeState] = useState(getVariantProperty(typeVariants[0], "value"));
  const [currentLimitState, setCurrentLimitState] = useState(getVariantProperty(limitVariants[0], "value"));

  return (
    <div className={styles.galleryNavigationContainer}>
      <div style={{ width: "100%" }}>
        <div className={styles.navigationBlock}>
          <label className={styles.selectLabel}>Order</label>
          <Select
            bgColor="var(--background-primary-100)"
            currentState={currentOrderState}
            setCurrentState={setCurrentOrderState}
            variants={orderVariants}
          />
        </div>
        <div className={styles.navigationBlock}>
          <label className={styles.selectLabel}>Breed</label>
          <Select
            bgColor="var(--background-primary-100)"
            currentState={currentBreedState}
            setCurrentState={setCurrentBreedState}
            variants={breedsVariants}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={styles.navigationBlock}>
          <label className={styles.selectLabel}>Type</label>
          <Select
            bgColor="var(--background-primary-100)"
            currentState={currentTypeState}
            setCurrentState={setCurrentTypeState}
            variants={typeVariants}
          />
        </div>
        <div className={styles.navigationBlock}>
          <label className={styles.selectLabel}>Limit</label>
          <div className={styles.additionalNavigationBlock}>
            <Select
              bgColor="var(--background-primary-100)"
              currentState={currentLimitState}
              setCurrentState={setCurrentLimitState}
              variants={limitVariants}
            />
            <Button>
              <SendRequestIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryNavigation;
