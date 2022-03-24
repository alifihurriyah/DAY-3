








function submitData(){//fungsi untuk menampilkan data inputan
    let name =document.getElementById("input-name").value
    let email =document.getElementById("input-email").value
    let phone =document.getElementById("input-phone").value
    let subject =document.getElementById("input-subject").value
    let message =document.getElementById("input-message").value

    console.log(name);//menampilkan text ke console javascript
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name==""){
        return alert("nama wajib diisi")//untuk menampilkan announcement
    }
    else if(email==""){
        return alert("email wajib diisi")

    }
    else if(phone==""){
        return alert("phone wajib diisi")

    }
    else if(subject==""){
        return alert("subject wajib diisi")

    }
    else if(message==""){
        return alert("message wajib diisi")


    
    }

    
    let emailReceiver ='dian@gmail.com'

    let a = document.createElement('a') // pembuatan tag anchor / a

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo ${name} 
    
    
    
    ${message} please call me ${phone}`

    a.click() // menjalankan tag ancor/ mengklik tag anchor


    let dataObject = {
        nama: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject); //untuk menmpilkan detail data object pada console


}

