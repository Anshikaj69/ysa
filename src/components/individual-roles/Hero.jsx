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
        <div className="px-10 pt-6 pb-10 2xl:mt-20 md:mt-16">
            <Container>


                {/* banner */}
                <div className="rounded-xl " >
                    <div className="rounded-xl relative aspect-[16/9] md:aspect-[18/6]  bg-cover "
                        style={{ backgroundImage: `url(${heroSection.image_url})` }}>
                        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 rounded-xl  backdrop-blur">
                            <div className="font-semibold text-xl sm:text-2xl lg:text-3xl sm:max-w-3xl max-w-xs  ">
                                {heroSection.title}
                            </div>
                        </div>
                        <div className="flex flex-col bg-black px-6 py-4 gap-2 absolute bottom-[-10%] left-[20%] rounded-xl text-white">
                            <p className='font-medium 2xl:text-sm md:text-xs'>Category :</p>
                            <p className=' 2xl:text-sm md:text-xs'>{snap.service}</p>
                        </div>
                        <div className="flex flex-col bg-black px-6 py-4 gap-2 absolute bottom-[-10%] left-[35%] rounded-xl text-white">
                            <p className='font-medium 2xl:text-sm md:text-xs'>Role :</p>
                            <p className=' 2xl:text-sm md:text-xs'>{RoleName}</p>
                        </div>
                        <div className="flex flex-col bg-black px-6 py-4 gap-2 absolute bottom-[-10%] left-[55%] rounded-xl text-white">
                            <p className='font-medium 2xl:text-sm md:text-xs'>Time :</p>
                            <p className=' 2xl:text-sm md:text-xs'>{snap.service}</p>
                        </div>
                        <div className="flex flex-col bg-black px-6 py-4 gap-2 absolute bottom-[-10%] left-[70%] rounded-xl text-white">
                            <p className='font-medium 2xl:text-sm md:text-xs'>Cost :</p>
                            <p className=' 2xl:text-sm md:text-xs'>$300-$500</p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Hero