import Image from 'next/image'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export function ProductCard ({ item, onClick }) {
  return (
    <div className={styles.card} key={item.id} onClick={onClick}>
      <div>
        <div>
          <div>
            <Image alt={item.name} src={item.imageUrl} height={250} width={250} priority={1} className={styles.imgFluid} />
          </div>
          <div>
            <h4 className={styles.cardTitle}>{item.name}</h4>
            <p className={styles.cardText}>{item.description}</p>
            <div className={styles.row}>
              <div className='flex flex-row'>
                <p className={styles.colText}>${item.price}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.colText}>{item.quantity} pcs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  item: {},
  onClick: () => {}
}
ProductCard.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
}
