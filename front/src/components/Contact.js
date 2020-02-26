import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Votre message a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Une question, une remarque ? Veuillez me contacter **</h2>
        <h3>Renseignez le formulaire ci-dessous, je vous réponds dans les plus brefs délais</h3>

      <form id ="contact" onSubmit={this.handleSubmit}>

          <h3>Formulaire de contact !</h3>
                          <label>                           
                            <input type="text" /*value={this.state.value}*/ placeholder="Votre nom *" required/>
                          </label>

                          <label>                        
                            <input type="text" /*value={this.state.value}*/ placeholder="Votre prénom *" required/>
                          </label>

                          <label>                            
                            <input type="email" placeholder="Votre adresse e-mail *" required />
                          </label>

                          <lable>                           
                            <input type="tel" placeholder="Votre numéro tél" required />
                          </lable>

                          <lable>
                            <textarea id ="textarea" placeholder="Tapez votre message ici.... "  required />
                          </lable>

                          <lable><br />
                          <button type="submit" value="Envoyer" onChange={this.handleChange}>Envoyer</button>
                          <input type="reset" value="Annuler" />
                          </lable>
      </form>
      </div>
    );
  }
}
export default Contact;