import Image from "next/image";


const NewsListCard = ({ content, description, image, date, setOpenPopup }: { content: string | null, description: string | null, image: string, date: number | string | Date, setOpenPopup: (open: boolean) => void }) => {
    const publishedAt = new Date(date).toDateString();
    return (
        <section
            onClick={() => { setOpenPopup(true) }}
            className="new_grid_card">
            <Image
                src={image}
                alt="card_image"
                height={70}
                width={70}
                className="size-[60px] rounded-full object-cover"
            />
            <div className="h-fit w-[70%] block">
                <p className="card_content line-clamp-1">{content}</p>
                <p className="card_description line-clamp-1">{description}</p>
                <span className="h-fit w-full flex gap-[4px] text-[14px] font-Roboto text-[#B9B9B9] font-[700]">
                    {publishedAt}
                </span>
            </div>
            <Image
                src={'/cross_icon.svg'}
                alt="cross icon"
                height={40}
                width={40}
                className="size-[20px] cursor-pointer"
            />
        </section>
    )
}

export default NewsListCard;