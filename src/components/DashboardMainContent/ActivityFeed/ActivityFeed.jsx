import "./ActivityFeed.css"

function ActivityFeed() {
    const chartNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    const colorData = [
        [0, ["var(--logo-primary)"], 0, 0],
        [["var(--logo-primary)", "var(--primary-button-bg)"], ["var(--primary-button-bg)"], 0, ["var(--logo-primary)"]],
        [0, 0, ["var(--logo-primary)", "var(--primary-button-bg)"], ["var(--primary-button-bg)"]],
        [0, ["var(--logo-primary)"], ["var(--logo-primary)", "var(--primary-button-bg)"], 0],
        [0, ["var(--primary-button-bg)"], 0, 0],
        [["var(--logo-primary)", "var(--primary-button-bg)"], ["var(--logo-primary)"], 0, ["var(--primary-button-bg)"]],
        [0, 0, ["var(--logo-primary)", "var(--primary-button-bg)"], ["var(--primary-button-bg)"]],
        [0, ["var(--logo-primary)"], 0, ["var(--primary-button-bg)"]]
    ]

    return (
        <div className="activityFeed">
            <div className="activityFeedHeader">
                <h3>Activity</h3>
                <p>3 appointment on this week</p>
            </div>

            <div className="activityFeedChart">
                <div className="points">
                    {
                        colorData.map((data, index) => (
                            (index % 2 === 0) ? (
                                <div key={`point-${index}`} className={`point-${index} point`}>
                                    <div
                                        style={Array.isArray(data[0]) ? { backgroundColor: data[0][0] } : undefined}
                                        className={`point-${index}-1 point-11`}
                                        key={`${index}-1`}
                                    ></div>

                                    <div
                                        style={Array.isArray(data[1]) ? { backgroundColor: data[1][0] } : undefined}
                                        className={`point-${index}-2 point-12`}
                                        key={`${index}-2`}
                                    ></div>

                                    <div className={`point-${index}-3 point-13`} key={`${index}-3`}>
                                        <div
                                            style={Array.isArray(data[2]) ? { backgroundColor: data[2][0] } : undefined}
                                            className={`point-${index}-31 point-131`}
                                            key={`${index}-31`}
                                        ></div>
                                        <div
                                            style={Array.isArray(data[2]) ? { backgroundColor: data[2][1] } : undefined}
                                            className={`point-${index}-32 point-132`}
                                            key={`${index}-32`}
                                        ></div>
                                    </div>

                                    <div
                                        style={Array.isArray(data[3]) ? { backgroundColor: data[3][0] } : undefined}
                                        className={`point-${index}-4 point-14`}
                                        key={`${index}-4`}
                                    ></div>
                                </div>
                            ) : (
                                <div key={`point-${index}`} className={`point-${index} point`}>
                                    <div className={`point-${index}-1 point-21`} key={`${index}-1`}>
                                        <div
                                            style={Array.isArray(data[0]) ? { backgroundColor: data[0][0] } : undefined}
                                            className={`point-${index}-11 point-211`}
                                            key={`${index}-11`}
                                        ></div>
                                        <div
                                            style={Array.isArray(data[0]) ? { backgroundColor: data[0][1] } : undefined}
                                            className={`point-${index}-12 point-212`}
                                            key={`${index}-12`}
                                        ></div>
                                    </div>

                                    <div
                                        style={Array.isArray(data[1]) ? { backgroundColor: data[1][0] } : undefined}
                                        className={`point-${index}-2 point-22`}
                                        key={`${index}-2`}
                                    ></div>

                                    <div className={`point-${index}-3 point-23`} key={`${index}-3`}>
                                        <div
                                            style={Array.isArray(data[2]) ? { backgroundColor: data[2][0] } : undefined}
                                            className={`point-${index}-31 point-231`}
                                            key={`${index}-31`}
                                        ></div>
                                        <div
                                            style={Array.isArray(data[2]) ? { backgroundColor: data[2][1] } : undefined}
                                            className={`point-${index}-32 point-232`}
                                            key={`${index}-32`}
                                        ></div>
                                    </div>

                                    <div
                                        style={Array.isArray(data[3]) ? { backgroundColor: data[3][0] } : undefined}
                                        className={`point-${index}-4 point-24`}
                                        key={`${index}-4`}
                                    ></div>
                                </div>
                            )
                        ))
                    }
                </div>
                <div className="pointName">
                    {
                        chartNames.map((name, index) => {
                            return (<p key={index}>{name}</p>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed;