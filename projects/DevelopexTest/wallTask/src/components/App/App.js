import React from 'react';

import ManageBlock from 'components/ManageBlock';
import NoteBlock from 'components/NoteBlock';

import './styles.scss'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <ManageBlock />
        <NoteBlock />
      </div>
    </div>
  );
}

export default App;
