import React, { useState, useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile'
import Repository from './Repository';

// const [count, setCount] = useState(0);
//(1000 * 3600 * 24)
// Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
//   // Update the document title using the browser API
//   document.title = `You clicked ${count} times`;
// });

// return (
//   <div>
//     <p>You clicked {count} times</p>
//     <button onClick={() => setCount(count + 1)}>
//       Click me
//     </button>
//   </div>
// );

function App() {
  const [user, setUser] = useState({});
  const [repos, setrepos] = useState([]);

  useEffect(()=>{
      const userDetails = fetch('https://api.github.com/users/supreetsingh247');
      const userRepos = fetch('https://api.github.com/users/supreetsingh247/repos');
      Promise.all([userDetails, userRepos]).then(([userRes, repoRes])=>{
        return Promise.all([userRes.json(), repoRes.json()])
      }).then(([user,repos])=>{
        setUser(user);
        setrepos(repos);

      })
  },[])
  return (
    <div className="">
      <header className="">
      </header>
      <div className="body-container">
        <UserProfile {...user} />
        <Repository repos={repos}/>
      </div>
    </div>
  );
}

export default App;
