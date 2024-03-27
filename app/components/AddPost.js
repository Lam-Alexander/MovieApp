"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddPost = () => {
    const Router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/posts", input).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
    setInput({});
    setShowModal(false);
    Router.refresh();
})
  }
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer"
      >
        Add New Post
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1>Add or Update a Post</h1>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="w-full p-2 mb-3"
            value={input.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            className="w-full p-2 mb-3"
            value={input.description}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-5 py-2">
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
