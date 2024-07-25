import React from 'react'
import { Grid } from '@mui/material'; // Import Grid from Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>

      <section>
        <h1 className='text-gray-500 py-2 mt-10'>Homemade Veg Delight</h1>
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
              src="https://media.istockphoto.com/id/1210195062/photo/close-up-image-of-females-hands-chopping-green-onion-on-wooden-cutting-board.jpg?s=1024x1024&w=is&k=20&c=EqOGeqH3fp-jXKXd8LK5MTA1uA5qKFBVH3j1NP40088=" alt="an img" />
            </Grid>
          </Grid>
        </div>
        <div className='pt-3 pb-5'>
          <h1 className='text-4x1 font-semibold'>Homemade Veg Delight</h1>
          <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, alias accusantium nostrum tenetur, optio maiores delectus ab in sequi mollitia error a nam animi recusandae. Quam in ea incidunt assumenda!</p>
          <div className='space-y-3 mt-3'>
            <p className='text-gray-500 flex items-center gap-3'>
            <LocationOnIcon/> <span>ON, Canada</span>
            </p>
            <p className='text-gray-500 flex items-center gap-3'>
            <CalendarTodayIcon/> <span>Mon-Sun : 9am - 9pm</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default RestaurantDetails;