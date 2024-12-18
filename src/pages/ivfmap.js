import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import Papa from "papaparse";
import "mapbox-gl/dist/mapbox-gl.css";
import LeadForm from "../components/popupSpecial";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapboxWithSearch = () => {
  const [markers, setMarkers] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false); // State to show LeadForm

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          // "https://clinicmaps.s3.eu-west-3.amazonaws.com/data.csv"
          "./countries_cities_names_with_details_3.csv"
        );
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const validMarkers = result.data.filter(
              (row) => row.Latitude && row.Longitude
            );
            setMarkers(validMarkers);
            setFilteredMarkers(validMarkers); // Initialize filtered markers with all markers.
          },
        });
      } catch (error) {
        console.error("Error fetching the CSV file:", error);
      }
    };

    fetchCSV();

    // Trigger LeadForm popup after 15 seconds
    const timer = setTimeout(() => {
      setShowLeadForm(true);
    }, 1000); // Optimal delay time (15 seconds)

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Filter markers based on the search query
  useEffect(() => {
    const results = markers.filter(
      (marker) =>
        marker.City?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        marker.ClinicName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        marker.Website?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        marker.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        marker.country?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMarkers(results);
  }, [searchQuery, markers]);
  console.log(filteredMarkers);

  return (
    <div style={{ position: "relative" }}>
      {/* Search Bar */}

      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}>
        <button onClick={() => setSearchQuery("")}>Clear</button>
        <input
          type="text"
          placeholder="Search by City, Clinic, or Country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "8px",
            width: "300px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Map Component */}
      <Map
        initialViewState={{
          latitude: 48.0028, // Default to Italy's center.
          longitude: 7.4964,
          zoom: 4,
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        collectResourceTiming={false} // Disable telemetry
      >
        {/* Display Filtered Markers */}
        {filteredMarkers.map((marker, index) => (
          <Marker
            key={index}
            latitude={parseFloat(marker.Latitude)}
            longitude={parseFloat(marker.Longitude)}
            anchor="bottom"
          >
            <img
              src="/pregnant.png"
              alt="Custom Marker"
              style={{
                width: "30px", // Adjust size of the marker
                height: "30px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredMarker(marker)}
              onMouseLeave={() => setHoveredMarker(null)}
              onClick={() => setSelectedMarker(marker)}
            />
            {/* Hover Tooltip */}
            {hoveredMarker === marker && (
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "white",
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                {marker.ClinicName || "Unknown Marker"}
              </div>
            )}
          </Marker>
        ))}

        {/* Popup for Selected Marker */}
        {selectedMarker && (
          <Popup
            latitude={parseFloat(selectedMarker.Latitude)}
            longitude={parseFloat(selectedMarker.Longitude)}
            onClose={() => setSelectedMarker(null)} // Close popup when "x" is clicked.
            closeOnClick={false} // Keeps the popup open on map clicks.
            anchor="top"
          >
            <div style={{ maxWidth: "250px", textAlign: "left" }}>
              <strong>Country:</strong> {selectedMarker.country || "N/A"} <br />
              <strong>City:</strong> {selectedMarker.City || "N/A"} <br />
              <strong>Clinic Name:</strong> {selectedMarker.ClinicName || "N/A"}{" "}
              <br />
              <strong>Address:</strong> {selectedMarker.Address || "N/A"} <br />
              <strong>Phone:</strong> {selectedMarker["Phone Number"] || "N/A"}{" "}
              <br />
              <strong>Website:</strong>{" "}
              {selectedMarker.Website ? (
                <a
                  href={selectedMarker.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              ) : (
                "N/A"
              )}
              <br />
              <strong>Name:</strong> {selectedMarker.name || "N/A"} <br />
              <strong>URL:</strong>{" "}
              {selectedMarker.url ? (
                <a
                  href={selectedMarker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedMarker.url}
                </a>
              ) : (
                "N/A"
              )}
            </div>
          </Popup>
        )}
      </Map>

      {/* Lead Form Popup */}
      {showLeadForm && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            background: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "500px",
            width: "80%",
            maxHeight: "80%",

            overflowY: "auto" /* Adds vertical scroll if content overflows */,
          }}
        >
          <button
            onClick={() => setShowLeadForm(false)}
            style={{
              position: "sticky",
              top: "10px",
              left: "900%",
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            &times;
          </button>
          <LeadForm /> {/* Your custom LeadForm component */}
        </div>
      )}

      {/* Advertising Banner Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "10px",
          zIndex: 10,
          backgroundColor: "#ffeb3b",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          cursor: "pointer",
          width: "auto",
          maxWidth: "300px",
        }}
        onClick={() =>
          window.open(
            "https://sea-turtle-app-qfyrw.ondigitalocean.app/onboarding",
            "_blank"
          )
        }
        className="advert-banner"
      >
        <strong> ❄️Vitrification Offer! &rarr; Caring Cryokit</strong> <br />
        CRYOLOCK + GeneaBiomedx Media.
        <br />
        🌟Validate a for 2025🌟
        <br />
        {/* Image added below */}
        {/* <img
          src="gems.jpeg"
          alt="Cryokit Offer"
          style={{
            marginTop: "10px", // Add space above the image
            width: "100%", // Responsive width
            maxWidth: "150px", // Optional: Limit image width
            height: "auto", // Maintain aspect ratio
          }}
        /> */}
      </div>

      <style>
        {`
  @media (max-width: 768px) {
    .advert-banner {
      bottom: 10px; /* Adjust spacing */
      right: 10px;
      transform: translateX(0%); /* Center horizontally */
      width: 90%; /* Full width with padding */
      max-width: none;
      font-size: 12px; /* Adjust font size */
    }
  }
  `}
      </style>
    </div>
  );
};

export default MapboxWithSearch;
