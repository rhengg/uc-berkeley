import React from 'react'
import { Outlet } from 'react-router-dom'

const Index = () => {

    // const data = [
    //     {
    //         name: "Home",
    //         img: MdOutlineHome,
    //         path: "/",
    //         item: [
    //             {
    //                 name: "",
    //                 item: [
    //                     {
    //                         item_name: "Home",
    //                         path: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Plans",
    //         img: MdOutlineAssignment,
    //         path: "/plans",
    //         item: [
    //             {
    //                 name: "Plans",
    //                 item: [
    //                     {
    //                         item_name: "List",
    //                         path: "plans",
    //                     },
    //                     {
    //                         item_name: "Create",
    //                         path: "plans/create",
    //                     },
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Language",
    //         img: MdOutlineLanguage,
    //         path: "/languages",
    //         item: [
    //             {
    //                 name: "Langauge",
    //                 item: [
    //                     {
    //                         item_name: "List",
    //                         path: "languages",
    //                     },
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Tags",
    //         img: MdLabelOutline,
    //         path: "/tags",
    //         item: [
    //             {
    //                 name: "Tags",
    //                 item: [
    //                     {
    //                         item_name: "List",
    //                         path: "tags",
    //                     },
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Themes",
    //         img: MdOutlineColorLens,
    //         path: "/themes",
    //         item: [
    //             {
    //                 name: "Themes",
    //                 item: [
    //                     {
    //                         item_name: "List",
    //                         path: "themes",
    //                     },
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Media",
    //         img: MdOutlinePermMedia,
    //         path: "/media",
    //         item: [
    //             {
    //                 name: "Media",
    //                 item: [
    //                     {
    //                         item_name: "List",
    //                         path: "media",
    //                     },
    //                 ]
    //             }
    //         ]
    //     }
    // ]


    return (
        <>
            {/* <Grid w={"100%"} height={'100vh'} gridTemplateColumns={'6.35rem 1fr'}>
                <Box backgroundColor="#FFFFFF" borderRight="1px solid" borderColor={theme.colors.divider}>
                    <Navbar data={data} isCMS={false} />
                </Box>
                <Grid backgroundColor="#FFFFFF" gridTemplateRows={'5.4rem 1fr'}>
                    <Box height="5.4rem" borderBottom="1px solid" borderColor={theme.colors.divider}>
                        <Topbar />
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                paddingLeft: "12.5rem",
                                overflowY: "scroll",
                                maxHeight: "calc(100vh - 5.4rem)",

                                //@ts-ignore
                                "&::-webkit-scrollbar": {
                                    width: "6px"
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    borderRadius: "2px",
                                    background: theme.colors.secondary.light
                                }
                            }}
                        >
                            <Box sx={{ paddingBottom: theme.space["4xl"] }}>
                                <Outlet />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid > */}
            <div style={{ background: "grey" }}>
                <Outlet />
            </div>
        </>
    )
}

export default Index