
import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Navbar from './assets/components/Navbar/Navbar'

function App() {

  const [bookMarked, setBookMarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog])

  }


  const handleMarkAsRead = (time, id) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    handleRemoveBookmark(id);
  }

  const handleRemoveBookmark = (id) => {
    const remainingBookmark = bookMarked.filter(mark => mark.id !== id);
    console.log(remainingBookmark);
    setBookMarked(remainingBookmark); 
  }

  return (
    <>
      <Navbar></Navbar>


      <div className='main-container flex gap-[5%] mt-10'>
        <div className='left-container w-[70%]'>
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className='right-container w-[25%]'>
          <h3 className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl p-4 font-semibold rounded-lg mb-2'>Spend Time On Read: {readingTime} min</h3>
          <h3 className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl p-4 font-semibold rounded-lg'>Bookmarked Count: {bookMarked.length}</h3>
          <div className='space-y-3'>
            {
              bookMarked.map(marked => <p key={marked.id} className='my-3 bg-gray-100 px-2 py-4 rounded-lg shadow'>{marked.title}</p>)
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default App
