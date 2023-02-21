
// /**
//  * Video 14.3, Video 14.4 (10:10): Set State And List ToDos And Styling The ToDo List
//  * https://classroom.emeritus.org/courses/1173/pages/video-14-dot-3-video-14-dot-4-10-10-set-state-and-list-todos-and-styling-the-todo-list?module_item_id=290749
//  *
//  * 1. - function with our top component
//  * 		-- return JSX
//  */

// function App() {
// 	return (
// 		<></>
// 	);
// }

// /**
//  * 2. - add to DOM
//  *      -- pass in content: <App/> component
//  * 		-- target HTML emelemt to pass the content
//  */

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


/**
 * ===========================================================
 * ===========================================================
 */

// /**
//  * Video 14.3, Video 14.4 (10:10): Set State And List ToDos And Styling The ToDo List
//  * https://classroom.emeritus.org/courses/1173/pages/video-14-dot-3-video-14-dot-4-10-10-set-state-and-list-todos-and-styling-the-todo-list?module_item_id=290749
//  * 
//  * 3. - set the initial state: using useState(list ToDos: array of objects)
//  * 		
//  * 4. - create JSX: 
//  * 		-- div for each todo item with key as index by looping using .map() on ToDos.
//  * 
//  * 5. - styling: adding CSS and classes for styling
//  */

// function App() {
// 	const [todos, setTodos] = React.useState([
// 		{
// 			text: 'get ready and go to library for kids story telling',
// 			isComplete: false,
// 		},
// 		{
// 			text: 'have 800 calories parathas with coffee in breakfast',
// 			isComplete: false,
// 		},
// 		{
// 			text: 'build todo app',
// 			isComplete: false,
// 		}
// 	]);
// 	return (
// 		<>
// 			{todos.map((todo, i) => <div className="todo" key={i}>{todo.text}</div>)}
// 		</>
// 	);
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// )

/**
 * ===========================================================
 * ===========================================================
 */


// /**
//  * Video 14.5, Video 14.6 (12:16): Input Form - Add ToDo Item And Remove ToDo Item
//  * https://classroom.emeritus.org/courses/1173/pages/video-14-dot-5-video-14-dot-6-12-16-input-form-add-todo-item-and-remove-todo-item?module_item_id=290750
// //  */

// function App() {
// 	const [todos, setTodos] = React.useState([
// 		{
// 			text: 'get ready and go to library for kids story telling',
// 			isComplete: false,
// 		},
// 		{
// 			text: 'have 800 calories parathas with coffee in breakfast',
// 			isComplete: false,
// 		},
// 		{
// 			text: 'build todo app',
// 			isComplete: false,
// 		}
// 	]);

// 	/**
// 	 * GET USER INPUT: Add Form - handle submit event -> add ToDO
// 	 * 6. form created with input element for the value and form submission is handled by 'handleSUbmit'
// 	 * 7. Adding a new managed variable for managing user input called value.
// 	 *    -- This value is set using setValue function.
// 	 * 8. 'handleSubmit'
// 	 *			- prevents default which is often page refresh
// 	 *			-	check for existing value and create new list
// 	 *					setTodos(new list) = existing list + net Todo
// 	 *			-	clear out the form
// 	 */

// 	const [value, setValue] = React.useState('');
// 	/**
// 	 *  handleSubmit:
// 	 *  -- prevend default behaviour (page reload)
// 	 *  -- check existance of user input
// 	 *  -- add user input to display
// 	 */
// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		if (!value) return alert('item is empty'); //alert if entered blank value
// 		// const newTodos = [ { text: value, isComplete: false }, ...todos ]; //new value added at top
// 		const newTodos = [...todos, { text: value, isComplete: false }];   //new value added at bottom

// 		setTodos(newTodos);
// 		setValue('');	//clear input field
// 	}
// /**
//  * form input type(text) className (styling), value(managed variable), placeholder(helping text to display), onChange(managed variable controlling function)
//  */
// 	return (
// 		<>
// 			{
// 				todos.map((todo, i) =>
// 					<div className="todo" key={i}>{todo.text}</div>)
// 			}
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					className="input"
// 					value={value}
// 					placeholder="Add Todo ..."
// 					onChange={e => setValue(e.target.value)}
// 				/>
// 			</form>
// 		</>
// 	);
// }
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// )

/**
 * ===========================================================
 * ===========================================================
 */

// /**
//  * 9. remove an item from tasks when clicked
//  * 			-- add id
//  * 			-- add onClick event
//  */

// function App() {
// 	const [todos, setTodos] = React.useState([
// 		{
// 			text: 'get ready and go to library for kids story telling',
// 			isComplete: false,
// 		},
// 		{
// 			text: 'have 800 calories parathas with coffee in breakfast',
// 			isComplete: false,
// 		},
// 		{
// 			text: 'build todo app',
// 			isComplete: false,
// 		}
// 	]);

// 	const [value, setValue] = React.useState('');
// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		if (!value) return;
// 		const newTodos = [...todos, { text: value, isComplete: false }];
// 		setTodos(newTodos);
// 		setValue('');
// 	}

// 	/**
// 	 * removeTodo:
// 	 * -- destructure existing todo's in a temporary array
// 	 * -- remove clicked item through splice identified by clicked event element's id
// 	 */
// 	const removeTodo = e => {
// 		const index = Number(e.target.id);
// 		let temp = [...todos];
// 		temp.splice(index, 1);
// 		setTodos(temp);
// 	}
// 	return (
// 		<>
// 			{todos.map((todo, i) =>
// 				<div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					className="input"
// 					value={value}
// 					placeholder="Add Todo ..."
// 					onChange={e => setValue(e.target.value)} />
// 			</form>
// 		</>
// 	);
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// )

/**
 * ===========================================================
 * ===========================================================
 */

function App(){
	const [todos, setTodos] = React.useState([
	  {
		text: 'learn react',
		isCompleted: false,
	  },
	  {
		text: 'meet friend for lunch',
		isCompleted: false,
	  },
	  {
		text: 'build todo app',
		isCompleted: false,
	  }        
	]);
  
	const addTodo = text => {
	  const newTodos = [...todos, {text, isCompleted:false}];
	  setTodos(newTodos);
	}
	const removeTodo = index => {
	  let temp = [...todos];    
	  temp.splice(index, 1);
	  setTodos(temp);
	}
  
  return (
    <>
	  {/* <div className="app"> */}
      <div className="d-flex flex-md-column " >
		  {todos.map((todo, i) => (
			<Todo key={i} index={i} todo={todo} remove={removeTodo}/>
		  ))}
		  <TodoForm addTodo={addTodo} />
		</div>
      {/* </div> */}
    </>
	);
  }
  
  ReactDOM.render(
	<App/>,
	document.getElementById('root')
  );
  