import React from 'react'
import { MdArrowUpward } from 'react-icons/md'
import { getPlatformData } from '../../utils/getPLatformData'

type DetailTableType = {
    platformList?: string[],
    data: any,
    artist?: string
}
/**
 * This component is used in detail page
 * This component accept platformList, data and artist props to render the music platform analytics card
 */

const Index = ({ platformList, data, artist }: DetailTableType) => {
    return (
        <div className='detail-performance-box'>
            {platformList?.map((item: string, index: number) => {
                return (
                    <div key={index} className='performance-card'>
                        <div className='table-header-with-icon'>
                            <div style={{ width: "24px", height: "24px", background: "grey" }}></div>
                            <p>{item}</p>
                        </div>
                        <table key={index} className='performance-table-data'>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Followers</th>
                                    <th></th>
                                    {data[`${item}_monthly_listeners_total`] ?
                                        <th>Monthly Listeners</th>
                                        : <></>
                                    }
                                    {data[`${item}_monthly_listeners_total`] ?
                                        <th></th>
                                        : <></>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        {
                                            item.toLowerCase() === "line" ?
                                                getPlatformData(artist as string, item.toLowerCase())[`${item}_music_followers_total`]
                                                    ?
                                                    getPlatformData(artist as string, item.toLowerCase())[`${item}_music_followers_total`]
                                                    :
                                                    0
                                                :

                                                getPlatformData(artist as string, item.toLowerCase())[`${item}_followers_total`]
                                                    ?
                                                    getPlatformData(artist as string, item.toLowerCase())[`${item}_followers_total`]
                                                    :
                                                    0

                                        }
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <p style={{ color: "green" }}>8% </p>
                                            <MdArrowUpward style={{ color: "green" }} size={18} />
                                        </div>
                                    </td>
                                    <td>{data[`${item}_monthly_listeners_total`]}</td>
                                    {data[`${item}_monthly_listeners_change_prc`]
                                        ?
                                        <td>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <p style={{ color: "green" }}>
                                                    {data[`${item}_monthly_listeners_change_prc`]}%
                                                </p>
                                                <MdArrowUpward style={{ color: "green" }} size={18} />
                                            </div>
                                        </td>
                                        :
                                        <td></td>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default Index