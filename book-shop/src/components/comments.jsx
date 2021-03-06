import React,{ Component } from "react";
import {ListGroup} from 'react-bootstrap'
import SingleComment from "./DeleteComment";
import { useState, } from "react";
import { useEffect } from "react";
import {withRouter} from 'react-router-dom'

const Comments =()=>{
    const [collection, setCollection] = useState([])
    const [isError, setIsError] = useState(false)
//   componentDidUpdate = async(PrevProps)=>{
//       console.log('component did update',PrevProps.book, this.props)
//     if(this.props.book && (!PrevProps.book || PrevProps.book.asin !== this.props.book.asin)){
//         try {
//             let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,{
//                 headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2ZTg4NzE1ODFjMzAwMTUzNmI1MDciLCJpYXQiOjE2MjU3NDU1NDMsImV4cCI6MTYyNjk1NTE0M30.lLm8P6JbqRK-l2zbSN_SYDhgHrTeYpRz02skYuZHTZ4"}
//             })
//             if(response.ok){
//                 let data =await response.json()
//                 this.setState({
//                     collection:data
//                 });
//             }else{
//               this.setState({isError:true})
//             }
//         } catch (error) {
            
//         }
//     }
//   }

useEffect(() => {
    getComment()
}, [])
const getComment = async()=>{
 
       try {
           let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' ,{
               headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2ZTg4NzE1ODFjMzAwMTUzNmI1MDciLCJpYXQiOjE2MjU3NDU1NDMsImV4cCI6MTYyNjk1NTE0M30.lLm8P6JbqRK-l2zbSN_SYDhgHrTeYpRz02skYuZHTZ4"}
           })
           if(response.ok){
               let data =await response.json()
               setCollection(data)
              
           }else{
               setIsError(true)
            
           }
       } catch (error) {
           
       }
}



        return(
                   <ListGroup>
                       {collection.map(c=>
                       <p>{c.comment}
                       <SingleComment deleteCom={c}/></p>
                       
                       )}
                   </ListGroup>

        )
    }




export default withRouter(Comments) 

