
import { Component } from "react";
import {FormControl,Form,Row,Col,Container,Card} from 'react-bootstrap'
import Fantasy from './Fantasy.json'
import SingleBook from "./SingleBook";
import Comments from "./comments";
import CommentForm from "./CommentForm";
import { useState } from "react";






class BookList extends Component{
    
    state = {
     
        search: "",
        selected:null
    }
    render(){
        const {selected,search} = this.state
        return(
            <Container>
                  <Row>
                    
                           
                               <FormControl 
                                    placeholder='Search Books'
                                    className="my-4"
                                    type="text"
                                    
                                    value={this.state.value}
                                    onChange={(e)=>this.setState({search:e.currentTarget.value.toLowerCase()})}/>
                      
                       
                
            
                         {
                            Fantasy
                            .filter(book=> (book.title.toLowerCase().includes(search)))
                            .map(book=>
                  
                                    <Col className="col-lg-3 d-flex" key={book.asin} >
                                    <SingleBook item={book} changeSelected={asin=> this.setState({selected:asin})}/>
                                    </Col>)
                         }    
                        {<Comments asin={this.state.selected}/>}
                        {<CommentForm Asin={this.state.selected}/>}
             
         </Row>
     </Container>
        )
    }
}

export default BookList