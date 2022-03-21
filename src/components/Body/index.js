import { Card } from '../Card'
import './style.css'
import { data } from '../../data'

export default function Body(){
  return(
<>
    <h1 className='title_home'>Fast-Food House</h1>
    <div className='container_card_home'>
    
    {
      data.map((item)=>(
        <Card item ={item}/>
      ))
    }
    
    </div>
</>
  )
}