
function App() {
  return (
    <div>
      <h1>App组件</h1>
      <Component numbers={[1,2,3,4,5,6,7,8,9]}/>
    </div>
  );
}

const Component = (props) => {
  return (<div>
    { props.numbers.map((n,index) => {
      return <div> 下标 {index} : 值为{n}</div>
    }) }
  </div>)
}

export default App;
