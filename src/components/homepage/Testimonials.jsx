import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import Container from '../layout/Container';

const Testimonials = () => {

    return (
        <>
            <div className='px-10 py-10  bg-[#B1977C]'>
                <Container>
                    <div className="flex gap-10 flex-col">

                        <h1 className='text-white playfair-display-font font-bold 2xl:text-4xl text-3xl text-center'>Hear From Our Customers</h1>
                        <div className="quote w-fit h-fit self-center ">
                            <img src='/quote.svg' className='w-[90%] h-[90%] 2xl:w-full 2xl:h-full'></img>
                        </div>

                        <Carousel className="rounded-xl overflow-hidden"

                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="sm"
                                    onClick={handlePrev}
                                    className="!absolute bottom-[2%] !left-[44%] -translate-y-2/4 bg-white hover:bg-gray-300 flex justify-center items-center rounded-3xl text-[#B1977C] text-center "
                                >
                                    <svg
                                        width="13"
                                        height="15"
                                        viewBox="0 0 13 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">

                                        <path fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.981 1.71468C12.9907 1.38394 12.9017 1.05776 12.7254 0.777789C12.549 0.497821 12.2933 0.276846 11.9907 0.142824C11.6882 0.00880303 11.3526 -0.0321781 11.0267 0.0253062C10.7009 0.0827905 10.3995 0.236042 10.1611 0.465491L1.31686 8.77676C1.15098 8.93252 1.01877 9.12075 0.928395 9.32958C0.83802 9.53841 0.791394 9.76342 0.791394 9.99097C0.791394 10.2185 0.83802 10.4437 0.928395 10.6526C1.01877 10.8614 1.15098 11.0494 1.31686 11.2052L10.1611 19.5165C10.3191 19.6732 10.5069 19.7968 10.7134 19.8798C10.9199 19.9628 11.141 20.0036 11.3635 19.9997C11.586 19.9959 11.8055 19.9474 12.009 19.8572C12.2125 19.7671 12.3958 19.637 12.5482 19.4748C12.7006 19.3126 12.819 19.1215 12.8963 18.9128C12.9736 18.7041 13.0083 18.4821 12.9983 18.2597C12.9884 18.0374 12.9339 17.8192 12.8383 17.6183C12.7426 17.4173 12.6076 17.2378 12.4413 17.0898L4.88788 9.99097L12.4413 2.8923C12.6054 2.74201 12.7376 2.56044 12.8303 2.35819C12.923 2.15594 12.9742 1.93706 12.981 1.71468Z"
                                            fill="#BA7C44" />
                                    </svg>

                                </IconButton>
                            )
                            }
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    onClick={handleNext}
                                    className="!absolute bottom-[2%] !right-[44%] -translate-y-2/4 bg-white hover:bg-gray-300 rounded-3xl text-[#B1977C] text-center "
                                >
                                    <svg
                                        width="13"
                                        height="15"
                                        viewBox="0 0 13 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">

                                        <path fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.0190297 1.71468C0.00927494 1.38394 0.0982536 1.05776 0.274618 0.777789C0.450982 0.497821 0.70674 0.276846 1.00927 0.142824C1.3118 0.00880303 1.6474 -0.0321781 1.97325 0.0253062C2.29911 0.0827905 2.60046 0.236042 2.83887 0.465491L11.6831 8.77676C11.849 8.93252 11.9812 9.12075 12.0716 9.32958C12.162 9.53841 12.2086 9.76342 12.2086 9.99097C12.2086 10.2185 12.162 10.4437 12.0716 10.6526C11.9812 10.8614 11.849 11.0494 11.6831 11.2052L2.83887 19.5165C2.6809 19.6732 2.49311 19.7968 2.2866 19.8798C2.08009 19.9628 1.85904 20.0036 1.63651 19.9997C1.41399 19.9959 1.19449 19.9474 0.991004 19.8572C0.787514 19.7671 0.604154 19.637 0.451754 19.4748C0.299354 19.3126 0.181006 19.1215 0.103702 18.9128C0.0263972 18.7041 -0.00829634 18.4821 0.00167133 18.2597C0.011639 18.0374 0.0660659 17.8192 0.161736 17.6183C0.257405 17.4173 0.392377 17.2378 0.55868 17.0898L8.11212 9.99097L0.55868 2.8923C0.394642 2.74201 0.262377 2.56044 0.16969 2.35819C0.0770042 2.15594 0.0257759 1.93706 0.0190297 1.71468Z" fill="#BA7C44" />
                                    </svg>

                                </IconButton>
                            )}
                            navigation={({ activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 text-white">
                                    <div className="text-xl font-semibold">
                                        <span className="text-2xl font-semibold">{activeIndex + 1}</span>/{length}
                                    </div>
                                </div>
                            )}

                        >
                            <div className=' flex justify-center'>
                                <p className='text-white font-medium 2xl:text-lg text-center 2xl:max-w-4xl max-w-3xl '>
                                    Outsourcing our customer support to Your Service Agent was the best decision we made for our company. Their team handled every inquiry with professionalism and efficiency, allowing us to focus on our core business. Highly recommend their services!
                                </p>
                            </div>
                            <div className=' flex justify-center'>
                                <p className='text-white font-medium 2xl:text-lg text-center 2xl:max-w-4xl max-w-3xl '>
                                    We've been using Your Support Agent for our medical billing needs for over a year now, and the results have been outstanding. Their attention to detail and expertise in healthcare billing regulations have significantly improved our revenue cycle management. Couldn't be happier with their service!
                                </p>
                            </div>
                            <div className='pb-20 flex justify-center'>
                                <p className='text-white font-medium 2xl:text-lg text-center 2xl:max-w-4xl max-w-3xl '>
                                    I was struggling to find the time and resources to develop a professional website for my business until I found Your Support Agent. Their web development team exceeded my expectations, delivering a stunning website that perfectly captures the essence of my brand. Thanks to them, my online presence has never been stronger.
                                </p>
                            </div>
                            <div className='pb-10 flex justify-center'>
                                <p className='text-white font-medium 2xl:text-lg text-center 2xl:max-w-4xl max-w-3xl '>
                                    Your Support Agent has been instrumental in streamlining our payroll process. Their payroll outsourcing services are reliable and accurate, saving us time and eliminating the hassle of payroll management. It's been a game-changer for our HR department.
                                </p>
                            </div>
                            <div className='pb-10 flex justify-center'>
                                <p className='text-white font-medium 2xl:text-lg text-center 2xl:max-w-4xl max-w-3xl '>
                                    We enlisted Your Support Agent to bolster our sales efforts, and they delivered exceptional results. Their sales team is proactive, knowledgeable, and skilled at closing deals. Our sales numbers have soared since partnering with them.
                                </p>
                            </div>
                        </Carousel >
                    </div>
                </Container>
            </div >

            {/* footer */}
            <Container>
            <div className='mx-20 my-10 gap-10 flex flex-col justify-center items-center bg-[#253359] rounded-2xl py-10'>
                <p className='2xl:text-2xl text-xl font-semibold text-white text-center max-w-md px-5'>Craft Your Dream Team With Us
                    to Excel Beyond Limits!</p>
                <button className='bg-white text-[#253359] rounded-3xl py-2.5 px-5 2xl:text-base text-sm w-fit'>Book a Call</button>
            </div>
            </Container>
        </>
    )
}

export default Testimonials