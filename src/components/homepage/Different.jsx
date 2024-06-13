import React from 'react'

import bg1 from '/different.svg'
import bg2 from '/unleashed.svg'

const Different = () => {
  return (
    <div>
         {/* what makes us different */}
      <div className='px-40 pb-32 pt-52 flex flex-col gap-16 '
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}      >
        <h1 className='text-[#253359] text-5xl font-bold playfair-display-font text-center'>What Makes Us Different?</h1>
        <div className='flex w-[100%] gap-[3.5%]  justify-center '>

          <div className='flex flex-col bg-gradient-to-b from-[#253359] to-[#25335900] p-2 rounded-3xl w-[31%] items-center  shadow-xl'>
            <h1 className=' text-[#253359] py-2 px-4 bg-white mt-10 mb-8 mx-4 rounded-3xl font-bold w-fit text-center text-lg'>YourSupportAgent</h1>
            <div className='flex flex-col items-center justify-center w-full h-full rounded-2xl bg-white '>
              <h4 className='text-[#253359] text-center  p-8 w-full '>$3,500 - $7,500</h4>
              <h4 className='text-[#253359] text-center bg-[#F3F2F2] p-8 w-full '>Marketing Included</h4>
              <h4 className='text-[#253359] text-center  p-8 w-full'>Dedicated Account Manager</h4>
              <h4 className='text-[#253359] text-center bg-[#F3F2F2] p-8 w-full '>Dedicated Agents To One Client</h4>
              <h4 className='text-[#253359] text-center  p-8 w-full'>Easily Able to Pivot by Adding and Replacing Agents </h4>
              <h4 className='text-[#253359] text-center bg-[#F3F2F2] p-8 w-full h-[100%] rounded-b-2xl'>Work From Our Office Space <br /></h4>
            </div>
          </div>

          <div className='flex flex-col bg-gradient-to-b from-[#D2D2D2] to-[#ffffff00] p-2 rounded-3xl w-[31%] items-center border-4 border-white shadow-xl'>
            <h1 className=' text-[#253359] py-2 px-4 bg-white mt-10 mb-8 mx-4 rounded-3xl font-bold w-fit text-center text-lg'>Competitor</h1>
            <div className=' text-[#253359] flex flex-col items-center justify-center w-full h-full rounded-2xl bg-white'>
              <h4 className='text-center  p-8 w-full'>$4,999 -  $8,999</h4>
              <h4 className='text-center bg-[#F3F2F2] p-8 w-full '>N/A</h4>
              <h4 className='text-center  p-8 w-full'>Dedicated Account Manager</h4>
              <h4 className='text-center bg-[#F3F2F2] p-8 w-full '>Agents May have Multiple Clients</h4>
              <h4 className='text-center  p-8 w-full'>Stuck With Agents Till The End Of Contract </h4>
              <h4 className='text-center bg-[#F3F2F2] p-8 w-full '>Maybe Remote or In Various Locations</h4>
            </div>
          </div>

          <div className='flex flex-col bg-gradient-to-b from-[#D2D2D2] to-[#ffffff00] p-2 rounded-3xl w-[31%] items-center  border-4 border-white shadow-xl'>
            <h1 className='text-[#253359] py-2 px-4 bg-white mt-10 mb-8 mx-4 rounded-3xl font-bold w-fit text-center text-lg'>Freelancer</h1>
            <div className='text-[#253359] flex flex-col items-center justify-center w-full h-full rounded-2xl bg-white'>
              <h4 className='text-center  p-8 w-full'>$1,500 - $6,000</h4>
              <h4 className='text-center bg-[#F3F2F2] p-8 w-full '>N/A</h4>
              <h4 className='text-center  p-8 w-full'>N/A</h4>
              <h4 className='text-center bg-[#F3F2F2] p-8 w-full text-nowrap'>5-15 Other Clients & No Team Effort</h4>
              <h4 className='text-center  p-8 w-full'>Wasting Time & Money Trying To Find The Perfect Fit </h4>
              <h4 className='text-center bg-[#F3F2F2] p-8 w-full '>Remote In Various Locations & Time Zones</h4>
            </div>
          </div>
        </div>

      </div>

      {/* efficiency unleashed */}
      <div className='px-40 pt-10 pb-44 flex flex-col gap-5 items-center '
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className='text-[#253359] text-5xl font-bold playfair-display-font text-center'>Efficiency Unleashed, Growth Amplified, Scale Perfected!</h1>
        <p className='text-[#253359] text-xl font-normal text-center max-w-4xl'>At Your Support Agent, we specialize in providing top-notch outsourcing solutions tailored to meet your business needs. Our team of dedicated professionals is committed to delivering excellence in every aspect of our services.
        </p>
        <div>
          <img src='/group.svg' alt='group' className='h-fit w-fit pt-5'></img>
        </div>
      </div>

      {/* why choose us */}
      <div className='px-40 py-20 gap-10 flex flex-col'>
        <h1 className='text-[#253359] text-4xl font-bold playfair-display-font text-center'>Why Choose Us As Your Service Agent!</h1>
        <div className='flex justify-center w-full h-full gap-[1.7%]'>
          <div className='bg-[#EFF5F2] border border-[#CBD8D3] flex flex-col gap-4 px-5 py-9 rounded-2xl w-[24%] shadow-xl shadow-[#EFF5F2]'>
            <h3 className='text-[#253359] font-semibold text-lg uppercase'>Expertise</h3>
            <p className='text-[#253359]'>With years of experience in the industry, we have the knowledge and skills to deliver exceptional results</p>
          </div>

          <div className='bg-[#EFF5F2] border border-[#CBD8D3] flex flex-col gap-4 px-5 py-9 rounded-2xl w-[24%] shadow-xl shadow-[#EFF5F2]'>
            <h3 className='text-[#253359] font-semibold text-lg uppercase'>Customized Solutions</h3>
            <p className='text-[#253359]'>We understand that every business is unique. That's why we work closely with our clients to develop customized solutions that address their specific needs and goals.</p>
          </div>

          <div className='bg-[#EFF5F2] border border-[#CBD8D3] flex flex-col gap-4 px-5 py-9 rounded-2xl w-[24%] shadow-xl shadow-[#EFF5F2]'>
            <h3 className='text-[#253359] font-semibold text-lg uppercase'>Reliability</h3>
            <p className='text-[#253359]'>You can count on us to deliver reliable and consistent service, allowing you to focus on growing your business with peace of mind.
            </p>
          </div>

          <div className='bg-[#EFF5F2] border border-[#CBD8D3] flex flex-col gap-4 px-5 py-9 rounded-2xl w-[24%] shadow-xl shadow-[#EFF5F2]'>
            <h3 className='text-[#253359] font-semibold text-lg uppercase'>Cost-Effectiveness</h3>
            <p className='text-[#253359]'> Outsourcing to Your Support Agent is not only convenient but also cost-effective. Save time and resources by leveraging our expertise and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Free Up resources */}
      <div className='px-40 py-20 gap-32 flex flex-col bg-[#F4F0EA]' id='resources'>
        
        <div className='flex gap-10 w-full' >
          <div className='flex flex-col w-[57%] gap-10' >
            <h1 className='text-[#253359] text-4xl font-bold playfair-display-font text-nowrap'>Free Up Resources, Accelerate Growth,<br /> and Solve for Scale.</h1>

            <p className='text-[#253359] text-xl font-normal'>At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing, reliable teams that turn growing pains into efficient pathways to profitability.<br /><br />
              Our customized, agile, AI-enabled solutions don't just deliver cost savings — they also help you achieve key business outcomes.<br /><br />
              We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to your unique needs. Plus, flexibility is baked in from day one, so you're never locked into rigid, long-term contracts.<br /><br />
              Now that's outsourcing worth talking about.
            </p>
          </div>
          <div className="imgcontainer flex items-end w-[38%]">
            <img src='/freeup.svg' alt='img'></img>
          </div>
        </div>

        <div className='flex gap-10 w-full' >

          <div className="imgcontainer flex items-end w-[38%]">
            <img src='/dontgrow.svg' alt='img'></img>
          </div>

          <div className='flex flex-col w-[57%] gap-10' >
            <h1 className='text-[#253359] text-4xl font-bold playfair-display-font text-nowrap'>Don't Grow it Alone!</h1>

            <p className='text-[#253359] text-xl font-normal'>Don't let headcount become a headache. We'll connect you with talent that meets your needs.<br/><br/>
              Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you've built.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Different