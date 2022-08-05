var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d67f69530047e977c190548e584c9653";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// test

if (localStorage.getItem("isFirst") != 1) {
  $("#input1").show();
} else {
  $(".hello-wrapper").show();
  start();
  // typer2();
}

$("#name").on("click", () => {
  if ($(".input-name").val() == "施佳辰") {
    $("#input1").addClass("invisible", () => {});
    setTimeout(() => {
      $("#input1").hide();
      $("#input2").show();
    }, 1000);
  } else {
    alert("错误");
    $(".input-name").val("");
  }
});

$("#my-like").on("click", () => {
  if ($(".input-like").val() == "倪嘉伦") {
    $("#input2").addClass("invisible", () => {});
    setTimeout(() => {
      $("#input2").hide();
      $("#input3").show();
    }, 1000);
  } else {
    alert("错误");
    $(".input-like").val("");
  }
});

$("#combo").on("click", () => {
  if ($(".input-combo").val() == "使你沉沦") {
    $("#input3").hide();
    $(".right-answer").show();
    $(".right-answer").addClass("show");
    localStorage.setItem("isFirst", 1);
    setTimeout(() => {
      $(".right-answer").hide();
      $(".hello-wrapper").show();
      start();
    }, 1000);
  } else {
    alert("错误");
    $(".input-combo").val("");
  }
});

// $("#input1").hide();
// $("#input2").hide();
// $(".hello-wrapper").show();

// var i = 0;
// function typing() {
//   var divTyping = document.querySelector(".hello-wrapper");

//   // const typingContent = '';

//   if (i <= str.length) {
//     divTyping.innerHTML = str.slice(0, i++) + "_";

//     setTimeout("typing()", 200); //递归调用
//   } else {
//     divTyping.innerHTML = str; //结束打字,移除 _ 光标
//   }
// }

// typing();

function play(selector, content, callback) {
  let i = 0;
  let text = "&nbsp;";
  var divTyping = document.querySelector(selector);

  // while(i <= content.length) {
  //   divTyping.innerHTML = content.slice(0, i++) + "_";
  //   setTimeout("typing()", 200); //递归调用
  // }
  const timer = setInterval(() => {
    console.log(i, content.length);
    if (i >= content.length - 1) {
      clearInterval(timer);
      callback();
    }
    if (content[i] === "？") {
      text += "█";
      divTyping.innerHTML = text;
    } else if (content[i] === "！") {
      text = text.substring(0, text.length - 1);
      divTyping.innerHTML = text + "&nbsp;";
    } else {
      text += content[i];
      divTyping.innerHTML = text + "█";
    }

    i++;
  }, 200);
}

function start() {
  play(".hello-wrapper", "？！？！？！Hello, World!？！？！？！", () => {
    $(".hello-wrapper").addClass("invisible");
    setTimeout(() => {
      typer2(showButtons);
    }, 1000);
  });
}

let shownFlag = false;

function typer2(callback) {
  $.typer.options.typeSpeed = 1;
  // $(function () {
  //   $('[data-typer-targets]').typer();
  // });
  setTimeout(() => {
    shownFlag = true;
    callback && callback();
  }, 55000);
  $("pre").typeTo(profileText);
}

// .container .img

$(".container .img").on("click", function (e) {
  if (!shownFlag) {
    return;
  }
  if (e.target.classList.contains("hide-img")) {
    $(".container .img").addClass("show-img");
    $(".container .img").removeClass("hide-img");
    $("body").addClass("ggb");
    $("body").removeClass("ggf");
  } else {
    $(".container .img").addClass("hide-img");
    $(".container .img").removeClass("show-img");
    $("body").removeClass("ggb");
    $("body").addClass("ggf");
  }
});

function showButtons() {
  $(".btns").addClass("show");
}

$("#reset").on("click", function () {
  localStorage.setItem("isFirst", 0);
  alert("缓存清除啦");
});

$("#refresh").on("click", function () {
  location.reload();
});

const profileText =
  "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLLLLGGGGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLKWWWW#WWWWW#WWKDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLKW#W#W#WW#WWWWW##WWWKGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLDWW#WWW#WWWWW##########WWDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLKWWW#WWW#W#WWW####WW#######WDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLWWWWWWWWWWWWWWWW##WW########WWDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLWW#WWWWWWWWWKKW#WWWWW##########KKLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLWWWWWWWW#WWKWWWWWWWWWW#W##W#WWWWW#WDLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLKWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW#WWWWWGLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLKWW####WW###W##WWWWWWWWWWW#WWKEEWWWWW#KLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLW#####W#########W#WWWWWWWWWWKEEDGDEW#WWWELLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLK###W#############W##WWWWWKKEEDGGGLGE#W##WLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLE#######################WWKKEDDGGLffLGDW##WDLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLD########################WKEDDGGGffffffLD###WLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLW#######################WWEDDGGLLfffjfffLD###GLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLK####################W#W#WKDGGGLLjfjjjjjjfLW##ELLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLL########################WKDGGLLfjfjjjjjjjjfG###LLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLE#######################WKDGLLLfjjfjjjjjjjjfL###LLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLW####################W#WKDGLLffjjfjjjjjjjjjfLG##GLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLL#############W########WKDDLLffjjjjjjjjjfjjjffL##ELLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLG##########W##########WKEDGLLjjjjjjjjjjjjjjjjffL#WLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLW####################WKEDGGLjjjjjjjjjjjjjjjjjjfL#WLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLL####################WKEDGGLfjjjjjjjjjjjjjjjjjjffD#LLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLL####################WEDGGLLffjttjjjjjjjjjjjjjjffL#LLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLL###################WKDDGGLLffjtjjjjjjjjjjjjjjffGDELLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLD#############W##WW#WEDGGLLfjfjjjjjjjjjjjjjjjLDEEEDLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLE#########W######WWWKDGGGLffjffffffjfjjjjjjjLDEEDDGLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLK##############WWWWKEGDGLLLffLGGGLffjjjjjjffLLGGLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLK#######W####WWWWWWEGGGLGGGGGDDDDDLfjjjjjjjfLLGLLffGLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLK###########WW#WWWKEGGGGGDEEEDDDGLffjjjjjjffLGGGEEEGLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLK###WW######WWWWWWKDGGGDEEDDGLLLLffffjjjjjfLGGKWLGKDLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLE#########W###W#WKEGGGEEDGLLLLGGGLLffjfjjjfLGEWWLfEDLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLD############WWWKEEDGDEGLLfLLLLLGLLLLffjjjfLG#KKLGDGLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLL#####WW####W#WWEEDGGDGLLffLLLGDDGGGLLfjjjjLDKKEGGLLfLLLLLLLLLLLLLLLLLLLL\nLLLLLLLL############W#WEEEGGLLLfffLGDKKLDDLLLLjjttfLGGGLffffLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLW##W##W######WKEDEGGLLLfffGEW#WGjGELLLfjjijjjffffjjjfLLLLLLLLLLLLLLLLLLL\nLLLLLLLLK###########WWKEDEGGLLfffLDGWDWGfDGLLfffjttjjjjjjjjjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLL############WKEDEGGLLffLGKDEEEGGLLffffjjjitjjjjjjjjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLL#############KEEDGGLLfLGEKKEDGfLLffjjffjjj;tjjtjjtjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLLD#WW#########KEDDGGLLLGDDDDLLffLfjjjjjjfjjtijjjjjjjjjLLLLLLLLLLLLLLLLLL\nLLLLLLLLLL###########WKEDDGGLLLLGLLLffffjjjjjjffffjt;tjjjjttjjGLLLLLLLLLLLLLLLLL\nLLLLLLLLLLKW########WWKEDDGGLLfffffjjjjjjjjjjjfffffjitjfjjjjjjGLLLLLLLLLLLLLLLLL\nLLLLLLLLLLL########WWKKEDGGLLLfffjjjjjjjjjjjjjjfLLfjjttjfjjjjjLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLK####WKEKEEEEDDGLLLfjffjjjttjjttjjjfffLfjjtjjjjjjtjLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLL###KGLLLGGEDGGGLLffffjjjjjjtttjjjjLffjfjjjjfjjjjjjLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLK#WGLfLGLLDDDGGLLLfffjjjjjjtjjjjjfLffjjjjjjfjjjjjjLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLL#ELDLLfGLDDDGGLLffffjjjjjjjjtjjjfLfjjGGLjfLjjjjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLEWLELfLGLDGGGLLLLffjjjjjjjjjjjjjfLftfLfffLLLjtjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLL#LKLLLDDLLGGLLLLfffjjjjjttjtjjjjfGfffLLLLLfjjjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLE#GDLDEGffGGGLLLLffjjjjtjttjtjjjjGGGGGLGGLjjjjjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLL#EGLDEEDLLGGLLLLfffjjjttttjjjjjjfLGGGGGDLffffffLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLL#DELDEKELLGGLLffffjjjttttjjjjjjjLLGLLLGLGDDfjfLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLWDGLGGLLGGGGLLfjjjjjttttjjjjjjjfffLGGGDEEDfjLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLDDDGLGDGLLLfffjjjjttttttjjjjjjfGDDDDEDGLjfLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLDDDDDGGLLLfffjjjtttttttjjjjfGEEEEDDGLGfjfLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLDDDGLLGLLLffjjjtttttjtjjGDDDDDGGDGLfLfjLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLDLDEDGLfffjjjttttttjtfGLLLLLLfffjjfffLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLEEEDGfffjjjttttttjjjfLfjjjjjjjjjfjfLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLEKEDDLffjjjjtttttttjfffjjjjjjjjffffLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLLWWEDGDffjjjttttttttjjjjjjjjjjjjfjfLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLLG#WEEGGDffjjtttttttttjjjjjjjjfjjjffLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLL#WWEDGGLGfjjjjttttttttjjjjjjjfjjjjfLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLLKWWKKDDGLLLfjjjjtttttttjjjjjjjjjjjjfLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLLKEK#KEEDGGLLLffjjjjjtttjjjjjjjjjjjjfLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLLEEEK#KEEDGGGLLfffjjjjjjjjjjjjtjjjjffLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLLEKEEEKKEDDGGLLffffffjjjjjjjjtjjjjjfLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLLEEEEEDEWEEDGLLLLLffffffjfffjjjfffLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLLLEEEEEDDDWEEDGGLLLffffffffffffLLGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLLGEEDDEDDDDEEDDGGLLffffffffffffffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLLDDDDDDDDGGGGKDDGGLLLLffjffffffffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLLLLGDGDDGDGGGGLLWEGGLLLLfffffjfjffffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLLLffjjfGGGGGGGGGLLLEGGLLLLfLLffffjffffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLLLLjjjjtjjfjjfGGLGLLfLKDGLfLLfffLffffffffLLGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nLLLLLLfjjtttjttjjttjfLGGLLffGDGLLfLfffffffjjfffLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL\nfjtttttttttttttttttttjffLLfffEGLLfffffffjjjjjjfffffLLjLLLLLLLLLLLLLLLLLLLLLLLLLL\niiiiittttttttttttfttttttjLfffDGLLfffjjfjjfjjjffLLffffjffLLLLLLLLLLLLLLLLLLLLLLLL\niiiiiiiiittttiittttttttttjLLffGLLLffffjjfjjjjffGLfffLfjfjLLLLLLLLLLLLLLLLLLLLLLL\niiiiiiiiiiiiiiitttttttttitfffjELLLfjfjjfjjjjjffDGjffffjjjjLLLLLLLLLLLLLLLLLLLLLL\niiiiiiiiiiiiiiiiitjtttttiitfjjGGLLffjfjfjjjjffLDWfffffjjjjfLLLLLLLLLLLLLLLLLLLLL\niiiiiiiiiiiiiiiiittiiittittjjjjGLLffffjfjjjfffLD#fLffffjjjjLLLLLLLLLLLLLLLLLLLLL\niiiiiiiiiiiiiiiiiitLiiiiiittjjjDGLfffjjjfjjfffGGWLffLLfjjttfLLLLLLLLLLLLLLLLLLLL\niiiiiiiiiiiiiiiiiiitiiiiitiijfjDGLffffjjjjffffLGEEjfffjjttjtLLLLLLLLLLLLLLLLLLLL\n;iiiii;iiiiiiiiiiitijiiiiiiitjjfGLLLffffjffffLLGGKjffffjjjjjLLLLLLLLLLLLLLLLLLLL\ni;;ii;;ii;iiiiiiiiiitiiiiiiiiijjGGLLLfffjffffLLLLDfffffjjtjjfLLLLLLLLLLLLLLLLLLL\nii;;ii;iiiiiiiiiiiiiiiiiiiitiitjLGLLLLfffffffGLGGLLjjfffjjjjjLLLLLLLLLLLLLLLLLLL\niii;;i;;iiiiiiiiii;iijiiiiiiiiijfGGLLLLffffffGGLLLWjfffjjjjjjLLLLLLLLLLLLLLLLLLL\n;ii;;i;;iiiiiiiiiiiiijiiiiiiiiitjGGGGLLLffLffGGLfLWfffffjjjjjLLLLLLLLLLLLLLLLLLL\n;ii;iii;i;;iiiiiiiiiitiiiiiiiiiiiGGGLGGLLLLLfLGLLLWLjfffjtjjjLLLLLLLLLLLLLLLLLLL\n;i;;ii;i;;i;iiiiiiiiiitiiiiiiiiiifLLGLLGLLLLfLLLLGKGjfffjtjjtLLLLLLLLLLLLLLLLLLL\n;;i;i;ii;iiii;iiiii;iiGii;;iiiiiiiLLLLLGLLLLLLLLLGKWjjffftjfjLLLLLLLLLLLLLLLLLLL\n;;;;i;;ii;ii;iiiiiii;itiiiiiiiiiiiLLLLGLLLLLfLLLLGEWfjfffttfjLLLLLLLLLLLLLLLLLLL\n;;;i;;;iii;iiiiiiii;;itiii;iiiiiiiLLLLLLLLLLLLGLLLDWLjjffjtfjLLLLLLLLLLLLLLLLLLL\n;;;;;;;;iiiiiiiiiiiii;iGii;iiii;iijLLLLLLLLLLLLLLGGKKjfjjftjffLLLLLLLLLLLLLLLLLL\n;;;;;;iiiiiiiiiiiiiii;itiiiiiiiiiitLLLLLLLLfLLLGLLGEWfjjfftjffLLLLLLLLLLLLLLLLLL\n;;;;;;iiiiii;iiiii;i;;itiiiiiiii;iiLLLLLLLLLLLGLGLLDKLjfjjttjfLLLLLLLLLLLLLLLLLL\n;;;;;iiiii;i;iiiiii;;iiiLiiii;iiiiiLLLLLLLLLLLLLLLGGKEjfjfttjfLLLLLLLLLLLLLLLLLL\n;;;;;iiii;;i;iiiiiii;iiit;iiiiii;;iLLLLLLLLLLLLLGGLLE#fjjjjttfLLLLLLLLLLLLLLLLLL\n;;;;;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiifLLLLLLLLLLGLLLLLDKLjfjjttjLLLLLLLLLLLLLLLLLL\n;;;;;iiiiii;iiii;iiiiiiiifiiiiiiiiijLLLLLLLLLLLLGLLLGKEjfjtttjLLLLLLLLLLLLLLLLLL\n;;;;;iiiiiii;iiiiiiiiiiiij;iiiiiiiitffLLLLGLLLGLLLLLLEKfjjjjttLLLLLLLLLLLLLLLLLL\n;i;;iiiiiiii;iiiii;i;iiiit;iiiiiiiitfffLLLLLLLLLLGLLLEKLfjttttLLLLLLLLLLLLLLLLLL\n;;;;;iiiiiii;iiiiii;iiitii;itiiiiiitffffLLLLLLLLLLLLLEEEjfttttLLLLLLLLLLLLLLLLLL\n;;;;iiiiiiii;;iiiiiiiiiiiijiiiiiii;iffffLGLLLLGLLLLLLDDDfjttjttLLLLLLLLLLLLLLLLL\n;;i;;iiiiii;;;iiiiiiiiiiiif;iiiiii;itfffffGLLLLLLLLLDDDDLtjttttLLLLLLLLLLLLLLLLL\n;i;;iiiiiii;;;iiiiiiiiiiiititiiiiiiitjffffLGGLLLLLLGEGDDEtjtttjLLLLLLLLLLLLLLLLL\n;iiiiiiiiii;;iiiiiiiiiiiiiitiii;iiiiijfffffLLGLLLLLGDGEDGttjtttfLLLLLLLLLLLLLLLL\n;i;;iiiiii;;;;iiiiii;iiitiiG;iiiiiiiijfjffffGLLGLLGEDGDDfftjttttLLLLLLLLLLLLLLLL\n;;;;;ittii;i;iitiiiiiiiiiiif;ti;iiiiitjfffffLLLLLLGKGDEGLLttjjttLLLLLLLLLLLLLLLL\n;;;;;iitii;;iiitiiiiiiiiiiittiiiiiiiitjffLfffLGGGGEKLDEGfKttjjtjLLLLLLLLLLLLLLLL\n;;;;;iitiiiii;itiiiiiiiiiittGiiiiiiiiijfjfLLffLGGDEEGDDLLGjttjjtLLLLLLLLLLLLLLLL\n";
