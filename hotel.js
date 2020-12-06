$(document).ready(function(){
    $("#addCommentBtn").click(function(){
      var commentRow = `<div class="yorumRow">
                        <div class="yorum">
                            <div class="userPicContainer">
                                <img class="userPic" src="images/Layer6.png">
                            </div>
                            <div class="yorumTextName">
                                <p class="yorumText">
                                    "Kışın zorlu şartlarda kaldığımız bu otelimizde
                                    inanılmaz keyifli zamanlar geçirdik. Kış uykusuna
                                    yatan ayıları mağarada izleme fırsatı yakaladık."
                                </p>
                            
                                <h3>EMILY GWENDSONN</h3>
                            </div>
                        </div>

                        <div class="yorum">
                            <div class="userPicContainer">
                                <img class="userPic" src="images/Layer8.png">
                            </div>
                            <div class="yorumTextName">
                                <p class="yorumText">
                                    "Geyikleri avlayamasak da onları takip etmek, onların hayatlarının
                                    birer parçası olmak inanılmazdı. Otel rehberimiz Mr. Joe Biden'a
                                    güzel yönlendirmeleri için teşekkür ederim."
                                </p>

                                <h3>ROBERT JULIAN</h3>
                            </div>
                        </div>
                    </div>`
      $("#yorumlarBody").append(commentRow)
      alert("Success!");
    });

//Gönder button functionality
    $("#gönderBtn").click(function(){

        var date = new Date();
        var day = date.getDate();

        if($('#arrivalDate').val().slice(8, 10) < day || $('#leaveDate').val().slice(8, 10) <= day){
            alert("Please pick proper date")
        }

        if(!$('#fname').val() || 
           !$('#arrivalDate').val() || 
           !$('#email').val() || 
           !$('#leaveDate').val() || 
           !$('#phone').val()){
            alert("Please fill all the fields")
        }
    });
});

// Initialize and add the map
function initMap() {
    const uluru = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById("harita"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }