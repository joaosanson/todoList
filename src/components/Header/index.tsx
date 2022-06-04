import logo from "../../assets/logo.svg"
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo todo img" />
    </header>
  )
}