const path = require('path');

const mainController = {
    index: (req, res) => res.render('home'),
    
    dashboard: (req, res) => res.render('dashboard/dashboard',{
        page_tag: 'Dashboard - Tienda Virtual',
        page_title: 'Dashboard - Tienda Virtual',
        page_name: 'dashboard'
    }),
}

module.exports = mainController