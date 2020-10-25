import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DG from '2gis-maps'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apiloc from './Api/location.js';
import Share from "./btns";
import Gis from "./Api/category";
import {ZoomPanel, MyLocation} from "./btns";
import {ViewPanel} from "./view";

function empty(){}

function Home() {
    // const [popout, setPopout] = useState(<Container size='large' />);
    const [location, setLocation] = useState(null);
    const [locationReset, setLocationReset] = useState([empty]);
    const [dg_map, setMap] = useState(null);
    const [clearPoints, setClearPoints] = useState([empty, empty]);

    function handlerLocation(){
        function r(a, b){
            if (!((a === null) || (b === null))){
                Apiloc.viewPoint(dg_map, a, b, 18);
                setLocation([a, b]);
                let set_reset = Apiloc.setResetMyLocation(
                    dg_map, a, b
                );
                locationReset[0]();
                setLocationReset([set_reset[1]]);
                set_reset[0]();
            }
        }
        Apiloc.geoFindMe(r);
    }
    async function startQuery(query){
        let data = await handlerLocation2(query);
        return data
    }
    async function handlerLocation2(q="Аптека"){
        let search = await Gis.get_by_category(q, location);
        if ((search.result !== undefined) && (search.result.items !== undefined)){
            try{
                let new_state = Apiloc.addMarkers(dg_map, search.result.items, q);
                clearPoints[1]();
                setClearPoints(new_state);
                new_state[0]();
                return search.result.items
            } catch (e) {
                console.log(e);
            }
            return []
        }
    }

    useEffect(() => {
        async function get_location(){
            const a = await Apiloc.ApiSetLocation();
            // setPopout(null);
            setLocation([a['lat'], a['lng']]);
            try {
                let map = DG.map('map', {
                    'center': [a['lat'], a['lng']],
                    'zoom': 13
                });
                setMap(map);
            } catch (e){
                console.log(e);
            }


        }
        get_location();
    }, [])

    return (
        <div className="main-map">
            <div id="map"/>
            <ZoomPanel maps={dg_map}/>
            <MyLocation handler={handlerLocation}/>
            <ViewPanel clearAllPoint={[clearPoints[1]]} hook={startQuery}/>
        </div>
    );
}

export default Home;
