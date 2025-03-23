import Image from "next/image";

interface CardPopupProps {
    openPopup: boolean;
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardPopup: React.FC<CardPopupProps> = ({ openPopup, setOpenPopup }) => {
    return (
        <div
            className={`fixed z-30 h-screen w-screen flex justify-center items-center ${openPopup ? "backdrop-blur-md" : ""}`}
            onClick={() => setOpenPopup(false)}
        >
            <aside
                className="h-[80%] lg:h-[60%] w-full lg:w-[60%] block rounded-[16px]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src="/popup_picture.svg"
                    alt="popup_picture"
                    height={800}
                    width={1500}
                    className="size-full object-cover"
                />
            </aside>
        </div>
    );
};

export default CardPopup;
