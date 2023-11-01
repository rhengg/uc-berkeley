import { MdArrowUpward } from 'react-icons/md'
import data from '../../database/Soundcharts.json'
import React from 'react';

const Index = () => {
    const arr = Array(8).fill(0)
    const params = new URLSearchParams(window.location.search);
    const artist = params.get("artist")
    const [filteredData, setFilteredData] = React.useState<any>()
    const [genreList, setGenreList] = React.useState<any>()
    const [platformList, setPlatformList] = React.useState<any>()

    React.useEffect(() => {
        const newData = data?.filter((val) => val.artist === artist)
        const list = newData[0].artist_genres.split(",")
        setFilteredData(newData[0])
        setGenreList(list)
        console.log("newData", newData[0])
    }, [artist])


    React.useEffect(() => {
        if (filteredData) {
            let arr: string[] = []
            const length = Object.keys(filteredData).length
            for (let index = 0; index < length; index++) {
                const firstElement = Object.keys(filteredData)[index].split("_")[0];
                arr.push(firstElement)
            }
            const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
            const firstfilter = newArr.filter((item, index) => item !== "artist")
            const finalfilter = firstfilter.filter((item, index) => item !== "Err")
            setPlatformList(finalfilter)
        }
    }, [filteredData])

    return (
        <div className='detail-main'>
            <div className='detail-container'>
                <div className='detail-sub-container-1'>
                    <div className='detail-card'>
                        <img
                            style={{ width: '100%', aspectRatio: 16 / 13, borderRadius: '0.25rem' }}
                            src="/photo.png"
                            alt="Grapefruit slice atop a pile of other slices"
                        />

                        <div className="card-detail-container">
                            <div className='card-detail-header'>
                                <p style={{ fontSize: "2rem" }} >{filteredData?.artist}</p>
                            </div>

                            <div className='card-detail-tag-main'>
                                <p className='label'>Country</p>
                                <div className="tag">
                                    <p className="body">{filteredData?.artist_country}</p>
                                </div>
                            </div>

                            <div className="card-detail-tag-main">
                                <p className='label'>Genre</p>
                                <div className='card-detail-tag-container '>
                                    {genreList?.map((genre: string, index: number) => {
                                        return (
                                            <div key={index} className="tag">
                                                <p className="body">{genre}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='detail-sub-container-2'>
                    <div className='detail-about-container'>
                        <div className='header-border-box'>
                            <p className='label'>About</p>
                        </div>
                        <div className='detail-content-box'>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fugiat,
                                numquam eaque quae, magni odit libero velit
                                repudiandae impedit adipisci accusamus nulla. Sint, corporis ea.
                                Repellat eveniet dolorem molestiae repudiandae.
                            </p>
                        </div>
                    </div>

                    <div className='detail-performance-container'>
                        <div className='header-border-box'>
                            <p className='label'>Performance</p>
                        </div>
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
                                                    {filteredData[`${item}_monthly_listeners_total`] ?
                                                        <th>Monthly Listeners</th>
                                                        : <></>
                                                    }
                                                    {filteredData[`${item}_monthly_listeners_total`] ?
                                                        <th></th>
                                                        : <></>
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#1</td>
                                                    <td>{filteredData[`${item}_followers_total`]}</td>
                                                    <td>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <p style={{ color: "green" }}>8% </p>
                                                            <MdArrowUpward style={{ color: "green" }} size={18} />
                                                        </div>
                                                    </td>
                                                    <td>{filteredData[`${item}_monthly_listeners_total`]}</td>
                                                    {filteredData[`${item}_monthly_listeners_change_prc`]
                                                        ?
                                                        <td>
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <p style={{ color: "green" }}>
                                                                    {filteredData[`${item}_monthly_listeners_change_prc`]}%
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index
