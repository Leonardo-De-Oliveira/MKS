import bag from '../../assets/bag.png';
import '../../sass/2-layouts/layouts.sass';

function Card(props) {

    return(
        <div className='card'>
            <div className='card-box'>
                <img src={props.img} alt='img' />
                <div className='card-box-description'>
                    <h2 className='title'>{props.title}</h2>
                    <p className='price'>R${Number(props.price)}</p>
                </div>
                <p className='card-box-text'>{props.text}</p>
            </div>
            <button onClick={props.addToCart} className='button-bag'><img src={bag} alt='sacola' />COMPRAR</button>
        </div>
    );
}
export default Card;