const TweetModel = require('../models/TweetModel')

module.exports = {
    async index(req, res) {
        const tweets = await TweetModel.find({}).sort("-createdAt");
        return res.json(tweets)
    },
    async store(req, res) {
        const tweet = await TweetModel.create(req.body);
        return res.json(tweet)
    }
}