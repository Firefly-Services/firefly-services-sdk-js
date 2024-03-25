# Firefly Services SDK NodeJs Sample using Typescript

To run the examples in your development environment:

1. Clone this repo and navigate to the project folder.
2. Run `npm install`
3. Update `<clientId>, <ClientSecret>, <scopes>`  other details like presigned URLs in `./photoshop/photoshop.js` or `./lightroom/lightroom.js` or `./firefly/firefly.js`
4. Build Samples `npm run build`
5. Run the below command to execute photoshop.js example.
    ```
    node photoshop/photoshop.js
    ```
6. Run the below command to execute lightroom.js example.
    ```
    node lightroom/lightroom.js
    ```
7. Run the below command to execute firefly.js example.
    ```
    node firefly/firefly.js
    ```
Note: Any changes in the *.ts files needs a build to reflect in *.js files.
