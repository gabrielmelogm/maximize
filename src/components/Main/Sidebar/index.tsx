import styles from "./styles.module.scss"

const sideItens = ["Sobre", "Novidades", "Agenda", "Thay e Unicef", "Galeria", "São João da Thay", "Contato", "-", "Imprensa", "Fã-Clubes"]

export function Sidebar() {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {
          sideItens.map((item, index) => {
            return (
              <>
                <li key={index} className={item==="-" ? styles.listSeparator : styles.listItem}>
                  {item}
                </li>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}