import styles from "./styles.module.scss"
import { Contact } from "./Contact"

export default function Main() {
  return (
    <main className={styles.content}>
      <Contact />
    </main>
  )
}
