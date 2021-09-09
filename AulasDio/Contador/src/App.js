import Item from './componentes/Item/index';
import Card from './componentes/Card/Index';
const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </ul>
    <Card></Card>
    </>
  )
}
export default App;
