const BlogDetails = ({title, image, description, intro}) => {
    return <div className="p-8">
    <h2  className="text-3xl font-bold m-2">{title}</h2>
    <div className="flex justify-center mt-4">
        <img src={image}  alt="Meet Whitney" className="rounded-lg shadow-sm " width="400px" height="800px" />
    </div>

    <div className="text-gray-600 w-[400] justify-center mx-40 mt-4"><p>
        {intro}
    </p></div>
    
    <p className="text-gray-600 text-sm mt-6">
         {description}
    </p>
</div>;
}

export default BlogDetails;