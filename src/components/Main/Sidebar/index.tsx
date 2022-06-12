import styles from "./styles.module.scss"

const sideItens = ["Sobre", "Novidades", "Agenda", "Thay e Unicef", "Galeria", "São João da Thay", "Contato", "-", "Imprensa", "Fã-Clubes"]

export function Sidebar() {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {
          sideItens.map((item, index) => {
            if (item==="-") return (
              <div className={styles.listSeparator}></div>
            )
            return (
              <>
                <li key={index} className={`${styles.listItem} ${index > 7 && styles.listFooter}`}>
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