import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const user = {
    firstName: 'David',
    lastName: 'Mora',
    avatar: 'https://img.favpng.com/23/0/3/computer-icons-user-profile-clip-art-portable-network-graphics-png-favpng-YEj6NsJygkt6nFTNgiXg9fg9w.jpg'
}

function getName(user) {
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello {getName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}
const name = 'David'
const element =  (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar}/>
    </div>
)
const container = document.getElementById('root')

ReactDOM.render(element, container)
