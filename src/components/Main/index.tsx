import styles from "./styles.module.scss"
import { Contact } from "./Contact"
import { Form } from "./Form"
import { Sidebar } from "./Sidebar"

export default function Main() {
  return (
    <main className={styles.content}>
      <Contact />
      <Form />
      <Sidebar />
    </main>
  )
}
