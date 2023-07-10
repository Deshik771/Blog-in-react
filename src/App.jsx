import { useState } from "react";
import BlogCreateForm from "./Components/BlogCreateForm";
import BlogTile from "./Components/BlogTile";
import Button from "./Components/Button";
import Modal from "./Components/modal";
import BlogDetails from "./Components/BlogDetails";

function App() {

  const [blogs,setBlogs] =useState([
    {
        id: 1,
        title: "Blog 1",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?",
        date: new Date(),
        image: 
            "https://images.unsplash.com/photo-1631885134169-4632f533f0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
    },

    {
        id: 2,
        title: "Blog 2",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?",
        date: new Date(),
        image: 
            "https://images.unsplash.com/photo-1631885134169-4632f533f0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
    },

    {
        id: 3,
        title: "Blog 3",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione vel, dicta quasi repellat facilis aspernatur esse assumenda distinctio quidem ipsam illum! Perferendis doloremque, voluptate impedit repellat ex labore! Corporis?",
        date: new Date(),
        image: 
            "https://images.unsplash.com/photo-1631885134169-4632f533f0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
    },
  ]);

  const [showBlogCreateForm, setshowBlogCreateForm] = useState(false);
  const [activeBlogIndex, setActiveBlogIndex] = useState(-1);

  return (
    <>
      <div className="mt-10">
        <h1 className="text-4xl font-bold uppercase">Blog</h1>
        <div className="mt-4 flex flex-col md:flex-row gap-5 justify-between items-center">
            <h5 className="text-gray-500 ">Enjoy reading Blogs? Go and Enjoy...</h5>
             <Button text="Create Blog" onClick={() => setshowBlogCreateForm(true)}/>
        </div>
        <hr className="mt-2"/>

        <Modal show={showBlogCreateForm} onClose={() => setshowBlogCreateForm(false) }>
          <BlogCreateForm 
            onCancel={() => setshowBlogCreateForm(false)}
            onSubmit={(blog) => {setBlogs([...blogs, blog]),setshowBlogCreateForm(false)}} 
          />
        </Modal>

        <Modal show={activeBlogIndex !== -1} onClose={() => setActiveBlogIndex(-1)} >
          <BlogDetails 
            title={blogs[activeBlogIndex]?.title}
            image={blogs[activeBlogIndex]?.image}
            intro={blogs[activeBlogIndex]?.intro}
            description={blogs[activeBlogIndex]?.description}
          />
        </Modal>

        <div className=" mt-10 gap-9 flex flex-wrap items-center justify-between">
          {blogs.map((blog, index) => (
          <BlogTile 
            key={index} 
            title={blog.title} 
            date={blog.date}
            intro={blog.intro} 
            onDetails={() => setActiveBlogIndex(index)}
          /> 
          ))}

           
        </div>

      </div>
    </>
    
    
  );
}

export default App;
