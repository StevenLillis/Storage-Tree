import { useState } from 'react';

function App() {
  return (
    <div>
      <Folder name='Desktop'>
        <Folder name='Music'>
          <File name='all_star.mp4' />
          <File name='express_file.mp4' />
        </Folder>
        <File name='cat.jpeg' />
        <File name='dog.png' />
      </Folder>
      <Folder name='Application' />
    </div>
  );
}

const Folder = ({ name, children }) => {

  const [isOpen, setIsOpen] = useState(true)

  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const indent = { marginLeft: '17px' }
  return (
    <div>
      <span onClick={handleClick}>
        <i className="red folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>{name}
      <div style={indent}>
        {isOpen ? children : null}
      </div>
    </div>
  )
}

const File = ({ name }) => {

  const fileExtension = name.split('.')[1];
  const fileIcons = { 
    mp4: 'headphones', 
    jpeg: 'file image',
    png: 'file image outline'
  };
  
  return (
    <div>
      <i className={`caret ${fileIcons[fileExtension]} icon`}></i>{name}
    </div>
  )
}

export default App;
