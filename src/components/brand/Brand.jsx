import React from 'react'

function Brand() {

  const brands = [
    {
      _id:1,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
    {
      _id:2,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
    {
      _id:3,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
    {
      _id:4,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
    {
      _id:5,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
    {
      _id:6,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
    {
      _id:7,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZtvi3aLbiINkfJRMGBTPdamlBiWfZtGjFA&s'
    },
  ]
  return (
    <div className='lg:container mx-auto flex flex-col md:gap-4 gap-2'>
    <p className='text-orange-900 text-xl md:text-2xl lg:text-4xl font-linter p-2 font-semibold md:font-bold underline text-justify'>Tob Brands</p>
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-center justify-center gap-2 md:gap-4 lg:gap-2'>
    {
      brands.map((b) =>(
        <div key={b._id} className='brand_item'>
          <img src={b.image} alt='brand' className='h-auto w-auto rounded-3xl'/>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default Brand