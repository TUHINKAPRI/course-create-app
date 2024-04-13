"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { useUpdateProfie } from "@/hooks/auth_hook";

function UserDeatilsForm() {
  const dispatch = useDispatch();
  const { mutate, status, error } = useUpdateProfie();
  const { register, setValue, getValue, handleSubmit } = useForm();
  const [img, setImg] = useState();
  const fd = new FormData();
  const accountDetailsHandler = (data) => {
    console.log(data);
    mutate(data);
  };
  const profileData = {};
  const isLoading = false;
  return (
    <div>
      <div className=" max-w-2xl p-5 mx-auto">
        <div>
          <p className="font-bold mb-3 text-sm">Accounts :</p>
          <form
            onSubmit={handleSubmit(accountDetailsHandler)}
            className="w-full text-richblue-5 flex flex-col gap-4"
          >
            <Input
              type="text"
              placeholder="email"
              className="w-full h-[48px] font-bold text-xs bg-richblack-800"
              {...register("email", { required: true })}
            />
            <Input
              type="text"
              placeholder="name"
              className="w-full h-[48px] font-bold text-xs bg-richblack-800"
              {...register("name", { required: true })}
            />
            <Input
              type="text"
              placeholder="+91 78946 87894"
              className="w-full h-[48px] font-bold text-xs bg-richblack-800"
              {...register("mobileNo")}
            />
            <div className="w-full ">
              <Button
                disabled={status === "pending" ? true : false}
                className="w-2/12  hover:opacity-80"
              >
                {status == "pending" && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save
              </Button>
            </div>
          </form>
        </div>
        <Separator className="my-4 border bg-richblack-900" />
        <div>
          <p className="font-bold mb-3 text-sm">Profile picture :</p>
          <div className="border rounded-md flex  ">
            <img
              src={img ? URL.createObjectURL(img) : profileData?.image}
              alt=" profile pic "
              className="h-[200px] mx-auto"
            />
          </div>
          <Input
            type="file"
            placeholder=""
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
            className="w-full h-[48px]  font-bold mt-4 text-xs bg-richblack-800"
          />
          <div className="w-full my-5 ">
            <Button
              variant="outline"
              onClick={() => {
                fd.append("profilePicture", img);
                dispatch(updateProfilePicture(fd));
              }}
              disabled={img ? (status === "pending" ? true : false) : true}
              className="w-2/12 bg-primary text-white"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save
            </Button>
          </div>
        </div>
        <Separator className="my-4 border bg-richblack-900" />
        <div>
          <p className="font-bold mb-3 text-sm">Change Password :</p>
          <form
            action=""
            className="w-full text-richblue-5 flex flex-col gap-4"
          >
            <Input
              type="text"
              placeholder="Old password"
              className="w-full h-[48px] font-bold text-xs bg-richblack-800"
            />
            <Input
              type="text"
              placeholder=" New password"
              className="w-full h-[48px] font-bold text-xs bg-richblack-800"
            />
            <Input
              type="text"
              placeholder="Confirm password"
              className="w-full h-[48px] font-bold text-xs bg-richblack-800"
            />
            <div className="w-full mb-5 ">
              <Button
                variant="outline"
                className="w-2/12  bg-primary hover:opacity-80 hover:bg-primary hover:text-white text-white "
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save
              </Button>
            </div>
          </form>
        </div>
        <Separator className="mb-5 border " />
      </div>
    </div>
  );
}

export default UserDeatilsForm;
