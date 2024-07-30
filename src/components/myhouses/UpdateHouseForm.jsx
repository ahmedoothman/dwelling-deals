import React from 'react';
import { patchMyHousesService } from "../../services/houseService"
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Box, Paper, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

 // data
  //patchMyHousesService

    // data is your own houseObject requisted  for update { data }
function UpdateHouseForm() {

  const data={
    address: {
      street: "Ahmedsarout",
      city: "Giza",
      governorate: "Giza",
    },
    images: ["123", "456", "789"],
    title: "My new House",
    description: "My decsription",
    price: "1000000",
    type: "rent",
    imageUrl: "1234",
    rate: "5",
    bedrooms: "3",
    bathrooms: "3",
    area: "400",
  }

  const navigate = useNavigate();
  const [newHouse, setNewHouse] = useState({
    address: {
      street: " ",
      city: " ",
      governorate: "",
    },
    images: ["", "", ""],
    title: "",
    description: "",
    price: "",
    type: "",
    imageUrl: "",
    rate: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
  });

 
   /* Display data in input Field*/
  useEffect(() => {
    if (data) {
      setNewHouse({
        address: {
          street: data.address.street,
          city: data.address.city,
          governorate: data.address.governorate,
        },
        images: data.images,
        title: data.title,
        description: data.description,
        price: data.price ,
        type: data.type ,
        imageUrl: data.imageUrl,
        rate: data.rate,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        area: data.area ,
      });
    }
  }, [data]);

   /////////handelling input fields/////////////////////
  function handleChangeInput(e) {
    const propertyName = e.target.name.split(".")[1];

    {
      /*Top Level State*/
    }
    if (e.target.name.split(".").length === 1) {
      setNewHouse((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      {
        /*Nested state Address*/
      }
      // console.log("Nested")
      setNewHouse((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [propertyName]: e.target.value,
        },
      }));
    }

    // console.log("nameeeee",propertyName , "Valueee", e.target.value)
    // console.log("nameeeee", e.target.name, "Valueee", e.target.value);
  }

  /*Handle State of image*/
  function handleImageFile(e, index) {
    setNewHouse((prevState) => {
      const newImages = [...prevState.images];
      newImages[index] = e.target.files[0];
      return { ...prevState, images: newImages };
    });

    console.log(e.target.name, e.target.value);
  }

  function handleImageUrl(e) {
    setNewHouse((prevState) => ({ ...prevState, imageUrl: e.target.files[0] }));
    console.log(e.target.name, e.target.value);
  }



  const  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("address.street", newHouse.address.street);
    formData.append("address.city", newHouse.address.city);
    formData.append("address.governorate", newHouse.address.governorate);
    formData.append("title", newHouse.title);
    formData.append("description", newHouse.description);
    formData.append("imageUrl", newHouse.imageUrl);
    formData.append("price", newHouse.price);
    formData.append("type", newHouse.type);
    formData.append("rate", newHouse.rate);
    formData.append("bedrooms", newHouse.bedrooms);
    formData.append("bathrooms", newHouse.bathrooms);
    formData.append("area", newHouse.area);

    newHouse.images.forEach((image, index) => {
      formData.append("images", image);
    });

    await patchMyHousesService(data.id,formData)
    .then(() => {
      setNewHouse({
        address: {
          street: "",
          city: "",
          governorate: "",
        },
        images: ["", "", ""],
        title: "",
        description: "",
        price: "",
        type: "",
        imageUrl: "",
        rate: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
      });
      console.log("form submmited sucseefly");
      navigate("/dashboard/myhouses");
    })
    .catch(error => {
      console.error("Error submitting form:", error);
    });
  }



  return (
  // <div>UpdateHouseForm</div>
     <>
       <Paper elevation={3} sx={{ margin: "auto", p: 4, width: "45%" }}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Update House
        </Typography>
        <form style={{ margin: "auto" }} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            {/*title*/}
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={newHouse.title}
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Description*/}
            <Grid item xs={12}>
              <TextField
                label="Description"
                value={newHouse.description}
                name="description"
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
                multiline
                rows={3}
              />
            </Grid>

            {/*Address*/}
            <Grid item xs={12}>
              <Typography variant="h6">Address</Typography>
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Street"
                value={newHouse.address.street}
                name="address.street"
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="City"
                value={newHouse.address.city}
                name="address.city"
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Governorate"
                value={newHouse.address.governorate}
                name="address.governorate"
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Images*/}
            <Grid item xs={12}>
              <Typography variant="h6">Images</Typography>
            </Grid>
            {newHouse.images.map((image, index) => (
              <Grid item xs={4} key={index}>
                <TextField
                  type="file"
                  //   label={`Image${index + 1}`}
                  //   value={image}
                  name="image"
                  onChange={(e) => handleImageFile(e, index)}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            ))}

            {/*Price*/}
            <Grid item xs={12}>
              <TextField
                label="Price"
                value={newHouse.price}
                name="price"
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Type*/}
            <Grid item xs={12}>
              <TextField
                label="Type"
                value={newHouse.type}
                name="type"
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*ImageUrl*/}
            <Grid item xs={12}>
              <TextField
                // label="ImageUrl"
                name="imageUrl"
                // value={newHouse.imageUrl}
                type="file"
                onChange={handleImageUrl}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Rate*/}
            <Grid item xs={12}>
              <TextField
                label="Rate"
                name="rate"
                value={newHouse.rate}
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Bedrooms*/}
            <Grid item xs={6}>
              <TextField
                label="Bedrooms"
                name="bedrooms"
                value={newHouse.bedrooms}
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Bathrooms*/}
            <Grid item xs={6}>
              <TextField
                label="Bathrooms"
                name="bathrooms"
                value={newHouse.bathrooms}
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            {/*Area*/}
            <Grid item xs={12}>
              <TextField
                label="Area"
                name="area"
                value={newHouse.area}
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
     </>

);
}

export default UpdateHouseForm;
