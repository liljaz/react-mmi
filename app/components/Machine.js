/**
 *
 * Machine.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  // Méthode lancée au clic sur le bouton "Toggle"
  handleClick() {
    console.log('Clic sur le bouton ------- ');
    // On accède dans cette méthode à ce qu'on a passé en props au composant
    console.log(this.props.name);
  }

  render() {
    return (
        <div
        className= { this.props.isActive ? "machine active" : "machine" }>
          {/*Si isActive passée en props est à true, ajouter la classe "active" */}
          {this.props.name}
          {/* On appelle handleClick avec (e) pour pouvoir accéder à this*/}
          <button onClick={(e) => this.handleClick(e)} type="button" className="btn">
            Toggle
          </button>
        </div>
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
