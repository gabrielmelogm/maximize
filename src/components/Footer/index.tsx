import styles from "./styles.module.scss"
import { social } from "../Header"

export function Footer() {
  return (
    <div className={styles.content}>
      <span className={styles.copyright}>2022 © THAYNARA OG. Todos os direitos reservados.</span>
      <ul className={styles.list}>
        {
          social.map((item, index) => {
            return (
              <li key={index}>
                <button>
                  {item.icon}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}