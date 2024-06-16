const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center">
                <div className="animate-spin">
                    <div className="h-8 w-8 border-t-4 border-r-4 border-b-4 border-l-4 border-primary rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;