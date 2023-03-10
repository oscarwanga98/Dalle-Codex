import express from 'express'
import * as dotenv from 'dotenv'
import {Configuration,OpenAIApi} from 'openai'



dotenv.config()

const router=express.Router()

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
})

const openai=new OpenAIApi(configuration)

router.route('/').get((req,res)=>{
    res.send('Hello form Dalle')
})

router.route('/').post(async(req,res)=>{
    try {
        const {prompt}=req.body;
        const aiResponse=await openai.createImage({
            prompt,
            n:1,
            size:"512x512",
            response_format:"b64_json"
        })
        const image = await aiResponse.data.data[0].b64_json;
        //console.log(typeof image)
        res.status(200).json({photo:image})
        // res.status(200).json({"photo":"this is the SG"})
        

    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message)
    }
})

export default router