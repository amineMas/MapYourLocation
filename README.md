Find your location using the Geolocation API and save all your locations in a json file.
I used the Geolocation API of javascript to get the location, it's available in most part of navigators. I used the Leaflet library to display an interactive map and see the current location on the map.
I also used Node.js and Express.js to create a server to host these files and to make a post request to fill the json file with the current location.

You can visit this link: https://aminemas.github.io/MapYourLocation/public but you will be able to get only your current location and see it on the map.

But you cannot store your location in a the json file as long as you don't start the node server. To do that you have to
1. clone the project
2. install dependencies using `npm install` in your terminal
3. then start the node server using `node index.js`
4. Go and hit on your browser http://localhost:3000/
5. Click on geolocate and then open dataFile.json you will see your geolocation coordinates
