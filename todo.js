const {Button } = ReactBootstrap;
function Todo({ todo, index, remove }) {
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <Button className="bg-dark my-2" onClick={handle}>{todo.text} (-)</Button>
}
