const removalsCtrl = {};
const Removal = require('../models/Removal');
const distance = require('google-distance');
distance.apiKey = 'AIzaSyDkgWLH0HP2-fWDBMyzRGc4tItELA8Uc34';


removalsCtrl.getRemovals = async (req, res) => {
    const removal = await Removal.find();
    res.json(removal);
}

removalsCtrl.createRemoval = async (req, res) => {
    const { name, email, origin, destination, origin_floor, destination_floor, date, estances, estances_detail } = req.body;

    const getKilometers = (origin, destination) => {
        return new Promise((resolve, reject) => {
          distance.get({ origin, destination }, function(err, data) {
            return err ? reject(err) : resolve(data.distanceValue);
          })
        }) 
      }
    
      // Be sure to handle failures with this, or however you decide to do it
      const kilometers = await getKilometers(origin, destination);

    const newRemoval = await new Removal({
        name,
        email,
        origin,
        destination,
        kilometers,
        origin_floor,
        destination_floor,
        date,
        estances,
        estances_detail

    })


    await newRemoval.save();
    res.json({ message: 'Removal Saved' })

};


removalsCtrl.getRemoval = async (req, res) => {
    const removal = await Removal.findById(req.params.id);
    res.json(removal)


}

removalsCtrl.updateRemoval = async (req, res) => {
    const { title, content, author, date } = req.body;
    await Removal.findOneAndUpdate(req.params.id, {
        title,
        author,
        date,
        content
    });
    res.json({ message: 'Removal updated' })

}

removalsCtrl.deleteRemoval = async (req, res) => {
    await Removal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Removal Deleted' })
}



module.exports = removalsCtrl;
