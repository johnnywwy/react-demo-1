import React from 'react'
import './style.css'

function App() {
  const money = 100
  return (
    <div>
      <div className="App">
        爸爸
        <Son messageForSon={money}/>
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
  render() {
    const money = 20;
    return (
      <div className="Son">
        儿子：我收到了爸爸给我的 {this.props.messageForSon} 元钱
        <Grandson messageForGrandSon={money}/>
      </div>
    )
  }
}

const Grandson = (props) => {
  // const [n, setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙子：我收到爷爷给我的 {props.messageForGrandSon} 红包
    </div>
  )
}


export default App;
