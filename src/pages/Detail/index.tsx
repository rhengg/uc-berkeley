import data from '../../database/Soundcharts.json'
import React from 'react';
import DetailTable from '../../components/Detailtable'


/** 
    * Returns the detail page.
    * URLSearchParams named artist is used to filter the data.
    * DetailTable component is used which renders the music platform analytics card.
    * The entire page renders a profile card, an about card and analytics table.
*/
const Index = () => {
    const params = new URLSearchParams(window.location.search);
    const artist = params.get("artist")
    const [filteredData, setFilteredData] = React.useState<any>()
    const [genreList, setGenreList] = React.useState<any>()
    const [platformList, setPlatformList] = React.useState<string[]>()

    /** 
     * Filters the entire data with the params value(i.e artists) obtained from the url.
     * Generates a genre list from the data and stores in a useState hook.
    */
    React.useEffect(() => {
        const newData = data?.filter((val) => val.artist === artist)
        const list = newData[0].artist_genres.split(",")
        setFilteredData(newData[0])
        setGenreList(list)
    }, [artist])

    // generates a list of platforms from the above filtered data and stores in a useState hook.
    React.useEffect(() => {
        if (filteredData) {
            let arr: string[] = []
            const length = Object.keys(filteredData).length
            for (let index = 0; index < length; index++) {
                const firstElement = Object.keys(filteredData)[index].split("_")[0];
                arr.push(firstElement)
            }
            const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
            const finalfilter = newArr.filter((item) => item !== "artist").filter
                ((item) => item !== "Err").filter((item) => item !== "gender")
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
                            alt="no image"
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
                        {platformList &&
                            <DetailTable platformList={platformList} data={filteredData && filteredData} artist={artist as string} />
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index
