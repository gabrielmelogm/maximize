import styles from "./styles.module.scss"
import { FiSend } from "react-icons/fi"

export function Form() {
  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <label htmlFor="input-contact-type" className={styles.labelSelect}>
          Seu contato é relacionado a:
        </label>
        <select className={styles.selectInput} name="contact_type" id="input-contact-type">
          <option value="Imprensa">Imprensa</option>
          <option value="Fãs">Fãs</option>
          <option value="Empresário(a)">Empresário(a)</option>
        </select>

        <div className={styles.contentGroupInputs}>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="name" type="text" name="nome" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="name">Nome</label>
          </div>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="empresa" type="text" name="empresa" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="empresa">Empresa</label>
          </div>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="email" type="email" name="email" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="email">E-mail</label>
          </div>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="telefone" type="text" name="telefone" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="telefone">Telefone</label>
          </div>

          <div className={styles.contentMessageInput}>
            <label htmlFor="message" className={styles.labelMessage}>Mensagem</label>
            <textarea id="message" className={styles.inputMessage} name="message" placeholder="Digite aqui..." rows={5} required />
          </div>
        </div>
        <div className={styles.contentCheckbox}>
          <input className={styles.inputCheckbox} name="recaptcha" id="recaptcha" type="checkbox" checked={true} />
          <label className={styles.labelCheckbox} htmlFor="recaptcha">Não sou um robô</label>
        </div>
        <button>Enviar </button>
      </form>
    </div>
  )
}