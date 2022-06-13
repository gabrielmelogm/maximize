import styles from "./styles.module.scss"
import { BsInstagram, BsYoutube, BsTwitter, BsFacebook, BsSnapchat } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"
import { Menu } from "../Menu"

const social = [
  {
    label: "Instagram",
    icon: <BsInstagram />
  },
  {
    label: "YouTube",
    icon: <BsYoutube />
  },
  {
    label: "Twitter",
    icon: <BsTwitter />
  },
  {
    label: "Facebook",
    icon: <BsFacebook />
  },
  {
    label: "Snapchat",
    icon: <BsSnapchat />
  },
  {
    label: "TikTok",
    icon: <FaTiktok />
  },
]

function Header() {

  return (
    <header className={styles.content}>
      <h1 className={styles.title}>THAYNARA OG</h1>
      <div>
        <ul className={styles.list}>
          {
            social.map((item, index) => {
              return (
                <li key={index}>
                  <button className={styles.listItem}>
                    {item.icon}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
      <Menu />
    </header>
  )
}

export { Header, social }