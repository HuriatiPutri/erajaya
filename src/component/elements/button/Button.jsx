import PropTypes from 'prop-types'

export default function Button ({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: '',
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired
}
