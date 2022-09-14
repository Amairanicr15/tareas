const Header = ({ titulo }) => {
  return (
    <header>
        <h1>{titulo}</h1>
    </header>
  )
}

Header.defaultProps = {
    titulo: 'Tareas'
}

export default Header