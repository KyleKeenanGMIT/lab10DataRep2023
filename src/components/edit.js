import { useEffect, useState } from "react"; //imports
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";




export default function Edit() {
    let { id } = useParams();

    const [ title,setTitle ] = useState('');
    const [ cover,setCover ] = useState('');
    const [ author,setAuthor ] = useState('');//3 variables created.

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/book/'+id)//goes to /api/books with the id of the book previously created.
            .then((response) => {
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);//updating the variables - call back function.

            })
            .catch(
                (error) => {console.log(error)}
                    
                //call back function
            );

    },[]); //useeffect will be used to read from database and populate.


    const handleSubmit = (e) => {
        e.preventDefault();//var for handlesubmit.

        //obj created
        const book = {
            _id:id,
            title:title,
            cover:cover,
            author:author
        }//gives a property of _id to title,cover,author.

        axios.put('http://localhost:4000/api/book/'+id, book)//goes to edited book.
            .then((res) => {
                navigate('/read');//naviagates to /read component


            })
            .catch(
                (error)=>{
                    console.log(error);//logs error if response doesnt work.
                }//call back function
            )
    }

    return (
        <div>
            <h2>Hello from edit component!</h2>{/* form imported from create.js details changed to Edit instead of Add.*/}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div>
                    <input type="submit" value="Edit Book"></input>
                </div>

            </form>{/* end of form*/}
        </div>
    );
}