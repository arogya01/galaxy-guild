
export default function GlowingBtn({btnName}){
    return(
        <button className="font-bold font-xl border-none text-center text-white animate-glow bg-gradient-to-r from-btn-blue to-btn-purple">
        {btnName}
        </button>
    )
}