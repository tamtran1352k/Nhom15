import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import majorService from './../services/majorService';

import { Toast } from 'bootstrap';

import { Modal,Button } from 'react-bootstrap';
import Input from '../components/Input';
import { toast } from 'react-toastify';
const defaultMajor={id:0,name:" "};
const Constructor = (props) => {
  const[major,setMajor]=useState(defaultMajor);
  const [majors, setMajors] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
 
const navigate=useNavigate();
  const showEditModal = (e,id) => {
     if(e) e.preventDefault();

    //  navigate(`/major/${id}`);
    if(id > 0){
      majorService.get(id).then(res =>{
         setMajor(res.data);
         setModalShow(true);
      });
    }else{
      setMajor(defaultMajor);
      setModalShow(true);
    }

    
     
  };
  const HendleChange = (e) => {
    let newMajor = {...major};
    newMajor[e.target.name]=e.target.value;
    setMajor(newMajor);
 };
  const loadData=()=>{
    majorService.list().then((res)=>setMajors(res.data));
  }
  const handleDelete=(e,id)=>{
    e.preventDefault();
    majorService.delete(id).then((res)=>{
      if(res.errorCode===0){
        loadData();
        toast.success('Delete sucessful')
      }else{
        toast.error(res.message);
      }
    });
  }
 const saveHandler = () => {
  
  if(major.id > 0){
    majorService.update(major.id,major).then((res) => {
      if(res.errorCode === 0){
       handleModalClose();
       toast.success('update sucessful')
       loadData();
      }
    });
  }else{
    majorService.add( major).then((res) => {
      if(res.errorCode === 0){
        handleModalClose();
        toast.success('add sucessful')
        loadData();
      }
      else{
        toast.error(res.message);
      }
    })
  }
 };
  useEffect(() => {
    majorService.list().then(res => setMajors(res.data));
  }, []);
    return ( 
        <>
       
         <div className="container mt-4">
    <div className="card border-primary bt-5">
      <div className="card-header">
        <div className="row">
          <div className="col">
            <h3 className="card-title">Danh s??ch s???n ph???m <small className="text-muted"></small></h3>
          </div>
          <div className="col-auto">
            <button type="button" onClick={()=>showEditModal(null,0)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"><i  className="bi-plus-lg" /> Add</button>
          </div>
          {/* onclick n??y l?? g???i h??mh??m */}
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered border-primary table-hover table-striped">
            <thead>
              <tr className="table-primary border-primary">
                <th style={{width: 50}}>#</th>
                <th>T??n s???n ph???m</th>
                <th style={{width: 80}} />
              </tr>
            </thead>
            <tbody>
              {majors.map((aMajor, idx) => (
                <tr key={aMajor}>
                <td >{idx + 1}</td>
                <td >{aMajor.name}</td>
                <td>
                  <a href="/#" onClick={(e)=>showEditModal(e,aMajor.id)}><i className="bi-pencil-square text-primary" /></a>
                  <a href="/#" onClick={(e)=>handleDelete(e,aMajor.id)}><i className="bi-trash text-danger" /></a>
                </td>
              </tr>
              ))};
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>      S???n Ph???m <small className="text-muted">{Number(major.id) === 0 ? "m???i" : "s???a"}</small></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Input label="T??n s???n ph???m" required onChange={HendleChange} lastRow name="name" defaultValue={major.name} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            ????ng
          </Button>
          <Button variant="primary" onClick={saveHandler}>
           L??u Thay ?????i
          </Button>
        </Modal.Footer>
      </Modal>
        </>
     );
}
 
export default Constructor;