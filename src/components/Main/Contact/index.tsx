import styles from "./styles.module.scss"
import Image from "next/image"
import { BiPhoneCall } from "react-icons/bi"
import { MdOutlineEmail } from "react-icons/md"

export function Contact() {
  return (
    <div className={styles.content}>
      <div className={styles.contentImage}>
        <p>Con <br/> tato</p>
        <div className={styles.image}>
          <Image
            src="/thaynara-og.png"
            width="340px"
            height="650px"
          />
        </div>
        <p className={styles.overlay}>Con <br/> tato</p>
      </div>

      <div className={styles.contentFooter}>
        <div className={styles.line}></div>
        <p className={styles.titleContact}>Contato profissional</p>
        <div className={styles.contentContact}>
          <div className={styles.contentInformation}>
            <span className={styles.icon}><BiPhoneCall /></span>
            <span>98 991234-5678</span>          
          </div>
          <div className={styles.contentInformation}>
            <span className={styles.icon}><MdOutlineEmail /></span>
            <span>contato@thaynaraog.com.br</span>
          </div>
        </div>
      </div>
    </div>
  )
}