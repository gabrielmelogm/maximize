import styles from "./styles.module.scss"
import { Contact } from "./Contact"
import { Form } from "./Form"

export default function Main() {
  return (
    <main className={styles.content}>
      <Contact />
      <Form />
    </main>
  )
}
