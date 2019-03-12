import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';




const App = () => {
    
    const todoData = [
        {label : 'Learn React', important: false},
        {label : 'Build React app', important: true},
        {label : 'Find Job', important: true}
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = { todoData }/>
        </div>
);

}


ReactDOM.render(<App />, document.getElementById('root'))