const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Section: '{props.content}' has {props.exercises} exercises.</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course='Half Stack application development' />
      <Content content={part1.name} exercises={part1.exercises}/>
      <Content content={part2.name} exercises={part2.exercises}/>
      <Content content={part3.name} exercises={part3.exercises}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
      
    </div>
  )
}

export default App
