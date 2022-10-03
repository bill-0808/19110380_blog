const { blogs } = require('../models/blogModel');

function getBlog(req, res) {
    const id = Number(req.params.id);
    var blog;
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id == id) {
            blog = blogs[i];
        }
    }
    if (blog) {
        return blog;
    }
    else {
        res.send('not valid');
    }
}

function addNewMember(req, res) {
    const groupMember = ['19110404', '19110497'];
    const newMember = { id: req.body.id, name: req.body.name };
    if (!groupMember.includes(newMember.id.toString())) {
        res.send('not valid')
    }
    else {
        mygroup.push(newMember);
        res.status(200).json(mygroup)
    }
}

module.exports = {
    getBlog,
    // addNewMember
}