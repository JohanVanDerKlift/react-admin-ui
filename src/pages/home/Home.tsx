import "./Home.scss"
import TopBox from "../../components/topBox/TopBox.tsx";
import ChartBox from "../../components/chartBox/ChartBox.tsx";
import {chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser} from "../../data.ts";

function Home() {
    return (
        <div className="home">
            <div className="box box1">
              <TopBox />
            </div>
            <div className="box box2"><ChartBox {...chartBoxUser}/></div>
            <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4">Box3</div>
            <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box7">Box7</div>
            <div className="box box8">Box8</div>
            <div className="box box9">Box9</div>
        </div>
    );
}

export default Home;