import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";

type IComment = {
  postId?: number;
  id?: number;
  email?: string;
  name?: string;
  body?: string;
};

function FetchData() {
  const [comments, setComments] = useState<IComment[]>();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [commentData, setCommentData] = useState<IComment>();

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`, {
        params: {
          _limit: 2,
        },
      })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editRecord = (cmt: IComment) => {
    setShowForm(true);
    setCommentData(cmt);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log(commentData);
    axios
      .put(
        `https://jsonplaceholder.typicode.com/comments/${commentData?.id}`,
        commentData,
        {
          headers: {
            "content-type": "applicaton.json",
          },
        }
      )
      .then((response) => {
        alert("Updated successfully");
        getCommentData();
        console.log(commentData);
        setShowForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dltRecord = (cmt: IComment) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${cmt.id}`)
      .then(() => {
        alert("Deleted");
        getCommentData();
        console.log(commentData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Comments</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments ? (
            comments.map((cmt, key: number) => (
              <>
                <tr key={cmt.id}>
                  <td>{cmt.id}</td>
                  <td>{cmt.name}</td>
                  <td>{cmt.email}</td>
                  <td>{cmt.body}</td>
                  <td>
                    <button onClick={(e) => editRecord(cmt)}>Edit</button>
                    <button onClick={(e) => dltRecord(cmt)}>Delete</button>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td>Loading data</td>
            </tr>
          )}
        </tbody>
      </table>

      {showForm ? (
        <>
          Enter name:
          <input
            type="text"
            name="name"
            value={commentData?.name}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          Enter email
          <input
            type="email"
            name="email"
            value={commentData?.email}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          Enter comment
          <input
            type="text"
            name="body"
            value={commentData?.body}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : null}
    </div>
  );
}

export default FetchData;
