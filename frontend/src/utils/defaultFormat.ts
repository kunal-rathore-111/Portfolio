import type { PostType } from "../hooks/queryHooks/useFetch";

export const defaultImgURL = 'https://4kwallpapers.com/images/walls/thumbs_3t/9621.jpg'


export type propsTypes = {
    categoryTITLE: string,
    data: PostType[]
};

export const defaultCategoryFormat = (props: propsTypes) => {
    return {
        title: props.categoryTITLE ?? "TITLE HERE",
        subtitle: "Category",
        cards: {
            left: {
                image: props.data?.[1]?.imageUrl ?? defaultImgURL,
                title: props.data?.[1]?.title ?? "TITLE HERE",
                id: props.data?.[1]?.id ?? 'NO ID'
            },
            center: {
                image: props.data?.[0]?.imageUrl ?? defaultImgURL,
                title: props.data?.[0]?.title ?? "TITLE HERE",
                id: props.data?.[0]?.id ?? 'NO ID'
            },
            right: {
                image: props.data?.[2]?.imageUrl ?? defaultImgURL,
                title: props.data?.[2]?.title ?? "TITLE HERE",
                tag: `+ ${props.data?.[2]?.tags ?? 'tags'}`,
                id: props.data?.[2]?.id ?? 'NO ID'
            }
        }
    }
};