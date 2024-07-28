import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
    {
        category: "Seeds and Nuts",
        ingredient: ["Cashew Nut"]
    },
    {
        category: "Protein",
        ingredient: ["Ground Beef"]
    },
    {
        category: "Bread",
        ingredient: ["Ham bread"]
    }
]

const MenuCard = () => {
  return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls='panel1-content' id='panel1-header'>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint nam voluptatibus in quos magni, vero sunt reiciendis minima impedit, fuga animi! Ipsum quisquam inventore architecto repudiandae eaque totam animi.
        </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard