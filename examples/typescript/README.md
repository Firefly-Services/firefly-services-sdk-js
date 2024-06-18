# Firefly Services SDK NodeJs Sample using Typescript

To run the examples in your development environment:

1.  Clone this repo and navigate to the project folder.
2.  Run `npm install`
3.  Update `<clientId>, <clientSecret>, <scopes>` other details like presigned URLs in `./photoshop/photoshop.js` or `./lightroom/lightroom.js` or `./firefly/fireflyWithToken.js` or `./firefly/fireflyWithCredentials.js`
4.  Build Samples `npm run build`
5.  Run the below command to execute firefly example.
    -   Authentication via token
        ```sh
            node firefly/fireflyWithToken.js
        ```
    -   Authentication via Credentials
        ```sh
          node firefly/fireflyWithCredentials.js
        ```
6.  Run the below command to execute photoshop.js example.
    ```
    node photoshop/photoshop.js
    ```
7.  Run the below command to execute lightroom.js example.
    ```sh
        node lightroom/lightroom.js
    ```

Note: Any changes in the *.ts files needs a build to reflect in *.js files.
