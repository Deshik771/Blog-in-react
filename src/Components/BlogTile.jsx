import Button from "./Button";

const BlogTile = ({date, title, intro, onDetails}) => {
    return (
        <div className="w-full md:w-[47%] shadow-2xl p-2">
        <p className="text-gray-500 text-sm ">{new Date(date).toISOString()}</p>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-gray-500">{intro}</p>
        <Button  onClick={onDetails} text="Read full story" color="blue" type="a"/>
        {/* <button onClick="showDetails(${id})" 
            id="${id}" 
            className="mt-4 text-blue-500 hover:text-red-500 cursor-pointer">Read full story
        </button> */}
        </div>
    );
}

export default BlogTile;