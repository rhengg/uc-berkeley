import React from 'react'
import Card from '../components/Card'
import CountCard from '../components/CountCard'
import Navigation from '../components/Navigation'

const Home = () => {
    return (
        <div style={{ padding: '0rem 4rem' }}>
            <Navigation />

            <div style={{ marginTop: '2rem' }}>
                <div style={{ overflowX: "auto" }}>
                    <table>
                        <tr>
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
                        <tr>
                            <td>
                                <Card name='Arijit Singh' origin='India' />
                            </td>
                            <td>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <CountCard title='Followers' percentage='8' value='190000' percentageStatus='inc' />
                                    <CountCard title='Monthly Listeners' percentage='8' value='190000' percentageStatus='inc' />
                                </div>
                            </td>
                            <td>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <CountCard title='Subscriber' percentage='8' value='190000' percentageStatus='inc' />
                                    <CountCard title='Views' percentage='8' value='190000' percentageStatus='inc' />
                                </div>
                            </td>
                            <td style={{ textAlign: 'initial' }}>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='dec' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='dec' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='dec' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='inc' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='inc' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='inc' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='dec' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='dec' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='inc' />
                            </td>
                            <td>
                                <CountCard title='Followers' percentage='8' value='190000' percentageStatus='dec' />
                            </td>


                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
