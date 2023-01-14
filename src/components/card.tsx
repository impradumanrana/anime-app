import react from 'react'

export const Card = ({ rankData }) => {


    return (
        <>

            {rankData && rankData.map((item, i) => (
                <>
                    <div key={i} className="card customcard">

                        <div className='imgdiv' style={{ backgroundImage: `url(${item.images.jpg.large_image_url})` }} > 
                        </div>
                    

                    <div className='ranking'><span>{item.popularity} </span></div>

                    <div className="cardinfo">
                        <h5>{item.title_english}</h5>
                        <div className='hiddendivinfo'>
<p><b>Release:</b> {item.aired.prop.from.day}/{item.aired.prop.from.month}/{item.aired.prop.from.year}</p>
<p><b>Lastest Now:</b> {item.status}</p>
<p><b>Rating:</b> {item.rating}</p>
                        </div>
                    </div>

                </div>
                
</>
    ) 
      ) 
}
    
      
</>

    )
}