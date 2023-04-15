import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./index.scss";

const ModalComponent = ( {modalOpen,setModalOpen,sendStatus ,text,setText}) => {
    // const [text,setText] =useState("")
    console.log(text)

  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer ={[
            <Button key="submit" type="primary" onClick={()=>sendStatus(text)} disabled={!text}>
            post
          </Button>,
        ]}
      >
    <input className='modal-input' 
    value={text}
    onChange={(event)=>setText(event.target.value)}    
    placeholder='what do you want to talk about?' />
      </Modal>
      <br />
    
    </>
  );
};

export default ModalComponent;