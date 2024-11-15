import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in a few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer facibus. Aliquet quis aliquet eqet mauris tortor. c Aliquet ultrices ac, ametau.</p>
      
        <Button styles='mt-10'/>
      
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Card" className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )
}

export default CardDeal
