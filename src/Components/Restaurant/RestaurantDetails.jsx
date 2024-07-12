import React from 'react'
import { Grid } from '@mui/material'; // Import Grid from Material-UI

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>

      <section>
        <h1>Homemade Veg Delight</h1>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img className='w-full h-[40vh] object-cover' 
              src="https://media.istockphoto.com/id/1477430966/photo/woman-preparing-quinoa-vegetable-mix-cooked-in-a-frying-pan.jpg?s=1024x1024&w=is&k=20&c=k2L_kP_YwX9LVGeb45UbNYPlX85hcUQf2dp57iWTMAE=" alt="food palace pic" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img className='w-full h-[40vh] object-cover' 
              src="https://media.istockphoto.com/id/1210195062/photo/close-up-image-of-females-hands-chopping-green-onion-on-wooden-cutting-board.jpg?s=1024x1024&w=is&k=20&c=EqOGeqH3fp-jXKXd8LK5MTA1uA5qKFBVH3j1NP40088=" alt="food palace pic" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img className='w-full h-[40vh] object-cover' 
              src="https://media.istockphoto.com/id/1210195062/photo/close-up-image-of-females-hands-chopping-green-onion-on-wooden-cutting-board.jpg?s=1024x1024&w=is&k=20&c=EqOGeqH3fp-jXKXd8LK5MTA1uA5qKFBVH3j1NP40088=" />
            </Grid>
          </Grid>
        </div>
      </section>

    </div>
  )
}

export default RestaurantDetails;