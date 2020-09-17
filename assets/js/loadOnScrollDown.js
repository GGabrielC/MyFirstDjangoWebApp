function scrolledAtBottom(){
    var wrap = document.getElementById('contentWrapper');
    var contentHeight = wrap.offsetHeight;
    var yOffset = window.pageYOffset;
    var y=yOffset + window.innerHeight;
    if(y>=contentHeight){
        return true;
    }
}

$(document).on( 'scroll', function(){
    if(scrolledAtBottom())
        loadData();
});

lastTimeLoadedData = Date.now()

function loadDataOnCooldown(){
    if( Date.now()-lastTimeLoadedData > 333)
        return false;
    return true;
}

function loadData(){
    if(loadDataOnCooldown()==false) {
        lastTimeLoadedData = Date.now()
        $.ajax({
            url: "myapp/ajax/loadContent/", success: function (result) {
                $( "#contentWrapper" ).append( result.value );
            }
        });
    }
}