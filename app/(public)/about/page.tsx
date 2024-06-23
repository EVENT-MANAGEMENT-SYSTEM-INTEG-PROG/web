export default function About() {
    return (
        <>
        <div>
      {/* Content Section */}
            <section className="p-12 bg-bg-customColor_black my-5 flex items-center justify-center text-center">
            <div className="flex-1 max-w-1/2">
                <h2 className="text-yellow-400 text-4xl mb-5 text-center font-bold">ABOUT US</h2>
                <p className="w-[35em] text-justify mx-[30px]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                </div>
                <div className="flex-1 max-w-1/2 text-center relative">
                <div className="absolute top-0 left-0 bg-yellow-400 w-full h-full -mt-1 ml-3.5 -mb-25 z-0"></div>
                <img src="images/about-image.png" alt="About Us" className="relative z-10 w-full h-auto my-5 mx-auto" />
                </div>
            </section>
                    
            <section className="relative flex flex-col md:flex-row justify-around items-center text-center bg-cover bg-center bg-no-repeat bg-[url('/images/back.png')] text-white py-12">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <div className="relative mx-5 md:mx-10 z-20">
                <h3 className="text-4xl m-0 text-white" data-count="5000">0</h3>
                <p className="mt-2 text-base text-yellow-400 font-bold">TOTAL EVENTS</p>
                </div>
                <div className="relative mx-5 md:mx-10 z-20">
                <h3 className="text-4xl m-0 text-white" data-count="500">0</h3>
                <p className="mt-2 text-base text-yellow-400 font-bold">ANNUAL EVENTS</p>
                </div>
                <div className="relative mx-5 md:mx-10 z-20">
                <h3 className="text-4xl m-0 text-white" data-count="1000">0</h3>
                <p className="mt-2 text-base text-yellow-400 font-bold">VENUES</p>
                </div>
            </section>
                    
            <section className="p-12 bg-[var(--background-color)] my-5 flex items-center justify-center text-center">
                <div className="flex-1 max-w-1/2 text-center">
                <img src="/images/offer-image.png" alt="What We Offer" className="w-3/4 h-auto my-5 mx-auto" />
                </div>
                <div className="flex-1 max-w-1/2">
                <h2 className="text-yellow-400 text-3xl mb-5 font-bold">WHAT WE OFFER?</h2>
                <p className="w-[35em] text-justify mx-[30px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </section>

            <section className="p-12 bg-[var(--background-color)] my-5 flex items-center justify-center text-center">
                <div className="flex-1 max-w-1/2">
                <h2 className="text-yellow-400 text-3xl mb-5 font-bold">WHO WE ARE?</h2>
                <p className="w-[35em] text-justify mx-[30px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
                <div className="flex-1 max-w-1/2 text-center">
                <img src="/images/who-image.png" alt="Who We Are" className="w-3/4 h-auto my-5 mx-auto" />
                </div>
            </section>
    </div>
        </>
    )
}