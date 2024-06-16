const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <div className="text-center">
                <h1 className="text-4xl lg:text-7xl text-primary">
                    404
                </h1>
                <p className="text-lg lg:text-2xl text-foreground-2 mb-2">
                    Página não encontrada
                </p>
                <small className="text-sm lg:text-base text-foreground-5 bg-shade-4 border border-shade-3 p-1 px-3 rounded-full">
                    Volte para <a href="/" className="text-emerald-500 font-bold underline">home</a>   
                </small>
            </div>
           
            <div className="animate-spin">
                <div className="h-8 w-8 border-t-4 border-r-4 border-b-4 border-l-4 border-primary rounded-lg"></div>
            </div>
        </div>
    );
};

export default NotFound;