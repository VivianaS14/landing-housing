import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useData } from "../hooks/useData";

export const Map = () => {
  const { project } = useData();
  const position: [number, number] = project.LatLong;
  const address = project.location + ", " + project.city;

  return (
    <section id="Map" className="mt-20">
      <h2 className="text-4xl font-sans font-semibold text-lime-600 mb-10">
        ¿Donde estamos ubicados?
      </h2>
      <p className="mb-5 text-slate-600">{address}</p>

      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Calle 7 No. 25 - 95, Madrid, Cundinamarca, Colombia</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};
