import axios from 'axios';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Meals = () =>{
    const [users, setUsers] = useState([])
    useEffect(() =>{
        axios('https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json')
            .then(({data}) => setUsers(data))
    }, [])
    return (
        <>
            <h1 className='title'>Menu</h1>
        <div className='row'>
            {
                users.map(item =>
                    <>
                        <div className='col-3'>
                            <div className='box'>
                                <Link  to={`/meal/${item.id}`}>
                                    <img key={item.image} width='300' src={item.image.slice(0,60)} alt=""/>
                                    <h3 key={item.id}>{item.title}</h3>
                                </Link>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        </>
    )
}
export default Meals;