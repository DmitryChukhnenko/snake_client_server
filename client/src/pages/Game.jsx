import Worm from '/src/components/worm/worm.jsx';

function Game(props) {    
  return (
    <>
      <Worm parts={localStorage.getItem('parts')}/>
    </>
  )
}

export default Game