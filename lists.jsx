// use of "props" to set data
function NavBar() {
  const [menuItems, setMenuItems] = React.useState([1, 2, 3, 4, 5]);

  const list = menuItems;
  const { Button } = ReactBootstrap;
  // each item should have an unique key
  const handleClick = e => {
    alert(`you clicked ${e.target.innerHTML}`);
  };
  const updatedList = list.map((listItems, index) => {
    return (
      <Button onClick={handleClick} key={index}>
        {listItems}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
ReactDOM.render(
  <NavBar  />,
  document.getElementById("root")
);
