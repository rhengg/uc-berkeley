import { MdArrowUpward } from 'react-icons/md'

const Index = () => {
    const arr = Array(8).fill(0)
    console.log("arr", arr);


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
                                <p style={{ fontSize: "2rem" }} >Arijit Singh</p>
                            </div>

                            <div className='card-detail-tag-main'>
                                <p className='label'>Country</p>
                                <div className="tag">
                                    <p className="body">Indian</p>
                                </div>
                            </div>

                            <div className="card-detail-tag-main">
                                <p className='label'>Genre</p>
                                <div className='card-detail-tag-container '>
                                    <div className="tag">
                                        <p className="body">Pop</p>
                                    </div>
                                    <div className="tag">
                                        <p className="body">Asian</p>
                                    </div>
                                    <div className="tag">
                                        <p className="body">Others</p>
                                    </div>
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
                            {arr.map((item, index) => {
                                return (
                                    <div className='performance-card'>
                                        <div className='table-header-with-icon'>
                                            <div style={{ width: "24px", height: "24px", background: "grey" }}></div>
                                            <p>Spotify</p>
                                        </div>
                                        <table key={index} className='performance-table-data'>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Followers</th>
                                                    <th></th>
                                                    <th>Monthly Listeners</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#1</td>
                                                    <td>190000</td>
                                                    <td>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <p style={{ color: "green" }}>8% </p>
                                                            <MdArrowUpward style={{ color: "green" }} size={18} />
                                                        </div>
                                                    </td>
                                                    <td>190000</td>
                                                    <td>8%</td>
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