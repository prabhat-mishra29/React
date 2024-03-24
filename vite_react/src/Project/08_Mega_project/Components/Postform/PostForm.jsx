//How to add a post-form(add-post).

import React, { useCallback,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import data_service from "../../Appwrite/database_storage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {

    // 'post' props is used whenever we want to edit our post.
    // otherwise we will not provide anything as our props in 'add-post' component.

    //watch:- kissi v field ko agar continously monitor karna hai toh.
    //setValue:-- kissi v field ka agar value set karna hai toh.
    //control:-- kissi v form ka control lena hai toh.
    //getValue:-- kissi v field value lena hai toh.
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    //submit hua hee agar,data pass toh hua hii hoga.
    const submit = async (data) => {

        //Agar post hai toh
        if (post) {
        //              agar image hai         toh upload karo                  nahi hai toh null hoga
            const file = data.image[0] ? await data_service.uploadFile(data.image[0]) : null;

            //upload hona ke badd delete karo.
            if (file) {
                data_service.deleteFile(post.featuredImage);
            }

            //update post:-
            const dbPost = await data_service.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } 

        //Agar post nahi hai toh
        else {
            const file = await data_service.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await data_service.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    //title ko watch karke slug generate karo.
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                        .trim()
                        .toLowerCase()
                        .replace(/[^a-zA-Z\d\s]+/g, "-")
                        .replace(/\s/g, "-");

        return "";
    }, []);

    //How to use slug-transform interview question:-
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe(); //For memory-management purpose we can use it.
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />

            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={data.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button text={post ? "Update" : "Submit"} type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                </Button>
                
            </div>
        </form>
    );
}