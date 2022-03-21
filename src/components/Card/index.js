import './style.css'

export function Card({item}){

  return(
  <div className='card_home_item'>
      <img src={item.imagem} alt = 'imagem' className='img_card'/>
      <h1 className='item_card_title'>{item.nome}</h1>
      <p>{item.id}</p>
    </div>
    )
}