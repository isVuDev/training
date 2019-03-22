				{ Newbie guide from a newbie }

+ 0 workplace rules :

	- scan your id card for arrival and leave time everyday
	- ask your direct-supervisor for task (Training tasks on LIS need to be made), ask IT department for some account permission, bla bla bla everything 
	- LIS : + make timesheet and log in task everyday
		 ( commit at least 42 hours a week ) 
		+ fix bug is a re-work activity
	- don't be later than 8'30 AM 
	  ( but don't worry too much that your skip work )
	- inform your direct-supervisor about your training process
	*** some weird shit problem i have with my workplace computer :
		- computer slowing down or frezzing ( @ @  ) ( fix : log out or restart )
		- can't log in computer user ( @ @   ) ( fix : restart xD )
		- can't log in EMAIL ( @ @  !) ( fix : log out or restart )


+ 1 setup your accounts : 
    (use Chrome as default) 
	- make one backup of company setting (can't do because permission : )) )
	- try to log-in change your accounts & computer(user) passwords on ubuntu
	- make bookmarks of company website for easy access
	- if their is any error, check your permission
	  ( include sudo for installments )
	- create Skype account with company emails
          ( ask supervisor to add your in company group )
	  ( pin all importance chats )

+ 2 setup enviroment :
	- install npm, node, yarn, expo-cli, curl,...etc... 
          ( instruction from setting up reactjs enviroment )
	- install vscode or what ever :
	  ( vscode : add some extendsion for easy coding and grammas checking )
	- install xcode for ios simulation             
          (or... )
	- install android studio ( ubuntu can't install xcode ) android simulation -> set up ./bashrc path
	- make one backup of your enviroment (can't do because permission : )) )

+ 3 training guide from prev-newbie : 
    ( get github account and start learning about git from book : https://git-scm.com/book/en/v2 )
	[ ] reactjs ( https://reactjs.org/ ) : 
	    ( amazing js )
		- create your minimal reactjs app and have fun
		- learn about state, how to change state only using setState using (spread operator , .map , .filter ,...etc...)
		- learn how to use <div> for text and parenting
		- learn about <input>, <button>,...etc
		  ( learn onClick, onChange, bla bla bla )
		- learn about why we use const and let instead of var
		- learn ES6 systax : arrow function, spread operator ,...etc...
		- learn how to write handle function and how to pass it and some varible by props 
		- learn about class, function, const and when to use what

		(*) create an ToDoApp with add/delete/edit/search/isComplete

		- learn flexbox for CSS presentation
		- learn BEM and SASS syntax for naming CSS className


	[ ] redux ( https://redux.js.org/ ) :
	    ( amazing structure )
		- same app with redux 
                  ( use react-redux lib )
		- learn how state work in redux, learn how to getState, setState, handle (usually in components)
		- redux (easy) directory : 
			>src :
				+ actions
				+ components
				+ presentation
				+ reducer
				+ store
		- redux process guide from a newbie : 
							+ make a store with initial state and reducers
							+ update index.js
							+ create a action your want to use 
							+ update it in reducer
							+ update your App.js
							+ make component, handling props and link it to presentation 
							+ make presentation
						***Voila redux is pain***
							

  ****  [ ] react-native ( https://facebook.github.io/react-native/ ) :
            ( amazing app builder language )
		- take time step by step to learn every expect of this 
		- make something like a photos display from libary with cameraRoll and FlatList screen ( https://facebook.github.io/react-native/docs/flatlist
													 https://facebook.github.io/react-native/docs/cameraroll )
	[ ] TyperScript : interface for props handle
	[ ] formik : components lib
	[ ] middleWare : mid-action action
	[ ] async : sync action
	[ ] React Router
	[ ] Lodash : delecious pre-made function lib
	[ ] Immutable : delecious immutable components

+ 4 git and App :
	- (learn about git) ( cheat sheet : https://rogerdudler.github.io/git-guide/index.vi.html )
	- ask for your gitlab2 account
	- ask for help from supervisor for setup your git account and enviroment ( until Atalink app is runable )
		+set up git enviroment : config, short syntax		
		+log in , clone it
		+address to the right branch
		+get permission to yarn
		+yarn
		+yarn start
		+test it and sign up

	- clone the source code and get your assign task
   ***** Congratulation you're ready *** to LEARN MOREEEEEEEEEEEEEEEEEEEEEEEE *****

+ 5 tips :
	- Medium is a good place to learn with tutorial and new idea
	- StackOverFlow and github for errors 
	- You can ask your co-worker for help ( don't go crazy on your own, maybe it's just a syntax problem ) 
	- watch video tutorial on Youtube ( or what everrrrrrrrrrrr ) at home cuz you got  none physical bus from workplace computer
	- as intern : priority team-building activity and workplace rules, protocal, meeting, activity,...etc... from learning
	- your will be able to go from lv -1 to able to fixbug in 1~2 months ( relax, you're better than the prev-newbie already )
	- use Alfesco to learn about company rules, protocal, your benefits, ranking,...etc... ( delicious pre-made company structure and rules mhmmm... )
	- bring your charger and sign up for monthly 3g connection and Spotify or Audible because you can listening to music 
	- take 5 min nap when you're dying to sleep
	- breakfast is the most importance meal in a day









xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD xD 

***************   my redux note ( i'm an idiot xD ) :
"
actions -> reducer -> store -> index -> app -> container -> present(formik)

actions : -Object
actions Create : -a function that make action
action-types :	make const action-types for easy view, change and code

reducers : -combinde together in one rootReducer ( we should make a reducer manager to remove some of the reducer to add more speed for the app )
	   -immutate the state by spread : for array , Object.assign for object
	   -[?] use if over switch ?

store : -can save/load data by initialState ( read file to code )
	-should have middleware for pre-reducers action and use applyEnchancer to do it ( compose is to merge function from right to left ( the right most can have multi-parameters ))
	-(*)the store should be provide by the Provider from react-redux at the top and then all the state should be pass down as props or get it by mapStateToProps (except for presentational components))

containers : -(*)this can handle shit by function, and pass down to presentational components as Props
	     -Containers can contain Containers
	     -(*)"Data Down Action Up" : you can make a function and then pass it on presentationals to handle event then re-render the presentationals
	     -should use TyperScript to ger Promise Props
	     -(new)should not have any html tag (except <div/>) 
	     -(new)function and handle is in here
	     -(new) can have it ownstate to take input too
	    
presentationals(*) : -it can have it own state (sometimes) to handleChangle or Submit to reset the 	input value to make the experient better
		     -(*) should not have state or function (action) only props
		     -it get actionToProps to handle event by UI
		     -should use TyperScript to ger Promise Props
		     -(new) use store/components state to get input (and better to built your own components : ( )
			
ToDo-App :
	action : ADD/FILTER/TOGGLE(READ/COMPLETE)/DELETE/SEARCH    FILTER AND UNDO/REDO
	reducer: 1 reducer and make unique id (auto add)
	container/ presentationals:
		   -Search/...
		   -Add/...
		   -ToDo(TodoList, ToDoListItem,[?] Footer Container (for total and shit))
		   -FilterLink/Link (should it re-render the Footer ?)
		   -UndoRedo/2 presentation
	function : 
		FOOTER : total : complete, read, all (by todoList (key on ToDoListItem))
        	TODO :           

my git : toDoApp with reactjs : 		https://github.com/isVuDev/-1-ToDoApp ( sorry for the naming )
	 toDoApp with redux and reactjs 	https://github.com/isVuDev/toDoRedux ( lul css )
	 CameraRoll and FlatList : 		https://github.com/isVuDev/training
	 





