import React, {useEffect, useRef} from "react"
import "./Assets/styles/map.css";
import * as ol from "ol";
import {Feature} from "ol";
import {fromLonLat} from "ol/proj";
import {OSM} from "ol/source";
import TileLayer from "ol/layer/Tile";
import CircleStyle from "ol/style/Circle";
import {Fill, Stroke, Style} from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Point} from "ol/geom";
import NavBar from "./NavBar";

const Map = () => {
    const mapRef = useRef();

    useEffect(() => {
        const view = new ol.View({
            center:  fromLonLat([79.86459367425945, 6.9293713674970965]),
            zoom: 5,
        });
        let mapObject = new ol.Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'ol-map',
            view: view,
        });

        const geolocation = new ol.Geolocation({
            trackingOptions: {
                enableHighAccuracy: true,
            },
            projection: view.getProjection(),
        });

        document.getElementById('track').addEventListener('click', function () {
            geolocation.setTracking(true);
        });

        geolocation.on('error', function (error) {
            alert(error.message);
        });

        const accuracyFeature = new Feature();

        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        const positionFeature = new Feature();
        positionFeature.setStyle(
            new Style({
                image: new CircleStyle({
                    radius: 6,
                    fill: new Fill({
                        color: '#3399CC',
                    }),
                    stroke: new Stroke({
                        color: '#fff',
                        width: 2,
                    }),
                }),
            })
        );

        geolocation.on('change:position', function () {
            const coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
            mapObject.getView().animate(
                {
                    center: coordinates,
                    duration: 2000,
                    zoom: 15
                }
            );
        });

        new VectorLayer({
            map: mapObject,
            source: new VectorSource({
                features: [accuracyFeature, positionFeature],
            }),
        });

        mapObject.setTarget(mapRef.current);

        return () => mapObject.setTarget(undefined);
    }, []);

    return (
        <>
            <NavBar islogin={false}/>
            <div className="map">
                <div ref={mapRef} className="ol-map">
                </div>
                <button id="track" className="locator">Locate Me!</button>
            </div>
        </>
    );
}

export default Map;