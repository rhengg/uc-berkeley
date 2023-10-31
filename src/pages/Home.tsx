import React from 'react'
import Card from '../components/Card'
import CountCard from '../components/CountCard'
import Navigation from '../components/Navigation'

const Home = () => {
    return (
        <div style={{ padding: '0rem 4rem' }}>
            <Navigation />

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
                            <Card name='Arihit signh' origin='India' />
                        </td>
                        <td>
                            <CountCard />
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>
                        <td>
                            <CountCard />
                        </td>


                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Home
