
import { Component } from "react";
import {FormControl,Form,Row,Col,Container,Card} from 'react-bootstrap'
import Fantasy from './Fantasy.json'
import SingleBook from "./SingleBook";
import Comments from "./comments";
import CommentForm from "./CommentForm";
import { useState } from "react";






const BookList=()=> {
  const [search, setSearch] = useState('') 
  const [selected, setSelected] = useState(null) 
 
        return(
            <Container>
                  <Row>
                    
                           
                               <FormControl 
                                    placeholder='Search Books'
                                    className="my-4"
                                    type="text"                                  
                                    value={search}
                                    onChange={(e)=>setSearch(e.currentTarget.value.toLowerCase())}/>
                      
                       
                
            
                         {
                            Fantasy
                            .filter(book=> (book.title.toLowerCase().includes(search)))
                            .map(book=>
                  
                                    <Col className="col-lg-3 d-flex" key={book.asin} >
                                    <SingleBook item={book} changeSelected={asin=> setSelected(asin)}/>
                                    </Col>)
                         }    
                        {<Comments asin={selected}/>}
                        {<CommentForm Asin={selected}/>}
             
         </Row>
     </Container>
        )
    
}

export default BookList