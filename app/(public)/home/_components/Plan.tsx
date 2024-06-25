

export default function Plan() {

    return (
        <>
        <section className="bg-black place-content-center">
        <div className="flex items-center justify-center h-[30vh] bg-amber-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center justify-center">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-20 items-center justify-center pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-black text-4xl pr-4">Schedule Plans Available</h1>
              <p className="text-black text-lg">Come see which plans works best for you.</p>
            </div>
            <div className="flex items-center justify-center">
              <a href='/events'>
                <button className="inline-block bg-amber-400 text-2xl text-black px-10 p-4 rounded-full shadow-lg border-4 border-black hover:bg-white hover:text-black">
                  View Events
                </button>
              </a>           
            </div>
          </div>
        </div>
        </section>
        </>
    )
}