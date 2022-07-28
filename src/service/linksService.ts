import { ksslinks, Link, Links, newLink } from '../types'
import { writeFile, readFileSync } from 'fs'
import d from './ksslinks.json'

const getData=():ksslinks => {
    try {
        return JSON.parse(readFileSync('./ksslinks.json', 'utf8'))
    } catch (error) {
        writeFile('./ksslinks.json', JSON.stringify(d), 'utf8', ()=>{})        
        return d
    }
}

const data:ksslinks = getData()
    
export const getLinks = () : Links | [] => {
    return data.links
} 

export const getlink = (id: number): Link | undefined => {
    const link = data.links.find(l => l._id === id)
    return link
}

export const addLink = (newLink:newLink) : Link => {
    const id :number = Math.max(... data.links.map(l => l._id))+1
    const link :Link = {
        _id: id,
        ...newLink
    }
    data.links.push(link)
    writeFile('./ksslinks.json', JSON.stringify(data), 'utf8', ()=>{})
    
    return link
}

