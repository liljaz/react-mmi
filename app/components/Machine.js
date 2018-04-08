/**
 *
 * Machine.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    return (
        <div
        {/*Si isActive passée en props est à true, ajouter la classe "active" */}
        className= { this.props.isActive ? "machine active" : "machine" }>
          {/* Afficher le nom*/}
          {this.props.name}
        </div>
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
