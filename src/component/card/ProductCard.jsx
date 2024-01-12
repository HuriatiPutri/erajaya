import Image from 'next/image'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export function ProductCard ({ item, key, onClick }) {
  return (
    <div className={styles.card} key={key} onClick={onClick}>
      <div>
        <div>
          <div>
            <Image src={item.imageUrl} height={250} width={250} alt="product" className={styles.imgFluid} />
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
  key: 0,
  onClick: () => {}
}
ProductCard.propTypes = {
  item: PropTypes.object,
  key: PropTypes.number,
  onClick: PropTypes.func
}
