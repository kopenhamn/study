import React from 'react';

import ManageBlock from 'components/ManageBlock';
import NoteBlock from 'components/NoteBlock';

import './styles.scss'

function App() {
  let types = ['notes', 'simples', 'alerts', 'anonnotations'];

  return (
    <div className="App">
      <div className='container'>
        <ManageBlock />
        <NoteBlock types={types} />
      </div>
    </div>
  );
}

export default App;
