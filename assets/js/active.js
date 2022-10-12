

const steps = Array.from(document.querySelectorAll(".registration-form form .step"));
const nextBtn = document.querySelectorAll(".registration-form form .next-btn");
const prevBtn = document.querySelectorAll(".registration-form form .previous-btn");
const form = document.querySelector(".registration-form form");


nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});



function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
var counter1=1;
document.getElementById("myCheckbox").addEventListener("click", function(event){
    event.preventDefault()
  });
function add_more_field1(){
    
    counter1+=1;
    html ='<div class="form-row" id="row'+counter1+'">\
    <div class="form-group ">\
        <label for="sno">S.no</label>\
        <input name="rno'+counter1+'" type="text" class="form-control item" id="inputEmail4">\
    </div>\
    <div class="form-group ">\
        <label for="papertitle">Paper Title</label>\
        <input name="rtitle'+counter1+'" type="text" class="form-control item" id="teacherid">\
    </div>\
    <div class="form-group ">\
        <label for="paperjournal">Journal Name</label>\
        <input name="rname'+counter1+'" type="text" class="form-control item" id="teacherdept">\
    </div>\
    <div class="form-group ">\
        <label for="papervolume">Volume</label>\
        <input name="rvol'+counter1+'" type="text" class="form-control item" id="teacherdept">\
    </div>\
    <div class="form-group ">\
        <label for="year"> Year</label>\
        <input name="ryear'+counter1+'" class="form-control item" type="date">\
    </div>\
    </div>'
    var form = document.getElementById('registration1')
    form.innerHTML+=html
}
var counter2=1;
function add_more_field2(){
    counter2+=1;
    html ='<div class="form-row" id="row'+counter1+'">\
    <div class="form-group">\
        <label for="conf">Conference</label>\
        <input name="cname'+counter1+'"type="text" class="form-control item" id="cname">\
    </div>\
    <div class="form-group">\
        <label for="confplace">Place of Conference</label>\
       <input name="cplace'+counter1+'" type="text" class="form-control item" id="cplace">\
    </div>\
    <div class="form-group ">\
        <label for="confdate"> Date</label>\
        <input name = "cdate'+counter1+'"class="form-control item" type="date" id="cdate">\
    </div>\
</div>'
    var form = document.getElementById('registration2')
    form.innerHTML+=html
}
var counter3=1;
function add_more_field3(){
    counter3+=1;
    html ='<div class="form-row" id="row'+counter3+'">\
    <div class="form-group">\
        <label for="paperPtitle">Paper Title</label>\
        <input name="pptitle'+counter3+'" type="text" class="form-control item" id="paperPtitle">\
    </div>\
    <div class="form-group">\
        <label for="paperPname">Conference Name</label>\
        <input name="ppname'+counter3+'" type="text" class="form-control item" id="paperPname">\
    </div>\
    <div class="form-group ">\
        <label for="paperPplace">Place of Conference</label>\
        <input name= "ppplace'+counter3+'" type="text" class="form-control item" id="paperPplace">\
    </div>\
    <div class="form-group ">\
        <label for="ppdoj">Date</label>\
        <input name="ppdate'+counter3+'" class="form-control item" type="date" id="ppdoj">\
    </div>\
    <div class="form-group ">\
        <label for="ppmyFile">Upload Pdf</label>\
        <input name="pppdf'+counter3+'" type="file" id="myFile"  id="ppmyFile">\
    </div>\
</div>'
    var form = document.getElementById('registration3')
    form.innerHTML+=html
}
var counter4=1;
function add_more_field4(){
    counter4+=1;
    html ='<div class="form-row" id="row'+counter4+'">\
    <div class="form-group">\
        <label for="patentname">Patent</label>\
        <input name="ppatent'+counter4+'" type="text" class="form-control" id="patentname">\
    </div>\
    <div class="form-group">\
        <label for="patentpublish">Published</label>\
        <input name="ppublish'+counter4+'" type="text" class="form-control" id="patentpublish">\
    </div>\
    <div class="form-group ">\
        <label for="patentauth">Authors</label>\
        <input name= "pauthor'+counter4+'" type="text" class="form-control item" id="patentauth">\
    </div>\
    <div class="form-group ">\
        <label for="patentdoj">Date</label>\
        <input name="pdate'+counter4+'" class="form-control item" type="patentdoj">\
    </div>\
</div>'
    var form = document.getElementById('registration4')
    form.innerHTML+=html
}
var counter5=1;
function add_more_field5(){
    counter5+=1;
    html ='<div class="form-row" id="row'+counter5+'">\
    <div class="form-group">\
        <label for="wsTitle">Title</label>\
        <input name="wtitle'+counter5+'" type="text" class="form-control item" id="wsTitle">\
    </div>\
    <div class="form-group">\
        <label for="wsVenue">Venue</label>\
        <input name="wvenue'+counter5+'" type="text" class="form-control item" id="wsVenue">\
    </div>\
    <div class="form-group ">\
        <label for="wsOrg">Organised By</label>\
        <input name="worg'+counter5+'" type="text" class="form-control item" id="wsOrg">\
    </div>\
    <div class="form-group ">\
        <label for="wsDoj">Date</label>\
        <input name="wdate'+counter5+'" class="form-control item" type="date" placeholder="Date Of Joining" id="wsDoj">\
    </div>\
</div>'
    var form = document.getElementById('registration5')
    form.innerHTML+=html
}

var counter6=1;
function add_more_field6(){
    counter6+=1;
    html ='<div class="form-row" id="row'+counter6+'">\
    <div class="form-group">\
        <label for="aName">Name Of Award</label>\
        <input name="aname'+counter6+'" type="text" class="form-control item" id="aName">\
    </div>\
    <div class="form-group">\
        <label for="aGiven">Given By</label>\
        <input class= "form-control item" name="agiven'+counter6+'" type="text"  id="aGiven">\
    </div>\
    <div class="form-group ">\
        <label for="adoj">Date</label>\
<input class= "form-control item" name="adate'+counter6+'"  type="date" placeholder="Date Of Recieving" id = "aDoj">\
    </div>\
    <div class="form-group ">\
        <label for="anyFile">Upload Pdf</label>\
        <input class= "form-control item" name="apdf'+counter6+'" type="file"   id="anyFile">\
    </div>\
</div>'
    var form = document.getElementById('registration6')
    form.innerHTML+=html
}

