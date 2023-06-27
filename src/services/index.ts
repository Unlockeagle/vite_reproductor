import axios from "axios";

type Callback = (res: TSong[]) => void

export type TSong = {
    album: string,
    author: string,
    duration: string,
    path: {
        audio: string,
        fron: string,

    }
    title: string,
    _id: {
        $oid: string
    }
}

export const getData = (callback: Callback) =>{

    axios.get('https://leonardoapi.onrender.com/music')

    .then(res => {

        callback(res.data)
    })
}