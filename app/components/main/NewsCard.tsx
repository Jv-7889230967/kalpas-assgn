import Image from "next/image";


const NewsCard = ({ content, description, image, date, setOpenPopup }: { content: string, description: string, image: string, date: number | string | Date, setOpenPopup: (open: boolean) => void }) => {
    const publishedAt = new Date(date).toDateString();
    return (
        <section
            onClick={() => { setOpenPopup(true) }}
            className="news_grid_card">
            <div className="h-[90%] w-[80%] flex flex-col justify-between">
                <h1 className="card_content">{content}.</h1>
                <p className="card_description">{description}</p>
                <span className="h-fit w-full flex gap-[4px] text-[12px] font-Roboto text-[#B9B9B9] font-[700]">
                    <Image
                        src="/calender_icon.svg"
                        height={40}
                        width={40}
                        alt="calendar icon"
                        className="size-[17px]"
                    />
                    {publishedAt}
                </span>
                <Image
                    src={image}
                    alt="card_image"
                    height={400}
                    width={600}
                    className="h-[50%] w-full rounded-[8px] object-cover"
                />
            </div>
            <Image
                src={'/cross_icon.svg'}
                alt="cross icon"
                height={40}
                width={40}
                className="size-[15px] cursor-pointer absolute top-[7px] right-[7px]"
            />
        </section>
    )
}

export default NewsCard;