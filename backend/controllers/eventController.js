


const Event = require("./../models/eventModel");

exports.getEvents=async(req,res)=>{
 try {
    const allevents= await Event.find();
    context={
        status:"success",
        data:allevents
    }
    res.status(200).json(context);
 } catch (error) {
    res.status(400).json({Error:err});
 }
}

exports.getEvent=async(req,res)=>{
    try {
        const event= await Event.findOne({_id:req.params.id});
    context={
        status:"success",
        data:event
    }
    res.status(200).json(context);
    } catch (error) {
        res.status(400).json({Error:err}); 
    }
}
exports.addevent=async(req,res)=>{
    try {
        const newdata={
            club:req.body.club,
            info:req.body.info,
            name:req.body.info,
            oneline_content:req.body.info,
            rest_content:req.body.rest_content,
            event_image:req.body.event_image,
            rulebook_link:req.body.rulebook,
            description:req.body.description,
            problemset_link:req.body.problemset_link,
            createdAt:req.body.createdAt,
            start_time: {
                day:req.body.start_time_day,
                time:req.body.start_time_time
            },
            end_time: {
                day:req.body.end_time_day,
                time: req.body.end_time_time
            },
            prices: {
                first:req.body.firstprice,
                second:req.body.sencondprice,
                third:req.body.thirdprice
            },
            coordinators: {
                first: {
                    name:req.body.firstcoordinators,
                    contact:req.body.firstcoordinatorscontact
                },
                second: {
                    name:req.body.secondcoordinators,
                    contact:req.body.secondcoordinatorscontact
                },
            },
            teamMaxSize:req.body.teamMaxsize,
            teamMinSize:req.body.teamMinsize
        } 
        const add=Event.insertOne(newdata);
        res.status(200).json({status:"success"})
    } catch (error) {
        res.status(400).json({Error:err}); 
    }
}

exports.updateEvent=async()=>{
    try {
        const newdata={
            club:req.body.club,
            info:req.body.info,
            name:req.body.info,
            oneline_content:req.body.info,
            rest_content:req.body.rest_content,
            event_image:req.body.event_image,
            rulebook_link:req.body.rulebook,
            description:req.body.description,
            problemset_link:req.body.problemset_link,
            createdAt:req.body.createdAt,
            start_time: {
                day:req.body.start_time_day,
                time:req.body.start_time_time
            },
            end_time: {
                day:req.body.end_time_day,
                time: req.body.end_time_time
            },
            prices: {
                first:req.body.firstprice,
                second:req.body.sencondprice,
                third:req.body.thirdprice
            },
            coordinators: {
                first: {
                    name:req.body.firstcoordinators,
                    contact:req.body.firstcoordinatorscontact
                },
                second: {
                    name:req.body.secondcoordinators,
                    contact:req.body.secondcoordinatorscontact
                },
            },
            teamMaxSize:req.body.teamMaxsize,
            teamMinSize:req.body.teamMinsize
        } 
        const add=Event.updateOne({_id:req.params.id},newdata);
        res.status(200).json({status:"success"})
        
    } catch (error) {
        res.status(400).json({Error:err});

    }
    
}
exports.deleteOneEvent=async()=>{
    try {
        const eventsid=req.params.id;
        const s= await Event.deleteOne({_id:eventsid});
        res.status(200).json({status:"success"})
    } catch (error) {
        res.status(400).json({Error:err});
    }
}

exports.deleteAllEvent=async()=>{
    try {
        const s= await Event.deleteMany({});
        res.status(200).json({status:"success"})
    } catch (error) {
        res.status(400).json({Error:err});
    }
}