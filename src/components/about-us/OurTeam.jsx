import React from 'react'
import Container from '../layout/Container'

const OurTeam = () => {
    const members = [
        {
            name: 'Farid',
            position: 'Founder & CEO',
            imageurl : '/person.svg?url',
            instagramUrl : '',
            linkedinUrl : '',
            twitterUrl : '',
        },
        {
            name: 'Daneesh Manji',
            position: 'Founder & CEO',
            imageurl : '/person.svg?url',
            instagramUrl : '',
            linkedinUrl : '',
            twitterUrl : '',
        },
        {
            name: 'Liam Cooper',
            position: 'Marketing Head',
            imageurl : '/person.svg?url',
            instagramUrl : '',
            linkedinUrl : '',
            twitterUrl : '',
        }
    ]
  return (
    <div className='py-14 px-4 md:px-10'>
        <Container>
            <h2 className='text-4xl font-bold playfair-display-font text-[#253359] text-center'>Our Team</h2>

            <div className="grid grid-cols-3 justify-between gap-10 my-8">
            {members.map((member) => (
                <div className="flex flex-col col-span-1">
                    <div className="flex">
                        <img src={member.imageurl}/>
                    </div>
                    <h3 className='text-xl font-bold playfair-display-font'>{member.name}</h3>
                    <h4 className='text-lg '>{member.position}</h4>
                </div>
            ))}
            </div>
        </Container>
        </div>
  )
}

export default OurTeam