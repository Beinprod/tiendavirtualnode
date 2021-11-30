const rolesController = {
   
    index: (req, res) => res.render('roles/roles',{
        page_tag: 'Roles Usuario',
        page_title: 'Roles Usuario',
        page_name: 'rol_usuario'
    })
}

module.exports = rolesController;