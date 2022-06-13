import styles from "./styles.module.scss"
import { FiSend } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import { FormEvent, useEffect, useState } from "react"
import serialize from "form-serialize"
import { phoneMask } from "../../../utils/phoneMask"
import { formatFields } from "../../../utils/formatFields"
import { api } from "../../../services/api"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export function Form() {
  const [ loading, setLoading ] = useState(false)
  const [ number, setNumber ] = useState('')
  const notify = () => toast.success("Dados cadastrados com sucesso!")

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    const form: any = document.querySelector("#form")
    const fieldsSerialize: any = serialize(form, { hash: true })
    const fields = formatFields(fieldsSerialize)
    await api.post("/", {fields})
    notify()
    await setInterval(() => {
      setLoading(false)
      return location.reload()
    }, 3000)
  }

  useEffect(() => {
    const response = phoneMask(number)
    setNumber(response)
  }, [number])

  return (
    <div className={styles.content}>
      <ToastContainer />
      <form id="form" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.contentInput}>
          <label htmlFor="input-contact-type" className={styles.labelSelect}>
            Seu contato é relacionado a:
          </label>
          <select className={styles.selectInput} name="contact_type" id="input-contact-type" required>
            <option value="Imprensa">Imprensa</option>
            <option value="Fãs">Fãs</option>
            <option value="Empresário(a)">Empresário(a)</option>
          </select>
          <label htmlFor="input-contact-type" className={styles.iconSelect}>
            <IoIosArrowDown />
          </label>
        </div>

        <div className={styles.contentGroupInputs}>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="name" type="text" name="name" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="name">Nome</label>
          </div>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="company" type="text" name="company" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="company">Empresa</label>
          </div>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="email" type="email" name="email" placeholder=" " required />
            <label className={styles.labelInput} htmlFor="email">E-mail</label>
          </div>

          <div className={styles.contentInput}>
            <input className={styles.inputOutline} id="phone" type="text" name="phone" placeholder=" "  onChange={({ target }) => setNumber(target.value)} value={number} maxLength={15} required />
            <label className={styles.labelInput} htmlFor="phone">Telefone</label>
          </div>

          <div className={styles.contentMessageInput}>
            <label htmlFor="message" className={styles.labelMessage}>Mensagem</label>
            <textarea id="message" className={styles.inputMessage} name="message" placeholder="Digite aqui..." rows={5} required />
          </div>
        </div>
        <div className={styles.contentFooterForm}>
          <div className={styles.contentCheckbox}>
            <div className={styles.checkbox}>
              <input className={styles.inputCheckbox} name="recaptcha" id="recaptcha" type="checkbox" required />
              <label className={styles.labelCheckbox} htmlFor="recaptcha">Não sou um robô</label>
            </div>
          </div>
          <button className={styles.buttonSubmit} disabled={loading} type="submit">
            <span>
              Enviar
            </span>
            <span className={styles.sendIcon}>
              <FiSend size={24} />
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}