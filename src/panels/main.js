import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DG from '2gis-maps'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apiloc from './Api/location.js';
import Share from "./btns";


function Home() {
    const [popout, setPopout] = useState(<Container size='large' />);
    const [location, setLocation] = useState(null);
    const [dg_map, setMap] = useState(null);

    function handlerLocation(){
        function r(a, b){
            Apiloc.viewPoint(dg_map, a, b, 18);
        }
        Apiloc.geoFindMe(r);
    }

    useEffect(() => {
        console.log("JJJ");
        async function get_location(){
            const a = await Apiloc.ApiSetLocation();
            setPopout(null);
            setLocation(a);
            console.log("l:", a);
            let map = DG.map('map', {
                'center': [a['lat'], a['lng']],
                'zoom': 13
            });
            setMap(map);

        }
        get_location();
    }, [])

    return (
        <div className="main-map">
            <div id="map"/>
            <div onClick={handlerLocation} className="my-location"/>
        </div>
    );
}

export default Home;
