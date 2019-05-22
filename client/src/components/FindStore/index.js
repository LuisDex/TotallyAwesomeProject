import React, { Component } from "react";
import "./findStore.css";

class FindStore extends Component {
    constructor() {
        var map, infoWindow;
        function initAutocomplete() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -33.8688, lng: 151.2195 },
                zoom: 13,
                mapTypeId: 'roadmap'
            });
            infoWindow = new google.maps.InfoWindow;
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Greetings Adventurer!");
                    infoWindow.open(map);
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            };
            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });
            var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function () {
                var places = searchBox.getPlaces();
                console.log(places);
                if (places.length == 0) {
                    return;
                }
                cardPlaces(places);
                // Clear out the old markers.
                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];
                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
            });
        }
        function cardPlaces(places) {
            for (var i = 0; i < places.length; i++) {

                var newCard = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                var cardTitle = $("<h5>").addClass("card-title").text(places[i].name);
                var cardAddress = $("<p>").text(places[i].formatted_address);
                var rating = $("<p>").text("Rating: " + places[i].rating + "/5");
                var ratingUsers = $("<p>").text("Number of reviewers: " + places[i].user_ratings_total + " users");
                $(cardBody).append(cardTitle).append(cardAddress).append(rating).append(ratingUsers);
                $(newCard).append(cardBody);
                $("#storeSpace").append(newCard);
            }
        };
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }
    }

    render() {
        return (
            <div>
                <input id="pac-input" class="controls" type="text" placeholder="Search Box" />
                <div class="row" id="map_row">
                    <div class="col-sm-8 offset-sm-2">
                        <div class="jumbotron" id="map"></div>
                    </div>
                </div>
                <div class="row">
                    <div id="storeSpace">
                    </div>
                </div>
            </div>
        );
    }
}

export default FindStore;