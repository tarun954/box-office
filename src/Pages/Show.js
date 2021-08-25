import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router' ;
import { apiGet } from '../misc/config';


const Show = () => {
 const {id} = useParams();

const [show,setShow] = useState(null);

 useEffect ( () => {
     apiGet(`/shows/${id}1?embed[]=seasom&embed[]=cast`).then(results =>{
         setShow(results);

     })
 },[id]);
 console.log('show',show) 
    return (
        <div>This is Show Pages </div>
    )
}

export default Show
