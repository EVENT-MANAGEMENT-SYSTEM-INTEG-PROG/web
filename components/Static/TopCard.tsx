

export default function TopCard({title} : any) {
    return (
        <>
        <section
        className="">
            <div
            className=""
            >
            {/* top Part of body */}
            <div className="text-center">
                <h1
                className="text-yellow-300 text-4xl font-bold"
                style={{
                    fontFamily: "Staatliches , sans-serif",
                }}
                >
                {title}
                </h1>
                <div className="flex flex-row items-center mt-4 w-full">
                <div className="w-full h-0.5 bg-gradient-to-l from-white to-transparent right-0 "></div>
                <div className="w-full h-0.5 bg-gradient-to-r from-white to-transparent left-0"></div>
                </div>
            </div>
            {/* forms Part of body */}
            </div>
        </section>
        </>
    )
}