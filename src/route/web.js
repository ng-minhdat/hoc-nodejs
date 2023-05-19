import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    
    router.get('/surprise', homeController.getSurprise);

    router.get('/detail/user/:userID', homeController.getDetailPage);

    return app.use('/', router);
}

export default initWebRoute;