import Image from "next/image"
export default function Logo() {
    return (
        <>
            <div className="flex justify-center flex-col items-center">
                <Image className="mx-auto" src={'/Gold.png'} alt="logo" quality={100} height={250} width={250} />
                <div className="flex flex-row">
                <h1 className="font-bold font-sans px-2 text-5xl text-amber-300">EVENT </h1>
                <h1 className="font-bold font-sans text-5xl">WISE</h1>
                </div>
            </div>
        </>
    )
}