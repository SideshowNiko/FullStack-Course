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
  const content = [
    { name: 'part1', exercises: 10},
    { name: 'part2', exercises: 7},
    { name: 'part3', exercises: 14},
  ]

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content content={content[0].name} exercises={content[0].exercises}/>
      <Content content={content[1].name} exercises={content[1].exercises}/>
      <Content content={content[2].name} exercises={content[2].exercises}/>
      <Total total={content[0].exercises+content[1].exercises+content[2].exercises} />
      
    </div>
  )
}

export default App
