"use client"

import { openFeedBack } from "@/redux/formReducer";
import { updateListType } from "@/redux/ListReducer";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { lazy } from "react";
const FeedbackForm = lazy(() => import("../sidebar/FeedbackForm"));
import MessageIcon from '@mui/icons-material/Message';

const SideBar = () => {
    const openForm = useSelector((state: { openForm: { open: boolean } }) => state.openForm.open);

    const dispatch = useDispatch();
    const activeTab = useSelector((state: { listType: { listType: string } }) => state.listType.listType);

    return (
        <div className={`sidebar_container box_shadow ${openForm === true ? "w-[calc(90vw)] md:w-[calc(70vw)]" : "w-fit lg:w-full"}`}>
            <section className="h-full w-[25%] lg:w-full mt-[6rem] max-w-[25rem] hidden lg:flex flex-col items-center gap-[30px]">
                <div className="h-[15%] w-[80%] min-h-[70px] max-h-[13rem] max-w-[25rem] flex items-center px-[15px] gap-[18px] bg-[#FFFFFF] rounded-[8px] box_shadow">
                    <Image
                        src={"https://s3-alpha-sig.figma.com/img/653e/606a/6463c908ec756c9506803122106aac81?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D0PXVLGx0qLW6HHHswHVYhWba2K-hVMM3F9SPBZ55Xj17MnZyhNT0HGS88NiN6g1DWrJA9qBSzHoVclFnC2TWZjGuLFemYQqLyGfeWhMNkYT7~KlwFT68K53gfZujIPZAqx~QjRwZmpc0R9Bz35CkFiSBt-n49qzoOM4ep-D2d7VB5EJzzjinEWLa5eu7~unV7~bQSRGz7-p~br3qod9Gi-q3iRSVKgK77-W7j48qvxf9MegtY8uNf-C0TVOC4DziHfihtSb-qloE6KrttmbmCDg8TEF3UaA9D7kxnb4xFHH3LuS8NlS1ge3~ml-q8pWV1DUStUv9UgEZhu~vm9~mQ__"}
                        alt="user_image"
                        height={100}
                        width={100}
                        className="size-[50px] rounded-full object-cover"
                    />
                    <div className="block">
                        <p className="text-[14px] font-semibold">Hi Reader,</p>
                        <p className="text-[13px]">Here&apos;s your news</p>
                    </div>
                </div>

                {!openForm && <div className="h-[20%] w-[80%] min-h-[90px] max-h-[15rem] max-w-[25rem] flex flex-col items-center justify-evenly rounded-[8px] bg-[#FFFFFF] box_shadow">
                    <p className="text-[24px] font-semibold">View Toggle</p>
                    <div className="h-[30%] w-[70%] rounded-[8px]">
                        <button
                            onClick={() => dispatch(updateListType("grid"))}
                            className={`h-full w-[50%] rounded-tl-[8px] rounded-bl-[8px] cursor-pointer
                         ${activeTab === "grid" ? "bg-[#A3FFD3]" : "bg-[#EBF2F7]"}`}>
                            <Image
                                src="/grid_icon.svg"
                                alt="grid_icon"
                                height={80}
                                width={80}
                                className="size-[40%] m-auto"
                            />
                        </button>
                        <button
                            onClick={() => dispatch(updateListType("list"))}
                            className={`h-full w-[50%] rounded-tr-[8px] rounded-br-[8px] cursor-pointer
                        ${activeTab === "list" ? "bg-[#A3FFD3]" : "bg-[#EBF2F7]"}`}>
                            <Image
                                src="/list_icon.svg"
                                alt="grid_icon"
                                height={80}
                                width={80}
                                className="size-[40%] m-auto"
                            />
                        </button>
                    </div>
                </div>}

                <div className="h-[20%] w-[80%] min-h-[90px] max-h-[15rem] max-w-[25rem] flex flex-col items-center justify-evenly rounded-[8px] bg-[#FFFFFF] box_shadow">
                    <p className="text-[24px] font-semibold">Have a Feedback?</p>
                    <button
                        onClick={() => { dispatch(openFeedBack(true)) }}
                        className={`h-[30%] w-[80%] rounded-[8px] ${openForm ? "bg-[#FFAFAF]" : "bg-[#A3FFD3]"} text-[15px] lg:text-[18px] font-semibold cursor-pointer`}>
                        We&apos;re Listening!
                    </button>
                </div>
            </section>
            <section className="h-full w-[70px] lg:hidden flex flex-col gap-[20px] items-center">
                <Image
                    src={"https://s3-alpha-sig.figma.com/img/653e/606a/6463c908ec756c9506803122106aac81?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D0PXVLGx0qLW6HHHswHVYhWba2K-hVMM3F9SPBZ55Xj17MnZyhNT0HGS88NiN6g1DWrJA9qBSzHoVclFnC2TWZjGuLFemYQqLyGfeWhMNkYT7~KlwFT68K53gfZujIPZAqx~QjRwZmpc0R9Bz35CkFiSBt-n49qzoOM4ep-D2d7VB5EJzzjinEWLa5eu7~unV7~bQSRGz7-p~br3qod9Gi-q3iRSVKgK77-W7j48qvxf9MegtY8uNf-C0TVOC4DziHfihtSb-qloE6KrttmbmCDg8TEF3UaA9D7kxnb4xFHH3LuS8NlS1ge3~ml-q8pWV1DUStUv9UgEZhu~vm9~mQ__"}
                    alt="user_image"
                    height={100}
                    width={100}
                    className="size-[40px] rounded-full object-cover"
                />
                <Image
                    onClick={() => dispatch(updateListType("grid"))}
                    src="/grid_icon.svg"
                    alt="grid_icon"
                    height={80}
                    width={80}
                    className="size-[30px] cursor-pointer"
                />
                <Image
                    onClick={() => dispatch(updateListType("list"))}
                    src="/list_icon.svg"
                    alt="grid_icon"
                    height={80}
                    width={80}
                    className="size-[30px] cursor-pointer"
                />
                <MessageIcon
                    onClick={() => { dispatch(openFeedBack(true)) }}
                    fontSize="large"
                    className="text-slate-400 cursor-pointer" />
            </section>
            {
                openForm && <FeedbackForm />
            }
        </div>
    )
}

export default SideBar;
