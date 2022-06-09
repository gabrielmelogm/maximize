import styles from "./styles.module.scss"
import Image from "next/image"

export function Contact() {
  return (
    <div className={styles.content}>
      <div className={styles.contentImage}>
        <Image
          src="/thaynara-og.png"
          width="373px"
          height="721px"
        />
        <div className={styles.contentText}>
          <p className={styles.titleImageOutline}>Cont</p>
          <p className={styles.titleImageOutline}>ato</p>
        </div>
      </div>
    </div>
  )
}