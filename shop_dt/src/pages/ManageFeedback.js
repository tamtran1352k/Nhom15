import axios from 'axios'

import ConstructorService from '../services/ConstructorService';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import Input from '../components/Input';
import { toast } from 'react-toastify';

const ManageFeedback = () => {
    const defaultMajor = {}; // Define defaultMajor or replace it with an object
    const [major,setMajor]=useState(defaultMajor);
    const [majors, setMajors] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [users, setUser] = useState([])
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userId,setUserId]=useState("");
  
    
    const postDelete = (id, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/feedback/${id}`)
          .then(res => {
            console.log('Deleted!!!', res);
          })
          .catch(err => {
            console.log(err);
          });
      }
      
      const handleEdit = (id) => {
        const userToUpdate = {
          name: name,
          email: email,
          phone: phone
        }
    }
    const [data,setData]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3000/feedback').then(res=>{
        // console.log(res.data)
        setData(res.data)
      })
      .catch(err=>{
        alert('Something went wrong')
      })
    },[])
    // useEffect(() => {
    //     getUsers();
    //   }, [])




      function updateUser()
      {
        let item={name,phone,email,password,country,userId}
        console.warn("item",item)
        fetch(`http://localhost:3000/login/${userId}`, {
          method: 'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(item)
        }).then((result) => {
          result.json().then((resp) => {
            console.warn(resp)
            // getUsers()
          })
        })
      }
 
  return (
    <><div>    
      </div><div className="container mt-4 mb-3">
              <div className="card border-primary bt-5">
                  <div className="card-header">
                      <div className="row">
                          <div className="col">
                              <h3 className="card-title">Thông tin về Feeback của khách hàng<small className="text-muted"></small></h3>
                          </div>
                          <div className="col-auto">
                          </div>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="table-responsive">
                          <table className="table table-bordered border-primary table-hover table-striped">
                              <thead>
                                  <tr className="table-primary border-primary">
                                      <th style={{ width: 50 }}>#</th>
                                      <th>Mã Id của khách Hàng</th>
                                      <th>Tên Người Sử dụng</th>
                                    
                                      <th>Email người Sử dụng</th>
                                    
                                      <th>FeedBack của Khách Hàng</th>
                                      <th style={{ width: 80 }} />
                                  </tr>
                              </thead>
                              <tbody>
                                  {data.map((aMajor, idx) => (
                                      <tr key={aMajor}>
                                          <td>{idx + 1}</td>
                                          <td>{aMajor.id}</td>
                                          <td>{aMajor.name}</td>
                                         
                                          <td>{aMajor.email}</td>
                                          <td>{aMajor.feedback}</td>
                                     
                                          <td>
                                      
                                              <a href="/#" onClick={(e) => postDelete( aMajor.id,e)}><i className="bi-trash text-danger" /></a>
                                          </td>
                                      </tr>
                                  ))};
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          
      
 
      
                  
                   
               
          </>
  )
}

export default ManageFeedback
