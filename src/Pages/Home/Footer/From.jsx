

const From = () => {
    const containerStyle = {
        borderRadius: '8.245px',
        border: '7px solid rgba(255, 255, 255, 0.20)',
        background: 'linear-gradient(155deg, rgba(189, 248, 255, 0.80) 2.29%, rgba(255, 255, 255, 0.80) 98.03%)',
        boxShadow: '0px 8.003px 8.003px 0px rgba(0, 107, 189, 0.09), 0px 18.407px 11.204px 0px rgba(0, 107, 189, 0.05)',
        backdropFilter: 'blur(5px)',
      };
    return (
        <div className="absolute md:right-20 md:top-10 lg:right-52 top-4 hidden md:block">
            <section style={containerStyle}  className="max-w-[350px] p-6 mx-auto -mt-14  ">
        

        <h2 className="text-2xl font-semibold  capitalize ">Quick Quote</h2>
  
        <form>
          <div  className="font-popins">
            <div>
             
              <input
              placeholder="Name"
                type="text"
                className="block  py-1  placeholder:text-blue-700 px-2  mt-3 text-blue-700 border border-blue-200 rounded-md dark:bg-blue-800 dark:text-blue-300 dark:border-blue-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
            
              <input
     
                placeholder="Phone:(optional)"
                type="text"
                className="block py-1  placeholder:text-blue-700 px-2  mt-3 text-blue-700  border border-blue-200 rounded-md dark:bg-blue-800 dark:text-blue-300 dark:border-blue-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
             
              <input
             
                placeholder="Email:"
                type="text"
                className="block placeholder:text-blue-700 py-1  px-2  mt-2 text-blue-700  border border-blue-200 rounded-md dark:bg-blue-800 dark:text-blue-300 dark:border-blue-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
             
              <input
                id="username"
                type="text"
                placeholder="Meassge"
                className="block  px-2 py-4 mt-3  placeholder:text-blue-700  text-blue-700 border border-blue-200 rounded-md dark:bg-blue-800 dark:text-blue-300 dark:border-blue-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
  
          </div>
  
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Save</button>
          </div>
        </form>
      </section> */
        </div>
    );
};

export default From;