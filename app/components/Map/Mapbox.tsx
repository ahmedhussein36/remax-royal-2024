// components/Map.tsx

import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View, Overlay } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

interface MapProps {
    lat: number;
    lng: number;
    placeName: string;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng, placeName }) => {
    const mapElement = useRef<HTMLDivElement | null>(null);
    const popupElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapElement.current) {
            const coordinates = fromLonLat([lng, lat]);

            const marker = new Feature({
                geometry: new Point(coordinates),
            });

            marker.setStyle(
                new Style({
                    image: new Icon({
                        src: "/assets/icons/marker-icon.png", // Ensure you have this image in your public folder
                        anchor: [0.5, 1],
                        scale: 0.7,
                    }),
                })
            );

            const vectorSource = new VectorSource({
                features: [marker],
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
            });

            const map = new Map({
                target: mapElement.current,
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: `https://api.maptiler.com/maps/bright-v2/256/{z}/{x}/{y}.png?key=BY1WrpWdat0xcSDs7QKG`,
                            maxZoom: 75, // Increase max zoom level for better quality
                        }),
                    }),
                    vectorLayer,
                ],
                view: new View({
                    center: coordinates,
                    zoom: 13, // Set a higher zoom level initially
                }),
            });

            const popup = new Overlay({
                element: popupElement.current!,
                positioning: "top-center",
                stopEvent: false,
                offset: [0, -50],
            });
            map.addOverlay(popup);
            popup.setPosition(coordinates);

            return () => {
                map.dispose();
                map.setTarget(undefined);
            };
        }
    }, [lat, lng]);

    return (
        <>
            <div ref={mapElement} style={{ width: "100%", height: "100%" }} />
            <div
                ref={popupElement}
                className="ol-popup text-center right-[75vw] md:right-[90vw] lg:right-[56vw] xl:right-[59vw]
                "
            >
                <div className="ol-popup-content ">{placeName}</div>
            </div>
        </>
    );
};

export default MapComponent;
