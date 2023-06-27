import { toggLeClass } from '.'
import { CardSong } from './Components/CarSong'
import './style.css'

getData((res) => {
    console.log(res)
})


const contenedorCanciones: HTMLElement | null = document.getElementById('track_list')

contenedorCanciones?.appendChilld(
    CardSong()
)



// window.open(url)
document.getElementById('burger-button')
    ?.addEventListener('click', () =>{
        toggLeClass(document.getElementById("navbar"), 'show-navbar')
    
})


// let mensaje: string = "hola"

// setTimeout(()=> {

//     mensaje += 'Mundo'

// }, 1000 )


// console.log(mensaje)





// asincronismo*

// promesas 


