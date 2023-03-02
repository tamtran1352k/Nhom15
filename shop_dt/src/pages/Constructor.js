import axios from 'axios'

import ConstructorService from '../services/ConstructorService';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import Input from '../components/Input';
import { toast } from 'react-toastify';

const Constructor1 = () => {
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
        axios.delete(`http://localhost:3000/login/${id}`)
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
      axios.get('http://localhost:3000/login').then(res=>{
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



      function selectUser(id)
      {
        // let item=data[id];
        // setName(item.name)
        //     setEmail(item.email)
        //     setPhone(item.phone);
        //     setPassword(item.password);
        //     setCountry(item.country);
        //     setUserId(item.id)



            fetch("http://localhost:3000/login").then((result) => {
              result.json().then((resp) => {
                // console.warn(resp)
                setUser(resp)
                setName(resp[id-1].name)
                setPhone(resp[id-1].phone)
                setEmail(resp[id-1].email)
                setCountry(resp[id-1].country)
                setPassword(resp[id-1].password)
    
                setUserId(resp[id-1].id)
              })
            })
      }
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
      // function getUsers() {
      //   fetch("http://localhost:3000/login").then((result) => {
      //     result.json().then((resp) => {
      //       // console.warn(resp)
      //       setUser(resp)
      //       setName(resp[0].name)
      //       setPhone(resp[0].phone)
      //       setEmail(resp[0].email)
      //       setCountry(resp[0].country)
      //       setPassword(resp[0].password)

      //       setUserId(resp[0].id)
      //     })
      //   })
      // }
  return (
    <><div>
      </div><div className="container mt-4 mb-3">
              <div className="card border-primary bt-5">
                  <div className="card-header">
                      <div className="row">
                          <div className="col">
                              <h3 className="card-title">Danh sách Người Dùng <small className="text-muted"></small></h3>
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
                                      <th>User Name</th>
                                      <th>Tên Người Sử dụng</th>
                                      <th>Mật Khẩu người Sử dụng</th>
                                      <th>Email người Sử dụng</th>
                                      <th>Sđt người Sử dụng</th>
                                      <th>Đất Nước</th>
                                      <th style={{ width: 80 }} />
                                  </tr>
                              </thead>
                              <tbody>
                                  {data.map((aMajor, idx) => (
                                      <tr key={aMajor}>
                                          <td>{idx + 1}</td>
                                          <td>{aMajor.id}</td>
                                          <td>{aMajor.name}</td>
                                          <td>{aMajor.password}</td>
                                          <td>{aMajor.email}</td>
                                          <td>{aMajor.phone}</td>
                                          <td>{aMajor.country}</td>
                                          <td>
                                          <button onClick={() => selectUser(idx+1)}>Edit</button>
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
          
      
          <div className="card-header">
                      <div className="row">
                          <div className="col">
                              <h3 className="card-title"> Cập Nhật Danh sách Người Dùng <small className="text-muted"></small></h3>
                          </div>
                          <div className="col-auto">
                              {/* <button type="button" onClick={() => showEditModal(null, 0)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"><i className="bi-plus-lg" /> Add</button> */}
                          </div>
                          {/* onclick này là gọi hàmhàm */}
                      </div>
                  </div>
      <div className="card-body">
                      <div className="table-responsive">
                          <table className="table table-bordered border-primary table-hover table-striped">
                              <thead>
                                  <tr className="table-primary border-primary">
                                      <th style={{ width: 50 }}>#</th>
                                      <th>User Name</th>
                                      <th>Tên Người Sử dụng</th>
                                      <th>Mật Khẩu người Sử dụng</th>
                                      <th>Email người Sử dụng</th>
                                      <th>Sđt người Sử dụng</th>
                                      <th>Đất Nước</th>
                                      <th style={{ width: 80 }} />
                                  </tr>
                              </thead>
                              <tbody>
                                        <tr>
                                      
                                          <td>1</td>
                                          <td>      <input type="text" value={userId}  onChange={(e)=>{setUserId(e.target.value)}}placeholder="id" /></td>
                                          <td>    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="name" /> </td>
                                          <td>  <input type="text" value={password}  onChange={(e)=>{setPassword(e.target.value)}}placeholder="password" /></td>
                                          <td>    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" /></td>
                                          <td> <input type="text" value={phone}  onChange={(e)=>{setPhone(e.target.value)}}placeholder="phone" /></td>
                                          <td> <input type="text" value={country}  onChange={(e)=>{setCountry(e.target.value)}}placeholder="country" /></td>
                                      
                                      </tr>
                           
                              </tbody>
                          </table>
                      </div>
                      </div>
                      <div className='text-center justify-content-center align-item-center'>
                      <button onClick={updateUser} className='btn btn-primary ' >Update User</button>  

                      </div>
                   
               
          </>
  )
}

export default Constructor1
