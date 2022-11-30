import React from 'react'

// const  Test2 = () => {
//   return (
//     <div>
//       <Welcome  />
//     </div>
//   )
// }

const Welcome = (props) => {
  console.log(props);
  return (<div>
    <h1>Hello</h1>
    <h2>Name: {props.name}</h2>
    <h2>Age: {props.age}</h2>
  </div>)
}

export default Welcome


// const App = () => {
//   return (
//     <div>
//       <Welcome props={{ greeting: 'Welcome to React', name: 'Collins', etat:'Miserable' }} />
//     </div>
//   );
// };

// const Welcome = ({ props }) => {
//   return <h1>{props.name}</h1>;
// };

// export default App;