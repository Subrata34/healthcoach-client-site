import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const Element = () => {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    if (!image) {
        return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('discription', discription);
    console.log(discription)
    formData.append('image', image);

    fetch('http://localhost:5000/appiont', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                // setSuccess('Doctor added successfully')
                console.log('doctor added successfully')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
  return (
    <div>
      <h1>please input Element </h1>
      <div>
        <TextField
          label="Name"
          type="name"
          onChange={(e) => setName(e.target.value)}
          style={{ width: "40%" }}
          variant="standard"
        />
        <br />
        <br />

        <TextField
          label="Discription"
          type="text"
          onChange={(e) => setDiscription(e.target.value)}
          style={{ width: "40%", height: "100px" }}
        />
        <br />
        <Input
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ width: "40%" }}
          type="file"
        />
        <br />

        <Button
          variant="contained"
          style={{ width: "40%" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Element;
