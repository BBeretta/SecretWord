import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Congratulations! Your score: <span>{score}</span></h2>
      <button onClick={retry}>Retry the game!</button>
    </div>
  )
}

export default GameOver