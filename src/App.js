import React from 'react'
import './style.css'

function App() {
  return (
    <div>
      <div className="App">
        爸爸
        <Son/>
      </div>
      <hr/>
    </div>

  );
}

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0
    }
  }

  add() {
    // this.state.n += 1 为什么不行
    this.setState({n: this.state += 1})
  }

  render() {
    return (
      <div className="Son">
        儿子n：{this.state.n}
        <button onClick={() => {
          this.add()
        }}>+1
        </button>
        <Grandson/>

      </div>
    )
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙子 n：{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}


export default App;
