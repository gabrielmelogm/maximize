import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { sideItens } from "../Main/Sidebar"
import styles from "./styles.module.scss"

export function Menu() {
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)} className={styles.button}>
        {
          (open) ? (
            <AiOutlineClose />
          ) : (
            <FiMenu />
          )
        }
      </button>
      <div className={(open) ? `${styles.content}` :  `${styles.contentHidden}`}>
        <ul className={styles.listMobile}>
          {
            sideItens.map((item, index) => {
              return (
                <li 
                  key={index}
                  className={styles.listItem}
                  onClick={() => setOpen(!open)}
                >
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