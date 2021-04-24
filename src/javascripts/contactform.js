// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript
let contacts =[]
export function addContacts(e){
    e.preventDefault()
    let contact = {
        fname: document.getElementById('fn').value,
        lname: document.getElementById('ln').value,
        em: document.getElementById('em').value
    }

        if(contact.fname.trim() && contact.lname.trim() && contact.em.trim()){
            contacts.push(contact)
            let tr= document.createElement('tr')
            tr.innerHTML = `
             <td>${contact.fname}</td>
             <td>${contact.lname}</td>
             <td>${contact.em}</td>
             `
            document.querySelector('tbody').appendChild(tr)

            document.getElementById('fn').value=''
            document.getElementById('ln').value=''
            document.getElementById('em').value=''
            
    }
}