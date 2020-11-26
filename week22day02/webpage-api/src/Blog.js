import React from 'react';
import Header from './Components/header';
import BlogCard from './Components/blogcard';
import Footer from './Components/footer';
import './Blog.css'
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck'


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }

    getUsersData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`, {})
            .then(res => {
                const data = res.data
                console.log(data);
                this.setState({data});

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    
    render() {
        console.log('render')
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Header  />
                    </div>
                </div>
                <CardDeck>
                    {this.state.data ? this.state.data.map(post=> <BlogCard key={post.id} id={post.id} title={post.title} />): <h1>No Posts</h1>}
                </CardDeck> 
                    
                <div className="row">
                    <div className="col">
                        <Footer  style={ {textAlign: 'center'} }/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;