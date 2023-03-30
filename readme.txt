This is a very basic app that retrieves a group of pictures from the Mars Rover on a hard coded date from a publically accessible NASA api. We would like you to make some basic changes to this application to assess some of your abilities. Feel free to look up any resources you normally would in your normal day to day. Feel free to complete the following in any order that you like.

To Do:

1) Change the provided date to the api to 6-20-2021.

2) Create a model file that accurately types the response from the api called in the data service. Assign that type appropriately.

3) Change the application so that only the first 3 images that come back from the api response display on the page.

4) Display the images without using a ".subscribe()" on the observable that returns from the service.

5) Create a new function in the data service called "getUrlsFromRoverPictures" that calls the same api and returns only the urls to display the pictures. Have the getPictures() method in the component invoke this new function to use the strings to display the pictures on the page.