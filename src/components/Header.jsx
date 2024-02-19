import PropTypes from 'prop-types'

// function Header(props) {
function Header({text, bgColor, textColor}) {
  const headerStyles = {
    color: textColor,
    backgroundColor: bgColor,
    // color: 'white',
    // backgroundColor: 'inherit',
    opacity: '0.9'
  }
  return (
    // <header style={{opacity:'0.9'}}>
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
        {/* <h2>{props.text}</h2> */}
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'FeedBack UI',
    bgColor: 'inherit',
    textColor: '#ff6a95',
}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
