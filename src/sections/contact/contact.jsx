import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useForm, ValidationError } from '@formspree/react';
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [state, handleSubmit, reset] = useForm("mwvdbpzb");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message envoyé");
      formRef.current?.reset();
      reset();
    }
  }, [state.succeeded, reset]);
  return (
    <>
        <section className="sectionContact" id="contact">
            <h2>Contact</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="formContainer">
                  <div className="formItem">
                    <input
                      type="text"
                      name="nom"
                      placeholder="Entrez votre nom..."
                      required
                      pattern="^[A-Za-zÀ-ÿ' -]{3,30}"
                    />
                    <label>Nom</label>
                  </div>
                  <div className="formItem">
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Entrez votre prénom..."
                      required
                      pattern="^[A-Za-zÀ-ÿ' -]{3,30}"
                    />
                    <label>Prénom</label>
                  </div>
                  <div className="formItem">
                    <input
                      type="email"
                      name="email"
                      placeholder="Entrez votre email..."
                      required
                    />
                    <label>Email</label>
                  </div>
                  <div className="formItem">
                    <input
                      type="text"
                      name="objet"
                      placeholder="Entrez l'objet de votre message..."
                      required
                    />
                    <label>Objet</label>
                  </div>
                </div>
                <div className="formItem textareaContainer">
                  <label>Message</label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="3"
                    placeholder="Écrivez votre message..."
                    required
                    className="textarea"
                  />
                </div>
                <div className="buttonsContainer">
                  <button type="reset" className="btn btnSecondary">
                    <span className="btnContent btnDefault">
                      Tout supprimer
                      <FontAwesomeIcon icon={faTrashCan} className='heroIcon'/>
                    </span>
                    <span className="btnContent btnHover" aria-hidden="true">
                      Tout supprimer
                      <FontAwesomeIcon icon={faTrashCan} className='heroIcon'/>
                    </span>
                  </button>
                  <input type="hidden" name="_captcha" value="false" />
                  <button
                    type="submit"
                    className="btn btnPrimary"
                    disabled={state.submitting}
                  >
                    <span className="btnContent btnDefault">
                      Envoyer
                      <FontAwesomeIcon icon={faPaperPlane} className='heroIcon'/>
                    </span>
                    <span className="btnContent btnHover" aria-hidden="true">
                      Envoyer
                      <FontAwesomeIcon icon={faPaperPlane} className='heroIcon'/>
                    </span>
                  </button>
                </div>
            </form>
        </section>
    </>
  );
};

export default Contact;