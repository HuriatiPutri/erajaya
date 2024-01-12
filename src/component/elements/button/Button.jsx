import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function Button ({ children, onClick, disabled }) {
  const cusStyle = [styles.btn, styles[disabled]].join(' ')

  return (
    <button
      disabled={disabled}
      className={cusStyle}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: '',
  disabled: false,
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
