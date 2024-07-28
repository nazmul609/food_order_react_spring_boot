import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
  {
    category: "Seeds and Nuts",
    ingredients: ["Cashew Nut", "Chia Seeds", "Wall Nut"]
  },
  {
    category: "Protein",
    ingredients: ["Ground Beef", "Bacon strips"]
  },
  {
    category: "Bread",
    ingredients: ["Ham bread", "Brown bread"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log(value)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
        <div className='lg:flex items-center justify-between '>
          <div className='lg:flex items-center lg:gap-5'>
            <img className='w-[7rem] h-[7rem] object-cover'
              src="https://cdn.pixabay.com/photo/2022/02/12/15/00/biryani-7009110_640.jpg" alt="item pic" />
          </div>
          <div className='space-y-1 lg:space-y-3 lg:max-w-2xl'>
            <p className='font-semibold text-xl'>Biriyani</p>
            <p>$10</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugit officiis eligendi aliquam illo tempore!</p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className='flex gap-5 flex-wrap'>
            {
              demo.map((item)=>
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {
                      item.ingredients.map(
                        (item)=>
                          <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item}/>
                      )
                    }
                  </FormGroup>
                </div>
              )
            }
          </div>
          <div className='pt-5'>
            <Button variant='contained' disabled={false} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard