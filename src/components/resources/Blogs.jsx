import React, { useState, useEffect } from 'react'
import Container from '../layout/Container'
import { Minus } from 'lucide-react'
import blogData from '../../utils/blogsData.json'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [currentBlogId, setCurrentBlogId] = useState(blogData[0].id) // Set the first blog as default

  useEffect(() => {
    setBlogs(blogData)
  }, [])

  const currentBlog = blogs.find(blog => blog.id === currentBlogId)

  return (
    <Container>
      <div className="grid md:grid-cols-3 grid-cols-1 2xl:mt-24 md:mt-20 mt-16 py-10 gap-10 md:px-10 px-5">
        {/* Main Blog Content */}
        <div className="w-full flex md:col-span-2 ">
          {currentBlog && (
            <div className="flex flex-col md:gap-8 gap-2 md:text-base text-xs">
              <h1 className='md:text-4xl text-lg font-bold text-center playfair-display-font'>{currentBlog.title}</h1>
              <Minus className='self-center' />
              <div className="flex flex-col gap-6 text-gray-800">
                {currentBlog.content.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br>') }} />
                ))}
              </div>
              <img src={currentBlog.image} className='w-full aspect-[16/9]' />
              
              {/* Steps and Content */}
              {currentBlog.step1 && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4 ">
                  <h4 className="subheading1 md:text-2xl text-base font-semibold">{currentBlog.step1.heading}</h4>
                  <pre className='poppins w-fit text-wrap max-w-4xl' dangerouslySetInnerHTML={{ __html: currentBlog.step1.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
              
              {currentBlog.step2 && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading2 md:text-2xl text-base font-semibold">{currentBlog.step2.heading}</h4>
                  <p dangerouslySetInnerHTML={{ __html: currentBlog.step2.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
              
              {currentBlog.step3 && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading3 md:text-2xl text-base font-semibold">{currentBlog.step3.heading}</h4>
                  <p dangerouslySetInnerHTML={{ __html: currentBlog.step3.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
              
              {currentBlog.step4 && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading4 md:text-2xl text-base font-semibold">{currentBlog.step4.heading}</h4>
                  <p dangerouslySetInnerHTML={{ __html: currentBlog.step4.content.replace(/\n/g, '<br>') }} />
                </div>
              )}
              
              {/* Table */}
              {currentBlog.table && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading5 md:text-2xl text-base font-semibold">Comparison Table</h4>
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        {currentBlog.table.headers.map((header, index) => (
                          <th key={index} className="border border-gray-300 p-2">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentBlog.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-300 p-2">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Downsides */}
              {currentBlog.downsides && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading6 md:text-2xl text-base font-semibold">{currentBlog.downsides.title}</h4>
                  {currentBlog.downsides.content.map((item, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                  ))}
                </div>
              )}

              {/* Freelance Advantages */}
              {currentBlog.freelanceAdvantages && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading7 md:text-2xl text-base font-semibold">{currentBlog.freelanceAdvantages.title}</h4>
                  {currentBlog.freelanceAdvantages.content.map((item, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                  ))}
                </div>
              )}

              {/* Freelance Downsides */}
              {currentBlog.freelanceDownsides && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading8 md:text-2xl text-base font-semibold">{currentBlog.freelanceDownsides.title}</h4>
                  {currentBlog.freelanceDownsides.content.map((item, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                  ))}
                </div>
              )}

              {/* Hybrid Approach */}
              {currentBlog.hybridApproach && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading9 md:text-2xl text-base font-semibold">{currentBlog.hybridApproach.title}</h4>
                  {currentBlog.hybridApproach.content.map((item, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                  ))}
                </div>
              )}

              {/* Agency Downsides */}
              {currentBlog.agencyDownsides && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading10 md:text-2xl text-base font-semibold">{currentBlog.agencyDownsides.title}</h4>
                  {currentBlog.agencyDownsides.content.map((item, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                  ))}
                </div>
              )}


              {/* Benefits */}
              {currentBlog.benefits && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  {currentBlog.benefits.map((benefit, index) => (
                    <div key={index}>
                      <h4 className="subheading md:text-2xl text-base font-semibold mb-4">{benefit.heading}</h4>
                      <p dangerouslySetInnerHTML={{ __html: benefit.content.replace(/\n/g, '<br>') }} />
                    </div>
                  ))}
                </div>
              )}

              {/* Sections */}
              {currentBlog.sections && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  {currentBlog.sections.map((section, index) => (
                    <div key={index}>
                      <h4 className="subheading md:text-2xl text-base font-semibold mb-3">{section.heading}</h4>
                      {section.content.map((item, itemIndex) => (
                        <p key={itemIndex} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                      ))}
                    </div>
                  ))}
                </div>
              )}

               {/* Conclusion */}
               {currentBlog.conclusion && (
                <div className="flex flex-col md:gap-5 gap-2 mt-4">
                  <h4 className="subheading11 md:text-2xl text-base font-semibold">{currentBlog.conclusion.title}</h4>
                  {Array.isArray(currentBlog.conclusion.content) ? (
                    currentBlog.conclusion.content.map((item, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br>') }} />
                    ))
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: currentBlog.conclusion.content.replace(/\n/g, '<br>') }} />
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar with Other Blog Posts */}
        <div className="md:col-span-1 md:ml-5">
          <h2 className="text-xl font-bold mb-4">Other Resources</h2>
          <div className="flex flex-col gap-4">
            {blogs.map(blog => (
              <div key={blog.id} className={` transition flex items-center cursor-pointer ${blog.id === currentBlogId ? 'bg-gray-300 p-2 rounded' : ''}`} onClick={() => setCurrentBlogId(blog.id)}>
                <img src={blog.image} alt={blog.title} className="w-16 h-16 object-cover mr-4" />
                <span className="font-semibold md:text-base text-sm">{blog.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Blogs