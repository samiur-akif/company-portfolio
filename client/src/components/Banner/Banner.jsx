import React, {useState, useEffect} from 'react'

const imgAPI = 'http://localhost:1337';

const Banner = ({url}) => {
    const [bannerData, setBannerData] = useState({})
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setBannerData(data["Banner"]));
      });
    return (
        <div className="section-xl bg-image parallax" data-bg-src="./background.jpg">
			<div className="bg-black-06">
				<div className="container text-center">
					<h1 className="font-weight-light">{bannerData?.title}</h1>
				</div>
			</div>
		</div>
    )
}

export default Banner
