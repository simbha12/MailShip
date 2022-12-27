// sorting valid and invalid emails

let upload = document.getElementById('upload');
upload.addEventListener('change',()=>{
    let few = new FileReader();
    few.readAsText(upload.files[0]);
    few.onload = function(){
        let Arr = few.result.split(/\r?\n|\n/).map(e=>{
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e=>{
                return `<td>${e}</td>`;
            })
            let cre = document.createElement("tr");
            cre.innerHTML=m;
            if(em!=""){
                if(em.charAt(em.length - 4) == '.'){
                    document.querySelector("table#val").appendChild(cre);
                    Window.valMail.push(em);
                    Window.valNo= Window.valNo + 1;
                    return false;
                }
                else if(em.charAt(em.length-3)=='.'){
                    document.querySelector("table#val").appendChild(cre);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else{
                    document.querySelector("table#inval").appendChild(cre);
                    invalNo = invalNo +1;
                    return false;
                }
            }
        });
        document.querySelector('#valcount').innerHTML = Window.valNo;
        document.querySelector('#invalcount').innerHTML = invalNo;
    };

});
// mail sending

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "garvmaheshwari02@gmail.com",
        Password : "642326258240192234BFE12D469D331EB797",
        To : Window.valMail,
        From : document.getElementById('from').value,
        Subject : document.querySelector('#subject').value,
        Body : document.getElementById('msg').value
    }).then(
      message => alert(Window.valNo + " mails has been sent successfully, press " + message + " to continue.")
    );
    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText );
}
