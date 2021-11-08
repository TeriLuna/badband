console.log("aksldjalk;sdj");
$(document).ready(function(){
  pageUrl = window.location.href;
  if(pageUrl.includes("#")){
    validIds = ["kala", "pollo", "alex", "karol"]    
    tabId = pageUrl.split("#").at(-1);
    if(validIds.includes(tabId)){
      console.log(tabId);
      $("ul.js-tabs-title li").removeClass("active").removeClass("show");
      $("#" + tabId + "-tab").addClass("active").addClass("show");    
      $("#myTabContent div").removeClass("active").removeClass("show");
      $("#myTabContent " + "#" + tabId).addClass("active").addClass("show");
    }else{
      $("#kala-tab").addClass("active").addClass("show");    
    }
    
  }  
});