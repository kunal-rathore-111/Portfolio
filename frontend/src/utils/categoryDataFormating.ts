import { defaultCategoryFormat, type propsTypes } from "./defaultFormat";



export function formatData(props: propsTypes) {


    const categoryData = props.data.filter(x => x.category === props.categoryTITLE);

    return defaultCategoryFormat({
        categoryTITLE: props.categoryTITLE,
        data: categoryData
    });
}