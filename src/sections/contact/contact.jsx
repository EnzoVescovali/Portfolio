import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
        <section className="sectionContact" id="contact">
            <h2>Contact</h2>
            <form action="">
                <div className="formContainer">
                  <div className="formItem">
                    <input
                      type="text"
                      name="nom"
                      placeholder="Entrez votre nom..."
                      required
                      pattern="[A-Za-z-]{3,30}"
                    />
                    <label>Nom</label>
                  </div>
                  <div className="formItem">
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Entrez votre prénom..."
                      required
                      pattern="[A-Za-z-]{3,30}"
                    />
                    <label>Prénom</label>
                  </div>
                  <div className="formItem">
                    <input
                      type="email"
                      name="email"
                      placeholder="Entrez votre email..."
                      required
                      pattern="[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,}"
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
                <div className="btnContainer">
                  <div className="btn">
                    <button type="submit">
                      <i className="fa-regular fa-paper-plane" aria-hidden="true"></i>
                      Envoyer
                    </button>
                  </div>
                  <div className="btn">
                    <button type="reset" className="resetBtn">
                      <i className="fa-solid fa-trash" aria-hidden="true"></i>
                      Tout supprimer
                    </button>
                  </div>
                </div>
            </form>
        </section>
    </>
  );
};

export default Contact;