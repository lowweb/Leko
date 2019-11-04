// var map;
// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 13,
//           center: {lat: 59.325, lng: 18.070},
//           disableDefaultUI: true
//         });

//         marker = new google.maps.Marker({
//           map: map,
//           draggable: true,
//           animation: google.maps.Animation.DROP,
//           position: {lat: 59.327, lng: 18.067}
//         });
//         marker.addListener('click', toggleBounce);
//       }

//       function toggleBounce() {
//         if (marker.getAnimation() !== null) {
//           marker.setAnimation(null);
//         } else {
//           marker.setAnimation(google.maps.Animation.BOUNCE);
//         }
//       }

// const googleMapsScript = document.createElement('script');
// googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPk4J3dw43Vw6CEJbGJVBQS3tr7ZCZego&callback=initMap';
// document.head.appendChild(googleMapsScript);