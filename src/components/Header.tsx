export function Header(){
    return(
        <div className="flex flex-row bg-red-200 p-10">
            <div className="">
                <button>AKIO</button>
            </div>
            <div className="bg-slate-400 ml-auto">
                <button className="mr-2">NISSAN</button>
                <button className="mr-2">TOYOTA</button>
                <button className="mr-2">MITSUBISHI</button>
                <button className="mr-2">SUBARU</button>
                <button className="mr-2">MAZDA</button>
                <button className="mr-2">HONDA</button>
            </div>
        </div>
    )
}