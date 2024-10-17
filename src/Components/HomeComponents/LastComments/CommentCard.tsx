import { IComment } from "@/types/Comment";

export default function CommentCard({ data }: { data: IComment }) {
    return (
        <div className="relative min-w-[264px] min-h-[178px] flex flex-col gap-4 p-4 border border-customDark2 rounded-[10px]">
            <section className="w-full flex flex-col items-start gap-2">
                <div className="w-full flex justify-between text-customBlue2 text-xs font-semibold">
                    <span className="">{data.title}</span>
                    <span>{data.rating.toFixed(1)}</span>
                </div>
                <p className="text-black text-xs font-light ">
                    {data.review}
                </p>
                <button className="text-[11px] text-customBlue3">
                    Devamını Oku
                </button>
            </section>
            <section className="flex flex-col text-black">
                <span className="text-xs">{data.author}</span>
                <span className="text-[10px]">{data.date}</span>
            </section>
        </div>
    );
}
