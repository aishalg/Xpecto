const Faq = require("./../models/faqModel");


exports.getFaqs= async(req, res, next) =>{
    try{
        const faqs= await Faq.find();

        context={
            status:"success",
            data: faqs,

        };
        res.status(200).json(context);

    }
   
    catch(err){
        res.status(400).json({Error: err});
    }
}

	exports.getOneFaq=async(req,res, next)=>{
    try {
        const OneFaq = await Faq.findOne({_id:req.params.id});
    context={
        status:"success",
        data: OneFaq
    }
    res.status(200).json(context);
	    res.status(200).json({status:"success"})
    } catch (error) {
        res.status(400).json({Error:err}); 
    }
}


exports.addFaqs= async(req, res, next)=> {
    try{
        const newData={
            
                question: 
                   req.body.question,
                    
                
                answer: req.body.answer,
            
        }
        const upd= await Faqs.insertOne( newData)
    }
    catch(err){
        res.status(400).json({Error: err});
    }
};




exports.newUpdate= async(req, res, next)=> {
    try{
        const newData={
            $set:{
                question: 
                   req.body.question,
                    
                
                answer: req.body.answer,
            }
        }
        const upd= await Faqs.updateOne({_id:req.params.id}, newData)
    }
    catch(err){
        res.status(400).json({Error: err});
    }
};

exports.deleteFaqs= async(req, res, next)=> {
    try{
       
        const upd= await Faqs.deleteOne({_id:req.params.id})
    }
    catch(err){
        res.status(400).json({Error: err});
    }
};

