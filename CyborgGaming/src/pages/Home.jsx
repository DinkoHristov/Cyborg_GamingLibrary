import '../css/App.css'
import Banner from '../components/Home/Banner';
import MostPopular from '../components/Home/MostPopular'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-content">
                        <Banner />
                        <MostPopular />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;