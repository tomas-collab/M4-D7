import { Component } from "react";
import{Container,Row,Col,Form,Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import { useState } from "react";

 

const CommentForm =({Asin})=> {
    const [collection, setCollection] = useState({comment:'',rate:1,elementId:Asin})

    const handleInput = (key,value)=>{
        setCollection({
           
                ...collection,
                [key]:value
    
        })
    }
    const submitComment = async(e)=>{
          e.preventDefault()
          try {
              let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',{
                  method:'POST',
                  body:JSON.stringify(collection),
                  headers:{
                      "Content-Type":'application/json',
                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU2ZTg4NzE1ODFjMzAwMTUzNmI1MDciLCJpYXQiOjE2MjU3NDU1NDMsImV4cCI6MTYyNjk1NTE0M30.lLm8P6JbqRK-l2zbSN_SYDhgHrTeYpRz02skYuZHTZ4"}
              })
              if(response.ok){
                  alert('comment added')
                //   setCollection({comment:'',rate:1,elementId:''})
                //   this.setState({
                //       collection:{
                //           comment:'',
                //           rate:1,
                //           elementId:''
                //       }
                //   })
              } else{
                  alert('error error')
              }   
          } catch (error) {
              console.log(error)
          }
    }

  
    

        return(
        <Container>
            <Row className="justify-content-center my-3">
                <Col md={6} className="text-center">
                    <p>comment and rate Book</p>
                    <Form onSubmit={submitComment}>
                        <Form.Group>

                            <Form.Label>comment Section</Form.Label>
                            <Form.Control 
                             as="textarea" rows={4}
                             type="textArea" 
                              placeholder="write comment" 

                              value={collection.comment}
                              onChange={(e)=>{handleInput('comment',e.currentTarget.value)}}
                              />
                       </Form.Group>               
             <Form.Control as="select" size="sm" custom  
                     
                            value={collection.rate}
                            onChange={(e)=>{handleInput('rate',e.target.value)}}>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                      </Form.Control>
               
                         <Button variant="success" type="submit"> save </Button>
                      </Form>
                 </Col>
            </Row>
    </Container>
        )
  
}

export default withRouter(CommentForm) 