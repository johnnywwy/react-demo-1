import React from 'react'
import './style.css'

function App() {
  return (
    <div>
      <div className="App">
        爸爸
        <Son/>
      </div>
    </div>

  );
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0
    }
  }
  add() {
    // this.setState({n: this.state.n += 1})
    //  牛逼的前端这样写
    this.setState((state) => {
      const n = state.n + 1
      console.log(n)
      return {n}
    })
  }

  render() {
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <GrandSon/>
      </div>
    )
  }
}

const GrandSon = () => {
  const [n, setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙子 n：{n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}


export default App;
