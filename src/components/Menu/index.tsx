import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { sideItens } from "../Main/Sidebar"
import styles from "./styles.module.scss"

export function Menu() {
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.button}><FiMenu /></button>
      <div className={(open) ? `${styles.content}` :  `${styles.contentHidden}`}>
        <ul className={styles.listMobile}>
          {
            sideItens.map((item, index) => {
              return (
                <li key={index}>
                  {item!=="-" && item}
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}