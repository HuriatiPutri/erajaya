import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Button ({ children, onClick }) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}>
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
