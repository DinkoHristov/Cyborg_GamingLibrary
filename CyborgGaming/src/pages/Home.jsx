import '../css/App.css'
import Banner from '../components/Banner';
import MostPopular from '../components/MostPopular';

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