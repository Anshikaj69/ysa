import React, { useState, useEffect } from 'react'
import Container from '../layout/Container'
import roleData from '../../utils/roleData.json'
import { useSnapshot } from 'valtio'
import state from '../../store'

const Hero = ({ RoleName }) => {
    const snap = useSnapshot(state)

    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        if (roleData[RoleName]) {
            setSectionData(roleData[RoleName]);
        } else {
            console.error('Role not found');
        }
    }, [RoleName]);

    if (!sectionData) return <div>Loading...</div>;

    const { heroSection } = sectionData
    console.log(heroSection)
    return (
        <div className="md:px-10 px-2 pt-6 pb-8 2xl:mt-28 mt-24 ">
            <Container>

                {/* banner */}
                <div className="rounded-xl " >
                    <div className="rounded-xl relative md:aspect-[4/1] aspect-[16/9] bg-cover bg-center "
                        style={{ backgroundImage: `url(${heroSection.image_url})` }}>
                        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 rounded-xl backdrop-brightness-50">
                            <div className="font-medium text-base md:text-xl sm:text-2xl sm:max-w-3xl max-w-xs  text-white">
                                {heroSection.title}
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col bg-black px-6 py-4 gap-2 absolute bottom-[-10%] left-[18%] rounded-xl text-white ">
                            <p className='font-medium 2xl:text-sm md:text-xs'>Category :</p>
                            <p className=' 2xl:text-sm md:text-xs'>{snap.service}</p>
                        </div>
                        <div className="flex flex-col bg-black md:px-6 md:py-4 py-2 px-3 gap-2 absolute md:bottom-[-10%] bottom-[-14%] md:left-[35%] left-[7%] rounded-xl text-white ">
                            <p className='font-medium 2xl:text-sm text-xs'>Role :</p>
                            <p className=' 2xl:text-sm text-xs'>{RoleName}</p>
                        </div>
                        <div className="hidden md:flex flex-col bg-black px-6 py-4 gap-2 absolute bottom-[-10%] left-[55%] rounded-xl text-white ">
                            <p className='font-medium 2xl:text-sm md:text-xs'>Time :</p>
                            <p className=' 2xl:text-sm text-xs'>{heroSection.time}</p>
                        </div>
                        <div className="flex flex-col bg-black md:px-6 md:py-4 px-3 py-2 gap-2 absolute md:bottom-[-10%] bottom-[-14%] md:left-[70%] left-[50%]  rounded-xl text-white">
                            <div className="flex gap-2">
                            <p className='font-medium 2xl:text-sm text-xs'>Cost :</p>
                            <p className=' 2xl:text-sm md:text-xs '>Hourly - $9.50</p>
                            </div>
                            <p className='2xl:text-sm md:text-xs '>
                                Full Time - $1520 |
                                Part Time - $760
                            </p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Hero