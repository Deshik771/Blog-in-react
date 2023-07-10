import { TbX } from "react-icons/tb";

const Modal = ({ show, onClose, children}) => {
    return show ? (<div 
    id="create-blog-form" 
    className="relative z-10" 
    aria-labelledby="modal-title" 
    role="dialog" 
    aria-modal="true"
    >
     
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
         
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl p-4">
            <div 
                onClick={onClose}
                className="flex justify-end pt-2 pr-5 text-gray-500 cursor-pointer"
                 
            ><TbX size={20} />
            </div>
           
            {/* <form action="" className="flex flex-col items-center gap-4">
                <h3 className="text-3xl font-bold text-gray-900 m-4">Create a your new Blog...</h3>
                <input 
                    id="create-blog-form--title-input"
                    type="text" 
                    name="title" 
                    className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
                    placeholder="Enter blog title"
                />
                <textarea 
                    name="intro" 
                    id="create-blog-form--intro-input"
                    className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
                    placeholder="Small introduction"  
                ></textarea>
                <textarea 
                    name="desc" 
                    id="create-blog-form--description-input" 
                    className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
                    placeholder="Add your story" 
                ></textarea>
                <input 
                    id="create-blog-form--image-input"
                    type="url" 
                    name="image"
                    className="border border-gray-700 p-2 rounded shadow-sm w-4/5" 
                    placeholder="Add image url"
                />

                <div className="flex justify-end w-[80%] gap-4">
                    <button 
                        className="px-4 py-2 text-white bg-red-600 rounded shadow w-full md:w-fit gap-2"
                         
                    >Cancel
                    </button>
                    <button 
                        type="button"
                        className="px-4 py-2 text-white bg-green-600 rounded shadow w-full md:w-fit gap-2"
 
                    >Submit
                    </button>
                </div>
            </form> */}
            {children}
        </div>
      </div>
    </div>
</div>
): null ;
};

export default Modal;