import React from 'react'
import Card from '../components/Card'
import CountCard from '../components/CountCard'
import Dropdown from '../components/Dropdown'
import soundChartsData from '../database/Soundcharts.json'
import { useNavigate } from 'react-router-dom'
import FuzzySearch from 'fuzzy-search'
import { MdClose } from 'react-icons/md'
import { getPlatformData } from '../utils/getPLatformData'

const Home = () => {
    const navigate = useNavigate()
    const [searchTitle, setSearchTitle] = React.useState("");
    const [selectedGender, setSelectedGender] = React.useState<string>()
    const [selectedCountry, setSelectedCountry] = React.useState<any>()
    const [countryList, setCountryList] = React.useState<string[]>([])
    const [platformList, setPlatformList] = React.useState<string[]>()
    const [data, setData] = React.useState<any>(soundChartsData)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const e = Math.round(Math.random() * 100 / 16)
        if (e > 1) {
            setData(soundChartsData)
        }
        else {
            setError(true)
        }
    }, [])

    const searcher = new FuzzySearch(data, ['artist', 'artist_country', 'artist_genres'], {
        caseSensitive: false,
    });

    React.useEffect(() => {
        if (searchTitle === '') {
            setData(getFileteredData(selectedCountry as string, selectedGender as string))
        } else {
            setData(searcher.search(searchTitle))
        }
    }, [searchTitle])

    const handleCardClick = (id: string) => {
        navigate({ pathname: "/detail", search: `?artist=${id}` })
    }

    const getFileteredData = (country: string, gender: string) => {
        let final = soundChartsData
        if (country) {
            final = final.filter((item: any) => item.artist_country === country)
        }
        if (gender) {
            final = final.filter((item: any) => item.gender === gender)
        }
        return final
    }

    React.useEffect(() => {
        setData(getFileteredData(selectedCountry as string, selectedGender as string))
    }, [selectedCountry, selectedGender])

    const getPlatformList = (obj: any) => {
        let arr: string[] = []
        const length = Object.keys(obj).length
        for (let index = 0; index < length; index++) {
            const firstElement = Object.keys(obj)[index].split("_")[0];
            arr.push(firstElement)
        }
        const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
        const finalfilter = newArr.filter((item) => item !== "artist").filter
            ((item) => item !== "Err").filter((item) => item !== "gender")
        return finalfilter
    }
    React.useEffect(() => {
        const arrCountry = soundChartsData.map((item: any) => {
            return item.artist_country
        })
        setCountryList(arrCountry.filter((item: any, index: number) => arrCountry.indexOf(item) === index));
        setPlatformList(getPlatformList(soundChartsData[0]))
    }, [soundChartsData])

    if (error) return (<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        height: 'calc(100vh - 220px)',
        padding: '1rem',
        background: '#f9f9f9',
    }}>
        <div style={{ padding: '1rem', background: '#ffffff' }}>
            <p className='subtitle-two' >Error fetching data</p>
        </div>
    </div>
    )


    return (
        <div className='home-layout'>

            <div className='home-header' >
                <input
                    className='input-main'
                    type={'text'}
                    name={'search'}
                    placeholder={'Search'}
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />

                <div className='home-header-filter' >
                    <p className='body' style={{ margin: '1rem 0' }} >Filter </p>

                    <div
                        className='hide-scroll'
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: '1rem',
                            position: "relative"
                        }}>
                        <Dropdown
                            id={"dropdown2"}
                            value={selectedGender}
                            options={["male", "female",]}
                            selectedValue={setSelectedGender}
                            placeholder='By Gender'
                        />
                        <Dropdown
                            id={"dropdown3"}
                            value={selectedCountry}
                            options={countryList}
                            selectedValue={setSelectedCountry}
                            placeholder='By Country'
                        />
                    </div>
                </div>


            </div>
            <div style={{
                padding: '1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                {selectedGender !== "" && selectedGender !== undefined ?
                    <div style={{
                        width: 'max-content',
                        padding: '0.5rem',
                        background: '#F9F9F9',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center'
                    }}>
                        <p className='body' >{selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)}</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <MdClose
                                style={{ cursor: 'pointer' }}
                                onClick={() => { setSelectedGender('') }}
                            />
                        </div>
                    </div>
                    :
                    <></>
                }

                {selectedCountry !== "" && selectedCountry !== undefined ?
                    <div style={{
                        width: 'max-content',
                        padding: '0.5rem',
                        background: '#F9F9F9',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center'
                    }}>
                        <p className='body' >{selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <MdClose
                                style={{ cursor: 'pointer' }}
                                onClick={() => { setSelectedCountry('') }}
                            />
                        </div>
                    </div>
                    :
                    <></>
                }

            </div>

            {
                data?.length === 0 ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        height: 'calc(100vh - 220px)',
                        padding: '1rem',
                        background: '#f9f9f9',
                    }}>
                        <div style={{ padding: '1rem', background: '#ffffff' }}>
                            <p className='subtitle-two' >No Artist Found</p>
                        </div>
                    </div>
                ) :
                    <div >
                        <div className='home-table-container' >
                            <table className='home-table'>
                                <thead>
                                    <tr>
                                        <th>Artist</th>
                                        {platformList?.map((item) => {
                                            return (
                                                <th>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                {
                                    data.map((item: any, index: number) => {
                                        return (
                                            <tbody key={index}>
                                                <tr>
                                                    <td>
                                                        <Card
                                                            name={item.artist}
                                                            origin={item.artist_country}
                                                            id={item.artist}
                                                            handleCardClick={handleCardClick}
                                                            genre={item.artist_genres}
                                                        />
                                                    </td>
                                                    {platformList && platformList.map((obj, index) => {
                                                        return (
                                                            <td key={index}>
                                                                <div style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: '1rem'
                                                                }}>

                                                                    {
                                                                        obj === "Line"
                                                                            ?
                                                                            <>
                                                                                <CountCard
                                                                                    title='Followers'
                                                                                    percentage={getPlatformData(item.artist as string, obj as string)[`${obj}_music_followers_change_prc`]}
                                                                                    value={getPlatformData(item.artist as string, obj as string)[`${obj}_music_followers_total`]}
                                                                                />{
                                                                                    getPlatformData(item.artist as string, obj.toLowerCase() as string)[`${obj}_music_monthly_listeners_total`] ?
                                                                                        <CountCard
                                                                                            title='Monthly listeners'
                                                                                            percentage={getPlatformData(item.artist as string, obj.toLowerCase() as string)[`${obj}_music_monthly_listeners_change_prc`]}
                                                                                            value={getPlatformData(item.artist as string, obj.toLowerCase() as string)[`${obj}_music_monthly_listeners_total`]}
                                                                                        />
                                                                                        :
                                                                                        <></>
                                                                                }
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <CountCard
                                                                                    title='Followers'
                                                                                    percentage={getPlatformData(item.artist as string, obj as string)[`${obj}_followers_change_prc`]}
                                                                                    value={getPlatformData(item.artist as string, obj as string)[`${obj}_followers_total`]}
                                                                                />
                                                                                {getPlatformData(item.artist as string, obj.toLowerCase() as string)[`${obj}_monthly_listeners_total`]
                                                                                    ?
                                                                                    <CountCard
                                                                                        title='Monthly listeners'
                                                                                        percentage={getPlatformData(item.artist as string, obj.toLowerCase() as string)[`${obj}_monthly_listeners_change_prc`]}
                                                                                        value={getPlatformData(item.artist as string, obj.toLowerCase() as string)[`${obj}_monthly_listeners_total`]}
                                                                                    />
                                                                                    :
                                                                                    <></>
                                                                                }
                                                                            </>
                                                                    }
                                                                </div>
                                                            </td>

                                                        )
                                                    })}

                                                    {/* <td>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '1rem'
                                                        }}>
                                                            <CountCard
                                                                title='Subscribers'
                                                                percentage={item.YouTube_subscribers_change_prc}
                                                                value={item.YouTube_subscribers_change}
                                                            />
                                                            <CountCard
                                                                title='Views'
                                                                percentage={item.YouTube_views_change_prc}
                                                                value={item.YouTube_views_total}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '1rem'
                                                        }}>
                                                            <CountCard
                                                                title='Followers'
                                                                percentage={item.Instagram_followers_change_prc}
                                                                value={item.Instagram_followers_total}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td style={{ textAlign: 'initial' }}>
                                                        <CountCard
                                                            title='Followers'
                                                            percentage={item.TikTok_followers_change_prc}
                                                            value={item.TikTok_followers_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Followers'
                                                            percentage={item.Deezer_fans_change_prc}
                                                            value={item.Deezer_fans_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Followers'
                                                            percentage={item.Facebook_fans_change_prc}
                                                            value={item.Facebook_fans_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Followers'
                                                            percentage={item.Soundcloud_followers_change_prc}
                                                            value={item.Soundcloud_followers_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Followers'
                                                            percentage={item.Line_music_followers_change_prc}
                                                            value={item.Line_music_followers_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '1rem'
                                                        }}>
                                                            <CountCard
                                                                title='Listeners'
                                                                percentage={item.Anghami_plays_change_prc}
                                                                value={item.Anghami_plays_total}
                                                            />
                                                            <CountCard
                                                                title='Followers'
                                                                percentage={item.Anghami_followers_change_prc}
                                                                value={item.Anghami_followers_total}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Favourites'
                                                            percentage={item.Gaana_favorites_change_prc}
                                                            value={item.Gaana_favorites_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '1rem'
                                                        }}>

                                                            <CountCard
                                                                title='Listeners'
                                                                percentage={item.Jiosaavn_listeners_change_prc}
                                                                value={item.Jiosaavn_listeners_total}
                                                            />
                                                            <CountCard
                                                                title='Followers'
                                                                percentage={item.Jiosaavn_followers_change_prc}
                                                                value={item.Jiosaavn_followers_total}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Followers'
                                                            percentage={item.Triller_followers_change_prc}
                                                            value={item.Triller_followers_total}
                                                        />
                                                    </td>
                                                    <td>
                                                        <CountCard
                                                            title='Favourites'
                                                            percentage='8'
                                                            value={item.Boomplay_favorites_total}
                                                        />
                                                    </td> */}


                                                </tr>
                                            </tbody>

                                        )
                                    }
                                    )

                                }
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Home
