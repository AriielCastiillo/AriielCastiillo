const {ONE_SIGNAL_CONFIG} = require("../config/app.config");
const pushNotificacionService = require("../services/push-notification.services");

exports.SendNotification = (req,res,next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: {"es":"APPMiVenta","en":"APPMiVenta"},
        included_segments: ["APPMiVenta"],
        content_available:true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION"
        }
    }

    pushNotificacionService.SendNotification(message,(error,results)=>{
        if(error){
            return next(error);
        }

        return res.status(200).send({
            message: "Success",
            data: results
        });
    });

};



exports.SendNotificationToDevice = (req,res,next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: {"es":"APPMiVenta","en":"APPMiVenta"},
        included_segments: ["APPMiVenta"],
        //included_player_ids: ["2c447b1a-5817-4ff5-8501-c0caf4f4bde7"], //req.body.devices,
        content_available:true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION"
        }
    }

    pushNotificacionService.SendNotification(message,(error,results)=>{
        if(error){
            return next(error);
        }

        return res.status(200).send({
            message: "Success",
            data: results
        });
    });

};