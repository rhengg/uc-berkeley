import React from 'react'
import Card from '../components/Card'
import CountCard from '../components/CountCard'
import Navigation from '../components/Navigation'
import data from '../database/Soundcharts.json'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    console.log('data', data)
    const navigate = useNavigate()
    const [searchTitle, setSearchTitle] = React.useState("");

    const handleCardClick = (id: string) => {
        navigate({ pathname: "/detail", search: id })
    }

    return (
        <div style={{ padding: '0rem 4rem' }}>
            {/* <Navigation /> */}

            <div style={{ padding: '1.5rem 0' }} >

                <input
                    className='input-main'
                    type={'text'}
                    name={'search'}
                    placeholder={'Search'}
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />

            </div>

            <div >
                <div style={{ overflowX: "auto" }}>
                    <table className='home-table'>
                        <tr>
                            <th>Artist</th>
                            <th>Spotify</th>
                            <th>Youtube</th>
                            <th>Instagram</th>
                            <th>Tiktok</th>
                            <th>Deezer</th>
                            <th>Facebook</th>
                            <th>Soundcloud</th>
                            <th>Line</th>
                            <th>Aghami</th>
                            <th>Gaana</th>
                            <th>Jiosaavn</th>
                            <th>Triller</th>
                            <th>Boomplay</th>
                        </tr>

                        {
                            data
                                .filter((value) => {
                                    if (searchTitle === "") {
                                        return value;
                                    } else if (
                                        value.artist.toLowerCase().includes(searchTitle.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                })
                                .map((item: any, index: number) => {
                                    return (
                                        <tr>
                                            <td>
                                                <Card name={item.artist} origin={item.artist_country} id={"2"} handleCardClick={handleCardClick} />
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}>
                                                    <CountCard title='Followers' percentage='8' value={item.spotify_followers_total} percentageStatus='inc' />
                                                    <CountCard title='Monthly listeners' percentage='8' value={item.spotify_monthly_listeners_total} percentageStatus='inc' />
                                                </div>
                                            </td>

                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}>
                                                    <CountCard title='Subscribers' percentage='8' value={item.YouTube_subscribers_Change} percentageStatus='inc' />
                                                    <CountCard title='Views' percentage='8' value={item.YouTube_views_Total} percentageStatus='inc' />
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}>
                                                    <CountCard title='Followers' percentage='8' value={item.Instagram_followers_Total} percentageStatus='inc' />
                                                </div>
                                            </td>
                                            <td style={{ textAlign: 'initial' }}>
                                                <CountCard title='Followers' percentage='8' value={item.TikTok_followers_Total} percentageStatus='dec' />
                                            </td>
                                            <td>
                                                <CountCard title='Followers' percentage='8' value={item.Deezer_fans_Total} percentageStatus='dec' />
                                            </td>
                                            <td>
                                                <CountCard title='Followers' percentage='8' value={item.Facebook_fans_Total} percentageStatus='dec' />
                                            </td>
                                            <td>
                                                <CountCard title='Followers' percentage='8' value={item.Soundcloud_followers_Total} percentageStatus='inc' />
                                            </td>
                                            <td>
                                                <CountCard title='Followers' percentage='8' value={item.Line_music_followers_Total} percentageStatus='inc' />
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}>
                                                    <CountCard title='Listeners' percentage='8' value={item.Anghami_plays_Total} percentageStatus='inc' />
                                                    <CountCard title='Followers' percentage='8' value={item.Anghami_followers_Total} percentageStatus='inc' />
                                                </div>
                                            </td>
                                            <td>
                                                <CountCard title='Favourites' percentage='8' value={item.Gaana_favorites_Total} percentageStatus='dec' />
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}>

                                                    <CountCard title='Listeners' percentage='8' value={item.Jiosaavn_listeners_Total} percentageStatus='dec' />
                                                    <CountCard title='Followers' percentage='8' value={item.Jiosaavn_followers_Total} percentageStatus='dec' />
                                                </div>
                                            </td>
                                            <td>
                                                <CountCard title='Followers' percentage='8' value={item.Triller_followers_Total} percentageStatus='inc' />
                                            </td>
                                            <td>
                                                <CountCard title='Favourites' percentage='8' value={item.Boomplay_favorites_Total} percentageStatus='dec' />
                                            </td>


                                        </tr>

                                    )
                                }
                                )

                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
