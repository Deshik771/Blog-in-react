import { useState } from "react";

const BlogCreateForm = ({onSubmit, onCancel}) => {

    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImageUrl] = useState("");

    return (
    <form action="" className="flex flex-col items-center gap-4">
        <h3 className="text-3xl font-bold text-gray-900 m-4">Create a your new Blog...</h3>
        <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
            id="create-blog-form--title-input"
            type="text" 
            name="title" 
            className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
            placeholder="Enter blog title"
        />
        <textarea 
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            name="intro" 
            id="create-blog-form--intro-input"
            className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
            placeholder="Small introduction"  
        ></textarea>
        <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="desc" 
            id="create-blog-form--description-input" 
            className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
            placeholder="Add your story" 
        ></textarea>
        <input 
            value={image}
            onChange={(e) => setImageUrl(e.target.value)}
            id="create-blog-form--image-input"
            type="url" 
            name="image"
            className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
            placeholder="Add image url"
        />

        <div className="flex justify-end w-[80%] gap-4">
            <button 
                className="px-4 py-2 text-white bg-red-600 rounded shadow w-full md:w-fit gap-2"
                onClick={onCancel}
            >Cancel
            </button>
            <button 
                type="button"
                className="px-4 py-2 text-white bg-green-600 rounded shadow w-full md:w-fit gap-2"
                onClick={() => 
                    onSubmit({
                        title, 
                        intro, 
                        image: image, 
                        description,
                        date: new Date(),
                    })
                }
            >Submit
            </button>
        </div>
    </form>
);
};

export default BlogCreateForm;