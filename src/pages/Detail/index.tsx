import React from 'react'
import Cookies from 'js-cookie'

type TagListType = {
    createdAt: string
    id: string
    name: string
    updatedAt: string
}

const Tag = () => {
    const [tagList, setTagList] = React.useState<TagListType[]>()
    const [deleteItem, setDeleteItem] = React.useState<TagListType>()
    const [tag, setTag] = React.useState<string>()
    const [addTagIsLoading, setAddTagIsLoading] = React.useState(false)
    const [deleteTagIsLoading, setDeleteTagIsLoading] = React.useState(false)
    const [refetchValue, setRefetchValue] = React.useState("initial")

    // const getData = async () => {
    //     try {
    //         const resOtp = await axios.get("/system-tags", {
    //             headers: {
    //                 "x-skara-auth": `${Cookies.get("x-skara-admin-auth")}`
    //             }
    //         })
    //         setTagList(resOtp.data);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // }
    // React.useEffect(() => {
    //     getData()
    // }, [refetchValue])

    return (
        <div>Detail</div>
    )
}

export default Tag