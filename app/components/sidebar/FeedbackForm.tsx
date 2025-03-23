"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { openFeedBack } from "@/redux/formReducer";
import { useDispatch } from "react-redux";

// Validation Schema using Yup
const validationSchema = yup.object().shape({
  fullName: yup.string().min(3, "Full Name must be at least 3 characters").max(50, "Full Name cannot exceed 50 characters").required("Full Name is required"),
  address: yup.string().min(10, "Address must be at least 10 characters").required("Address is required"),
  country: yup.string().min(3, "Country name must be at least 3 characters").required("Country is required"),
  state: yup.string().min(3, "State name must be at least 3 characters").required("State is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  feedback: yup.string().min(10, "Feedback must be at least 10 characters").required("Feedback is required"),
});

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: { fullName: string; address: string; country: string; state: string; email: string; feedback: string }) => {
    console.log("Form Submitted:", data);
  };
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[8px] rounded-tr-[32px] rounded-br-[32px] bg-[var(--base_bg_color)]">
      {/* Header */}
      <div className="h-fit w-full col-span-full">
        <h1 className="text-[20px] font-[700]">Thank you so much for taking the time!</h1>
        <p className="text-[15px]">Please provide the below details!</p>
      </div>

      {/* Full Name */}
      <div className="h-fit w-full flex flex-col col-span-[50%]">
        <label className="text-[16px] font-[400] mb-[4px]">Full Name</label>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          {...register("fullName")}
          className="h-[40px] lg:h-[52px] max-w-[20rem] lg:max-w-none w-full min-w-[12rem] px-[10px] focus:outline-none focus:ring-0 placeholder:text-[15px] rounded-[7px] bg-[var(--children_bg_color)]"
        />
        <p className="error_message">{errors.fullName?.message}</p>
      </div>

      {/* Address */}
      <div className="h-fit w-full flex flex-col col-span-full">
        <label className="text-[16px] font-[400] mb-[4px]">Address</label>
        <input
          type="text"
          placeholder="Enter Your Full Postal Address"
          {...register("address")}
          className="h-[50px] lg:h-[85px] w-[90%] max-w-[25rem] lg:max-w-none min-w-[12rem] px-[10px] focus:outline-none focus:ring-0 placeholder:text-[15px] rounded-[7px] bg-[var(--children_bg_color)]"
        />
        <p className="error_message">{errors.address?.message}</p>
      </div>

      {/* Country */}
      <div className="h-fit w-full max-w-[25rem] lg:max-w-none flex flex-col col-span-[50%]">
        <label className="text-[16px] font-[400] mb-[4px]">Country</label>
        <div className="h-fit w-full flex items-center px-[10px] bg-[var(--children_bg_color)] rounded-[7px]">
          <input
            type="text"
            placeholder="Enter Your Country Name"
            {...register("country")}
            className="h-[52px] w-full min-w-[12rem] max-w-[25rem] lg:max-w-none border-0 focus:outline-none focus:ring-0 placeholder:text-[15px]"
          />
          <Image src="/search_icon.svg" alt="search_icon" height={50} width={50} className="size-[20px]" />
        </div>
        <p className="error_message">{errors.country?.message}</p>
      </div>

      {/* State */}
      <div className="h-fit w-full max-w-[25rem] lg:max-w-none flex flex-col col-span-[50%]">
        <label className="text-[16px] font-[400] mb-[4px]">State</label>
        <div className="h-fit w-full flex items-center px-[10px] bg-[var(--children_bg_color)] rounded-[7px]">
          <input
            type="text"
            placeholder="Enter Your State Name"
            {...register("state")}
            className="h-[52px] w-full min-w-[12rem] max-w-[25rem] lg:max-w-none border-0 focus:outline-none focus:ring-0 placeholder:text-[15px]"
          />
          <Image src="/search_icon.svg" alt="search_icon" height={50} width={50} className="size-[20px]" />
        </div>
        <p className="error_message">{errors.state?.message}</p>
      </div>

      {/* Email */}
      <div className="h-fit w-full max-w-[25rem] lg:max-w-none flex flex-col col-span-[50%]">
        <label className="text-[16px] font-[400] mb-[4px]">Email Id</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          {...register("email")}
          className="h-[52px] w-full min-w-[12rem] px-[10px] focus:outline-none focus:ring-0 placeholder:text-[15px] rounded-[7px] bg-[var(--children_bg_color)]"
        />
        <p className="error_message">{errors.email?.message}</p>
      </div>

      {/* Feedback */}
      <div className="h-fit w-full flex flex-col col-span-full">
        <label className="text-[16px] font-[400] mb-[4px]">Feedback</label>
        <input
          type="text"
          placeholder="Write your Feedback"
          {...register("feedback")}
          className="h-[60px] lg:h-[100px] w-[90%] min-w-[12rem] max-w-[25rem] lg:max-w-none px-[10px] focus:outline-none focus:ring-0 placeholder:text-[15px] rounded-[7px] bg-[var(--children_bg_color)]"
        />
        <p className="error_message">{errors.feedback?.message}</p>
      </div>

      {/* Submit Button */}
      <div className="h-fit w-full col-span-full flex justify-start lg:justify-end px-[7px] lg:px-0 gap-[10px]">
        <button
          onClick={() => { dispatch(openFeedBack(false)) }}
          className="h-[40px] lg:h-[50px] w-[120px] lg:w-[220px] bg-gray-400 border-0 cursor-pointer text-[15px] lg:text-[20px] font-[700] rounded-[8px] text-slate-50">
          Cancel
        </button>
        <button type="submit" className="h-[40px] lg:h-[50px] w-[150px] lg:w-[250px] bg-[#5CC8A1] text-[15px] lg:text-[20px] font-[700]
         rounded-[8px] text-[var(--children_bg_color)] cursor-pointer">
          Submit Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
