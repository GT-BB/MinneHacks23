import React, { Component, useState, useEffect } from 'react';
import './app.css';
import ReactImage from './react.png';
import AnyVariableCanWorkAndStillReferToDefaultImport, { MyComponent2, MyComponent2Nav } from './App2';



export default class App extends Component {
  state = { username: null, testing: "" };

  componentDidMount() {
    var test = "";
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => {
        this.setState({ username: user.username }) //use this to set variables (state thingy like above)
        this.setState({ testing: "username you can use in .then of promise (API return val) returns synchronously"}) //this one 
      })
    this.state.testing = "something we got from api but wont work bc happens before .thens finish executing and gets overwritten"
    console.log(test);
    }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username} uwu`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="post.html">Post a bill</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-primary ml-lg-2" href="blog.html">Search the billBoard</a>
            <img src="Front\template\assets\img\services\billboard-logo.svg" alt="" />
          </li>
          <MyComponent var1={"HGello"} var2={this.state.testing}/>
          <p>===============</p>
          <MyComponent3 var1={"dfs"} var2={"dsafgf"}/>
        </ul>
        <AnyVariableCanWorkAndStillReferToDefaultImport />
        <MyComponent2 var1={"sdfdgs"} var2={"SD"}/>
        <MyComponent2Nav var1={"NAV ONE"} var2={"SD"}/>
      </div>
    );
  }
}


const MyComponent = ({var1, var2}) => {
  
  return (
    <li class="nav-item">
      <a class="btn btn-primary ml-lg-2" href="blog.html">Search the billBoard</a>
      <img src="Front\template\assets\img\services\billboard-logo.svg" alt="" />
      <p>{var1} PAUSE {var2}</p>
    </li>
  )
}

const MyComponent3 = ({var1, var2}) => {

  //this does the same thing as the mounting thing at the top
  const [user, setUser] = useState(null);
  const [aNum, setANum] = useState(0);
  const [someImportantVar, setSomeImptVar] = useState(true);
  const [count, setCount] = useState(2);

  useEffect(() => {
    // This function will execute whenever count is updated
    // example make an API call and update a variable user
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => {
        setUser(user.username + count)
      });
  }, [count]);

  const onPressExample = () => {
    setCount(count + 1);
    setSomeImptVar(false);
  }
  
  return (
    <li class="nav-item">
      <a class="btn btn-primary ml-lg-2" href="blog.html">Search the billBoard</a>
      <img src="Front\template\assets\img\services\billboard-logo.svg" alt="" />
      <p>{var1} PAUSE {var2} {user}</p>
      <button onClick={onPressExample}>Test button 1</button>
      <button onClick={() => {
        // Can have longer func in line instead
        setCount(count + 1);
        setSomeImptVar(false);
      }}>Test button 2</button>
    </li>
  )
}


