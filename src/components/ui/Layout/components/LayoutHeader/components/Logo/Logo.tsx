import LogoIcon from "@/assets/logo/logo.svg";
import { Routes } from "@/common/constants/routes";
import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href={Routes.HOME} className={styles.logoContainer}>
      <LogoIcon />
      <p className={styles.logoTitle}>PetsPaw</p>
    </Link>
  );
};

export default Logo;
