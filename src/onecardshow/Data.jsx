import React from 'react'
import Carsolus from './Carsolus'


const slides = {
    img1:'https://cdn.create.vista.com/api/media/small/187663534/stock-photo-icelandic',
    img2:'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    img3:'https://t3.ftcdn.net/jpg/01/67/65/80/360_F_167658012_GSzt9uvVO5fxRi6hvZXU2kyYAHa6vE82.jpg',
    img4:'https://cdn.create.vista.com/api/media/small/187663534/stock-photo-icelandic',
    img5:'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    img6:'https://t3.ftcdn.net/jpg/01/67/65/80/360_F_167658012_GSzt9uvVO5fxRi6hvZXU2kyYAHa6vE82.jpg',
}



function Data() {
  return (
    <main className='App'>
    <div className='max-w-lg'>
    

        <Carsolus className='w-[50%]'>
        <img  src={slides.img1} />
        <img src={slides.img2} />
        <img src={slides.img3} />
        <img src={slides.img4} />
        <img src={slides.img5} />
        <img src={slides.img6} />
          
        </Carsolus>
    </div>
    </main>
    
 
  )
}

export default Data;
