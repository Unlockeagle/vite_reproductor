// export const CardSong = ({
//     data,
//     eventLike,
//     eventPlay
// }: TCardSong) => {

import { TSong } from "../services"

//     const Song = document.createElement




// }


export const CardSong = (data: TSong): HTMLElement => {
    const song = document.createElement('div')
    sond.classList.add()

    song.innerHTML = `
    <div class="flow-root mx-10 border-b-[1px] border-black ">

          <ul role="list" class="divide-y divide-white dark:divide-white">
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-12 h-12 rounded-20" src="/public/unnamed.jpg" alt="Neil image">
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm text-black truncate dark:text-black">
                          Song:
                        </p>
                        <p class="text-sm font-medium text-black truncate dark:text-black">
                              Artist: Taylor Swift
                        </p>
                        <p class="text-sm text-black truncate dark:text-black">
                              Album: Desconocido
                        </p>
                      </div>
                      
                      <div class="grid-rows-2 items-center flex justify-between gap-2  p-2 ">
                          <img src="/public/corazon_blanco.svg" alt="add Favorites">
                          <img class="" src="/public/agregar (1).svg" alt="add playlist">
                      </div>
                  </div>
              </li>
          </ul>
      </div>    
    
    
    
    `




    return song

}
