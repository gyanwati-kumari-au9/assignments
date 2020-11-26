import React from 'react';
import './postdetails.css'
import axios from 'axios';
import Card from 'react-bootstrap/Card'


class PostDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Users: [],
            responseData: [],
          

        };
    }

    getUsersData(id) {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {})
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
        const { id }  = this.props.match.params
        this.getUsersData(id)
    }

    
    // fetches data
    fetchData(e) {
        e.preventDefault()
        this.getUsersData()
        .then((response)=>{
            this.setState({responseData: response.data})
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {

        

        console.log('render')
        return (
            <div>
                <main>
                    <Card>
                        <div className="card text-white bg-success mb-3"  >
                            <div className="card-header">UserId: {this.state.data && this.state.data.userId}</div>
                            <div className="card-body">
                                <h4 className="card-text">Id:  {this.state.data && this.state.data.id}</h4>
                                <h5 className="card-title">Title:  {this.state.data && this.state.data.title}</h5>
                                <p className="body"><b>Body: </b> {this.state.data && this.state.data.body}</p>   
                            </div>
                        </div> 
                    </Card>
                </main>
            </div>
        )
    }
}

export default PostDetails;