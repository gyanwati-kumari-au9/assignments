import React from 'react';
import './BlogCard.css'
import { Link,withRouter } from 'react-router-dom';



class BlogCard extends React.Component {

    constructor(props) {
        super(props);
       
    }
    
  
    handleClick() {
        const {history} = this.props; 
        history.push("/post/:id");
      }

    render() {
        console.log('render')
        return (
            <div className="post">
                <main className="sec">
                    <div className="card text-white bg-warning mb-3"  style={ {width: '15rem',height: '18rem'} }>
                        <div className="card-header">Post</div>
                        <div className="card-body">
                            <p className="card-text">Id: {this.props.id}</p>
                            <h5 className="card-title">Title: <br/>{this.props.title}</h5>
                        
                        </div>
                        <Link  onClick={this.handleClick.bind(this)} to={'/post/'+this.props.id} className="btn btn-success" href={'/post/'+this.props.id} >ReadMore..</Link>
                    </div> 
                </main>
            </div>
        )
    }
}

export default withRouter(BlogCard); 