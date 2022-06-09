import styles from "./styles.module.scss"

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
            <label className={styles.labelInput} htmlFor="name">Nome</label>
            <input className={styles.inputOutline} id="name" type="text" name="nome" />
          </div>

          <div className={styles.contentInput}>
            <label className={styles.labelInput} htmlFor="empresa">Empresa</label>
            <input className={styles.inputOutline} id="empresa" type="text" name="empresa" />
          </div>

          <div className={styles.contentInput}>
            <label className={styles.labelInput} htmlFor="email">E-mail</label>
            <input className={styles.inputOutline} id="email" type="email" name="email" />
          </div>

          <div className={styles.contentInput}>
            <label className={styles.labelInput} htmlFor="telefone">Telefone</label>
            <input className={styles.inputOutline} id="telefone" type="text" name="telefone" />
          </div>

          <textarea className={styles.inputMessage} name="message" placeholder="Digite aqui..."/>
        </div>
      </form>
    </div>
  )
}