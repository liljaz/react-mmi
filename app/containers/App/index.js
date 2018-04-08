/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import '../../css/styles.css';
// On peut aussi importer du CSS de la meme facon.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [
        {
          id: 0,
          name: "Machine à café",
          isActive: true
        },
        {
          id: 1,
          name: "Machine à thé",
          isActive: false
        },
        {
          id: 2,
          name: "Machine à frappucino",
          isActive: true
        },
        {
          id: 3,
          name: "Machine à citron",
          isActive: true
        }
      ]
    };
  }

  render() {
    return (
      <div className="main">
        <Header/>
          {/*Conteneur de notre liste*/}
          <div className="machines-list">
            {/*Boucle sur notre collection de machines*/}
            { this.state.machines.map(machine =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={machine.name}
                         key={machine.id}
                         isActive={machine.isActive}/>
              )}
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
