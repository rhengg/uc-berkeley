import React from 'react'
import Card from '../components/Card'
import CountCard from '../components/CountCard'
import data from '../database/Soundcharts.json'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [searchTitle, setSearchTitle] = React.useState("");

    const handleCardClick = (id: string) => {
        navigate({ pathname: "/detail", search: `?artist=${id}` })
    }

    return (
        <div style={{ padding: '0rem 4rem' }}>

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
                <div style={{
                    overflowX: "auto",
                    height: 'calc(100vh - 180px)'
                }}>
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
                                                <Card
                                                    name={item.artist}
                                                    origin={item.artist_country}
                                                    id={item.artist}
                                                    handleCardClick={handleCardClick}
                                                    genre={item.artist_genres}
                                                />
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}>
                                                    <CountCard
                                                        title='Followers'
                                                        percentage={item.spotify_followers_change_prc}
                                                        value={item.spotify_followers_total}
                                                    />
                                                    <CountCard
                                                        title='Monthly listeners'
                                                        percentage={item.spotify_monthly_listeners_Change_prc}
                                                        value={item.spotify_monthly_listeners_total}
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
