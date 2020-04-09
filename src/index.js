import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const App = () => {
 const course = 'Half Stack application development'
 const parts = [
   {
    name :'Fundamental of React',
    exercises : 10 
   },
   {
    name : 'Using props to pass data',
    exercises : 7 
   },
   {
    name : 'State of component',
    exercises : 14
   }
 ]


 return (
   <>
   <Header course ={course}/>
   <Content parts = {parts}/>
   <Total parts = {parts}/>
   </>
 )
}
// udah
// ohh ngerti ngerti
// trimakasi suhu
// okiedokie
// ada lagi, itu yang const banyak diatas bisa dijakina array, terus untuk 
// okeh okeh , ntr tk tele kalo adabingung
// kalau mau liat yang complete, ada di https://github.com/wijaksanapanji/fullstackopen
// liat aja disana bandingin, itu udah tak rapiin, beda dikit aja ama ini
// oke

const Header = (props) =>{
  return (
    <h1> {props.course} </h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
    {/* yang dibawah 3 kali ini bisa di loop pakai map */}
    <Part part={props.parts} />
    </>
  )
}

const Total = (props) => {
  return(
    <p> total SKS adalah {props.exercises1 + props.exercises2 +props.exercises3} </p>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.part} </p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
