import { useState, useEffect } from 'react'
import './App.css'

//class component
// class ClassComponent extends React.Component {
//   render(){
//     return <h2>This is a class component</h2>
//   }
// }


//arrow components

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been ${hasLiked}`);
  }, [hasLiked, title])

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br /> {count}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {

  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]}/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App
