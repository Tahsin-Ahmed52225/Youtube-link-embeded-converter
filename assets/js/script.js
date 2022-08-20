$(window).on("load",function(){
    $("#youtube_link").bind("paste", function(e){
            let pastedData = e.originalEvent.clipboardData.getData('text');
            let data = pastedData.replace('https://www.youtube.com/watch?v=','');
            let newLink = `https://www.youtube.com/embed/`+data;
            $('#embeded_link').attr('value',newLink)
            $('iframe').attr('src',newLink);
            //console.log(newLink);
        } 
    );
})
