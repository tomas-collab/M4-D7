import {Component} from 'react'
import{Card, ListGroup, Row} from 'react-bootstrap'
// import CommentForm from './CommentForm'
// import Comments from './comments'
// import deleteComment from './DeleteComment'
import {Link} from 'react-router-dom'




class SingleBook extends Component{
 
    render(){
      const {item} = this.props
        return(  
          <>
            <Row className=''>
             <Card className='my-3 grid-child' onClick={()=>this.props.changeSelected(item)}
             style={{width:'250px',height:'auto'}}>
             <Card.Img variant="top" src={item.img} 
                className=''
                style={{width:'249px', height:'100px',objectFit:'cover'}}
                  />
                     <Card.Body>
                    <Card.Title>
                      <Link to={'/details/' + item.asin}>{item.title}
                    </Link>
                      </Card.Title>
                    </Card.Body>
                </Card>
                </Row>
                </>
                )
            }
        }
export default SingleBook



// const SingleBook = ()=>{
 
//       return(  
//         <>
//           <Row className=''>
//            <Card className='my-3 grid-child' onClick={()=>this.props.changeSelected(this.props.item.asin)}
//            style={{width:'250px',height:'auto'}}>
//            <Card.Img variant="top" src={this.props.item.img} 
//               className=''
//               style={{width:'249px', height:'100px',objectFit:'cover'}}
//                 />
//                    <Card.Body>
//                   <Card.Title>{this.props.item.title}</Card.Title>
//                   </Card.Body>
//               </Card>
//               </Row>
//               </>
//               )
          
//       }
// export default SingleBook
